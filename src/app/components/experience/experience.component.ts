import { Component, OnInit } from '@angular/core';
import { TimelineItem } from '../../shared/components/timeline-item/timeline-item.component';
import { TimelineComponent } from '../../shared/components/timeline/timeline.component';
import { CommonModule } from '@angular/common';
import { UserDataService } from '../../shared/services/user-data.service';
import moment from 'moment';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, TimelineComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  workExperiences: TimelineItem[] = [];
  education: TimelineItem[] = [];

  constructor(private userDataService: UserDataService) {}

  ngOnInit(): void {
    this.userDataService.getUserData().subscribe(data => {
      this.workExperiences = (data.experiences || []).map(exp => {
        const startDateFormatted = moment(exp.startDate).format('MMM YYYY');

        let periodFormatted = startDateFormatted + ' - ';
        if (exp.endDate === 'Present') {
          periodFormatted += 'Present';
        } else {
          periodFormatted += moment(exp.endDate).format('MMM YYYY');
        }

        return {
          title: exp.title || '',
          subtitle: exp.company || '',
          period: periodFormatted,
          location: exp.location || '',
          description: exp.description || ''
        };
      });

      this.education = (data.education || []).map(edu => {
        const startDate = moment(edu.startDate).format('YYYY');
        const endDate = moment(edu.endDate).format('YYYY');
        const periodFormatted = `${startDate} - ${endDate}`;

        return {
          title: edu.degree || '',
          subtitle: edu.institution || '',
          period: periodFormatted,
          location: edu.location || '',
          description: edu.description || ''
        };
      });
    });
  }
}
