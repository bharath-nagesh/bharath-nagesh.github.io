import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillBoxComponent } from '../../shared/components/skill-box/skill-box.component';
import { UserDataService } from '../../shared/services/user-data.service';
import { SkillCategory } from '../../shared/models/user-data.model';
import { get } from 'lodash';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillBoxComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {
  skillCategories: SkillCategory[] = [];

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userDataService.getUserData().subscribe(data => {
      this.skillCategories = get(data, 'skillCategories', []);
    });
  }

  /**
   * Get the Font Awesome class for a category icon
   * @param iconName The icon identifier
   * @returns The appropriate Font Awesome class
   */
  getCategoryIconClass(iconName: string): string {
    return this.userDataService.getSocialIconClass(iconName);
  }
}
