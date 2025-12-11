import { Routes } from '@angular/router';
import { Home } from './components/main/home/home';
import { Login } from './components/main/login/login';
import { Register } from './components/main/register/register';
import { Features } from './components/main/features/features';
import { Plans } from './components/main/plans/plans';
import { Resources } from './components/main/resources/resources';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: Home },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'features', component: Features },
  { path: 'plans', component: Plans },
  { path: 'resources', component: Resources },
  { path: '**', redirectTo: 'home' },
];
