import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimelineItemComponent, TimelineItem } from '../timeline-item/timeline-item.component';

/**
 * Timeline component that displays a vertical timeline with items
 * Can be configured to alternate positions or start with left/right
 */
@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, TimelineItemComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  /** Array of timeline items to display */
  @Input() items: TimelineItem[] = [];

  /** Optional title for the timeline section */
  @Input() title: string = '';

  /** Whether to alternate positions of timeline items (left/right) */
  @Input() alternatePositions: boolean = true;

  /** Whether to start with left position (if alternatePositions is true) */
  @Input() startWithLeft: boolean = true;

  /**
   * Determines the position (left/right) of a timeline item based on its index
   * @param index The index of the timeline item
   * @returns 'left' or 'right' position
   */
  getPosition(index: number): 'left' | 'right' {
    if (!this.alternatePositions) {
      return this.startWithLeft ? 'left' : 'right';
    }

    if (this.startWithLeft) {
      return index % 2 === 0 ? 'left' : 'right';
    } else {
      return index % 2 === 0 ? 'right' : 'left';
    }
  }
}
