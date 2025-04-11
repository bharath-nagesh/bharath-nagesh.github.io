import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Interface for timeline item data
 */
export interface TimelineItem {
  /** Main title of the timeline item (e.g., job title, degree) */
  title: string;

  /** Optional course or specialization (e.g., "Computer Science", "Electronics and Communications Engineering") */
  course?: string;

  /** Subtitle of the timeline item (e.g., company name, university) */
  subtitle: string;

  /** Time period of the timeline item (e.g., "2018 - Present") */
  period: string;

  /** Location of the timeline item (e.g., "San Francisco, CA") */
  location: string;

  /** Description of the timeline item */
  description: string | string[];
}

/**
 * Component that displays a single timeline item
 * Can be positioned on the left or right side of the timeline
 */
@Component({
  selector: 'app-timeline-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline-item.component.html',
  styleUrl: './timeline-item.component.scss'
})
export class TimelineItemComponent {
  /** The timeline item data to display */
  @Input() item!: TimelineItem;

  /** The position of the timeline item ('left' or 'right') */
  @Input() position: 'left' | 'right' = 'left';

  /**
   * Get the description items as an array
   * @returns Array of description items or null if not an array
   */
  getDescriptionItems(): string[] | null {
    return Array.isArray(this.item.description) ? this.item.description : null;
  }

  /**
   * Get the description as a string
   * @returns Description string or null if not a string
   */
  getDescriptionString(): string | null {
    return typeof this.item.description === 'string' ? this.item.description : null;
  }
}
