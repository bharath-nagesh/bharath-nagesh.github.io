import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDataService } from '../../shared/services/user-data.service';
import { Social } from '../../shared/models/user-data.model';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
    name: string = '';
    title: string = '';
    location: string = '';
    email: string = '';
    socials: Social[] = [];
    bio: string = '';

    constructor(private userDataService: UserDataService) {}

    ngOnInit(): void {
        this.userDataService.getUserData().subscribe(data => {
            this.name = data.name;
            this.title = data.title;
            this.location = data.location;
            this.email = data.email;
            this.socials = data.socials;
            this.bio = data.bio;
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

    /**
     * Handle clicking the "Explore More" button to scroll to the Skills section
     * @param event The click event
     */
    scrollToSkills(event: Event): void {
        event.preventDefault();

        const skillsSection = document.getElementById('skills');

        if (skillsSection) {
            const headerHeight = 70;

            const elementPosition = skillsSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            setTimeout(() => {
                window.dispatchEvent(new Event('scroll'));
            }, 100);
        }
    }
}
