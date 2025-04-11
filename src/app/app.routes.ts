import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'about', component: AppComponent },
  { path: 'skills', component: AppComponent },
  { path: 'experience', component: AppComponent },
  { path: 'contact', component: AppComponent },
];
