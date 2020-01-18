import { Routes, RouterModule } from '@angular/router';
import {Component} from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';
import {ArtistComponent} from './components/artist/artist.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'search', component: SearchComponent},
  { path: 'artist/:id', component: ArtistComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'},

];

export const AppRoutes: any = RouterModule.forRoot(APP_ROUTES, { useHash: true });
