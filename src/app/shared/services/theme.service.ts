import { Injectable, signal, inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnDestroy {
  private readonly THEME_KEY = 'preferred-theme';
  private readonly DARK_THEME_CLASS = 'dark-theme';
  private readonly platformId = inject(PLATFORM_ID);
  private systemThemeMatcher: MediaQueryList | null = null;
  private mediaQueryListener: ((e: MediaQueryListEvent) => void) | null = null;
  private useSystemTheme = true;

  public isDarkTheme = signal(false);

  constructor() {
    this.initializeTheme();
  }

  ngOnDestroy(): void {
    this.removeSystemThemeListener();
  }

  private initializeTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem(this.THEME_KEY);

      if (savedTheme) {
        this.useSystemTheme = false;
        this.setTheme(savedTheme === 'dark');
      } else {
        this.useSystemTheme = true;
        this.setupSystemThemeListener();
      }
    }
  }

  private setupSystemThemeListener(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.systemThemeMatcher = window.matchMedia('(prefers-color-scheme: dark)');

      this.setTheme(this.systemThemeMatcher.matches);

      this.mediaQueryListener = (e: MediaQueryListEvent) => {
        if (this.useSystemTheme) {
          this.setTheme(e.matches);
        }
      };

      this.systemThemeMatcher.addEventListener('change', this.mediaQueryListener);
    }
  }

  private removeSystemThemeListener(): void {
    if (this.systemThemeMatcher && this.mediaQueryListener && isPlatformBrowser(this.platformId)) {
      this.systemThemeMatcher.removeEventListener('change', this.mediaQueryListener);
    }
  }

  public toggleTheme(): void {
    this.useSystemTheme = false;
    this.setTheme(!this.isDarkTheme());
  }

  public resetToSystemTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.useSystemTheme = true;
      localStorage.removeItem(this.THEME_KEY);
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark);
    }
  }

  public setTheme(isDark: boolean): void {
    this.isDarkTheme.set(isDark);

    if (isPlatformBrowser(this.platformId)) {
      if (!this.useSystemTheme) {
        localStorage.setItem(this.THEME_KEY, isDark ? 'dark' : 'light');
      }

      if (isDark) {
        document.body.classList.add(this.DARK_THEME_CLASS);
      } else {
        document.body.classList.remove(this.DARK_THEME_CLASS);
      }
    }
  }
}
