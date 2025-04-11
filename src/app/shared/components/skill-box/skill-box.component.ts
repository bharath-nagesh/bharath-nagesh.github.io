import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCategory, Skill } from '../../models/user-data.model';

@Component({
  selector: 'app-skill-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-box.component.html',
  styleUrl: './skill-box.component.scss'
})
export class SkillBoxComponent {
  /**
   * Input property for the skill category data
   */
  @Input() category!: SkillCategory;
}
