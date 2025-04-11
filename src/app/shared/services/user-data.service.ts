import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
import { UserData } from '../models/user-data.model';
import { SOCIAL_ICON_MAP } from '../constants/social-icons';
import { isPlatformBrowser } from '@angular/common';
import { get } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userDataSubject = new BehaviorSubject<UserData | null>(null);
  public userData$ = this.userDataSubject.asObservable();

  private dataFetched = false;
  private cachedData$: Observable<UserData> | null = null;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  /**
   * Fetch user data from the JSON file
   * Uses caching to avoid multiple HTTP requests
   */
  getUserData(): Observable<UserData> {
    if (this.cachedData$) {
      return this.cachedData$;
    }

    let dataPath = 'assets/data/user-data.json';
    
    if (isPlatformBrowser(this.platformId)) {
      const baseElement = document.querySelector('base');
      const baseHref = get(baseElement, 'href', '');
      dataPath = `${baseHref}${dataPath}`.replace('//', '/');
    }

    this.cachedData$ = this.http.get<UserData>(dataPath).pipe(
      tap(data => {
        this.userDataSubject.next(data);
        this.dataFetched = true;
      }),
      shareReplay(1)
    );

    return this.cachedData$;
  }

  /**
   * Get Font Awesome class for a social media icon
   * @param iconName The icon identifier
   * @returns The appropriate Font Awesome class
   */
  getSocialIconClass(iconName: string): string {
    return get(SOCIAL_ICON_MAP, iconName, get(SOCIAL_ICON_MAP, 'default', 'fas fa-link'));
  }
}
