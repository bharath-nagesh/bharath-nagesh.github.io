import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private activeSection = new Subject<string>();

  activeSection$ = this.activeSection.asObservable();

  setActiveSection(section: string) {
    this.activeSection.next(section);
  }
}
