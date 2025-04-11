import { Component, OnInit } from '@angular/core';
import { TimelineItem } from '../../shared/components/timeline-item/timeline-item.component';
import { TimelineComponent } from '../../shared/components/timeline/timeline.component';
import { CommonModule } from '@angular/common';
import { UserDataService } from '../../shared/services/user-data.service';
import moment from 'moment';
import { get, map, isEmpty } from 'lodash';

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
      this.workExperiences = map(get(data, 'experiences', []), exp => {
        const startDateFormatted = moment(get(exp, 'startDate')).format('MMM YYYY');

        let periodFormatted = startDateFormatted + ' - ';
        if (get(exp, 'endDate') === 'Present') {
          periodFormatted += 'Present';
        } else {
          periodFormatted += moment(get(exp, 'endDate')).format('MMM YYYY');
        }

        return {
          title: get(exp, 'title', ''),
          subtitle: get(exp, 'company', ''),
          period: periodFormatted,
          location: get(exp, 'location', ''),
          description: get(exp, 'description', '')
        };
      });

      this.education = map(get(data, 'education', []), (edu: any) => {
        const startDate = moment(get(edu, 'startDate')).format('YYYY');
        const endDate = moment(get(edu, 'endDate')).format('YYYY');
        const periodFormatted = `${startDate} - ${endDate}`;

        return {
          title: get(edu, 'degree', ''),
          subtitle: get(edu, 'institution', ''),
          period: periodFormatted,
          location: get(edu, 'location', ''),
          description: get(edu, 'description', '')
        };
      });
    });
  }
}
