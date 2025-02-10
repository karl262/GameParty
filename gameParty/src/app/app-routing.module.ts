import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./features/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./features/auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./features/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'party',
    loadChildren: () => import('./features/party/party.module').then( m => m.PartyPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./features/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'social',
    loadChildren: () => import('./features/social/social.module').then( m => m.SocialPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./features/search/search.module').then( m => m.SearchPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
