import { Component, HostListener, OnInit, PLATFORM_ID, Inject, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ThemeService } from '../../shared/services/theme.service';
import { Router, RouterModule } from '@angular/router';
import { UserDataService } from '../../shared/services/user-data.service';

/**
 * Header component for the application
 * Handles navigation, theme toggling, and scroll detection
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, AfterViewInit {
  logoText = '';
  isScrolled = false;
  activeSection = 'about';
  isBrowser: boolean;
  scrollOpacity = 0;
  sectionTitleOpacity = 0;
  headerHeight = 60;
  fadeElements: HTMLElement[] = [];
  isThemeDropdownOpen = false;
  manuallySelected = false;
  manualSelectionTimeout: any = null;
  initTime = Date.now();

  sectionTitles: { [key: string]: string } = {
    'about': 'About',
    'skills': 'Skills',
    'experience': 'Experience',
    'contact': 'Contact'
  };

  navItems: { label: string, link: string }[] = [];

  mobileMenuOpen = false;

  constructor(
    public themeService: ThemeService,
    private userDataService: UserDataService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private elementRef: ElementRef
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    this.userDataService.getUserData().subscribe(data => {
      this.logoText = data.name || '';

      const navItems = data.navItems || [];
      this.navItems = navItems
        .filter(item =>
          item.label !== 'Home' &&
          item.label !== 'Contact'
        )
        .map(item => ({
          label: item.label || '',
          link: item.isExternal ? item.route || '' : `#${(item.route || '').replace('#', '')}`
        }));

      navItems.forEach(item => {
        if (!item.isExternal && (item.route || '').startsWith('#')) {
          const sectionId = (item.route || '').replace('#', '');
          this.sectionTitles[sectionId] = item.label || '';
        }
      });

      if (this.isBrowser) {
        this.scrollOpacity = 0;
        this.sectionTitleOpacity = 0;

        this.checkScroll();

        const hash = window.location.hash.substring(1);
        if (hash) {
          this.activeSection = hash;
        } else {
          this.handleScrollSpy();
        }

        if (window.scrollY > 20) {
          this.scrollOpacity = Math.min(1, Math.max(0, window.scrollY / 100));
        } else {
          this.scrollOpacity = 0;
          this.sectionTitleOpacity = 0;
        }

        const headerElement = this.elementRef.nativeElement.querySelector('.header');
        if (headerElement) {
          this.headerHeight = headerElement.offsetHeight;
        }

        document.addEventListener('click', this.closeThemeDropdownOnOutsideClick.bind(this));
      }
    });
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.initFadeElements();
      this.applyFadeEffect();
    }
  }

  initFadeElements() {
    this.fadeElements = Array.from(document.querySelectorAll('h1, h2, h3, .name, .title')) as HTMLElement[];
  }

  applyFadeEffect() {
    if (!this.isBrowser || this.fadeElements.length === 0) return;
    const headerBottom = this.headerHeight + 60;

    this.fadeElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const elementTop = rect.top;
      const elementBottom = rect.bottom;

      const distanceInHeader = headerBottom - elementTop;

      if (distanceInHeader > 0 && elementBottom > 0) {
        const fadePercentage = Math.min(1, distanceInHeader / rect.height);
        const opacity = 1 - fadePercentage;

        element.style.opacity = opacity.toString();
      } else if (elementBottom <= 0) {
        element.style.opacity = '0';
      } else {
        element.style.opacity = '1';
      }
    });
  }

  @HostListener('window:scroll', [])
  checkScroll() {
    if (!this.isBrowser) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const heroHeight = window.innerHeight * 0.5;

    this.isScrolled = scrollTop > 20;

    if (scrollTop > 5) {
      this.scrollOpacity = Math.min(1, scrollTop / 100);
    } else {
      this.scrollOpacity = 0;
    }

    if (scrollTop > window.innerHeight * 0.3) {
      this.manuallySelected = false;
    }

    if (Date.now() - this.initTime > 1000) {
      this.handleScrollSpy();
    }

    this.applyFadeEffect();
  }

  handleScrollSpy() {
    if (!this.isBrowser || this.manuallySelected) {
      return;
    }

    const sections = ['about', 'skills', 'experience', 'contact'].map(id =>
      document.getElementById(id)
    ).filter(section => section !== null) as HTMLElement[];

    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    let currentSection = '';
    let smallestDistance = Number.MAX_VALUE;

    for (const section of sections) {
      const sectionTop = section.offsetTop - this.headerHeight - 10;
      const sectionBottom = sectionTop + section.offsetHeight;
      const distance = Math.abs(scrollPosition - sectionTop);

      if (
        (scrollPosition >= sectionTop && scrollPosition < sectionBottom) ||
        (distance < smallestDistance)
      ) {
        smallestDistance = distance;
        currentSection = section.id;
      }
    }

    if (currentSection && currentSection !== this.activeSection) {
      this.activeSection = currentSection;
    }
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  toggleThemeDropdown(event: Event) {
    event.stopPropagation();
    this.isThemeDropdownOpen = !this.isThemeDropdownOpen;
  }

  closeThemeDropdownOnOutsideClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const themeSelector = this.elementRef.nativeElement.querySelector('.theme-selector');

    if (themeSelector && !themeSelector.contains(target)) {
      this.isThemeDropdownOpen = false;
    }
  }

  setLightTheme() {
    this.themeService.setTheme(false);
    this.isThemeDropdownOpen = false;
  }

  setDarkTheme() {
    this.themeService.setTheme(true);
    this.isThemeDropdownOpen = false;
  }

  useSystemTheme() {
    this.themeService.resetToSystemTheme();
    this.isThemeDropdownOpen = false;
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();

    if (this.mobileMenuOpen) {
      this.toggleMobileMenu();
    }

    if (this.isThemeDropdownOpen) {
      this.isThemeDropdownOpen = false;
    }

    this.activeSection = sectionId;
    this.manuallySelected = true;

    if (this.manualSelectionTimeout) {
      clearTimeout(this.manualSelectionTimeout);
    }

    this.manualSelectionTimeout = setTimeout(() => {
      this.manuallySelected = false;
    }, 2000);

    const section = document.getElementById(sectionId);

    if (section) {
      const offset = section.offsetTop - this.headerHeight;
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    }
  }

  isActive(sectionId: string): boolean {
    return this.activeSection === sectionId;
  }
}
