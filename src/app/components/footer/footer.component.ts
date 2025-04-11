import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataService } from '../../shared/services/user-data.service';
import { Social } from '../../shared/models/user-data.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  currentYear = new Date().getFullYear();
  name = '';
  email = '';
  socialLinks: Social[] = [];
  footerLinks: {
    category: string;
    links: {
      name: string;
      url: string;
    }[];
  }[] = [];

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userDataService.getUserData().subscribe(data => {
      this.name = data.name;
      this.email = data.email;
      this.socialLinks = data.socials;
      this.footerLinks = data.footerLinks || [];
    });
  }

  /**
   * Get the Font Awesome class for a social media icon
   * @param iconName The icon identifier
   * @returns The appropriate Font Awesome class
   */
  getSocialIconClass(iconName: string): string {
    return this.userDataService.getSocialIconClass(iconName);
  }
}
