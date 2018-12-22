import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home', animation: 'HomePage' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'Profile', animation: 'ProfilePage' }
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: { title: 'Products' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // otherwise redirect to 404
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
