import { forwardRef, NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductsComponent } from './components/products/products.component';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AuthenticationService } from '@app/_services';

@Injectable()
export class LoginResolver implements Resolve<any> {
  constructor(private authenticationService: AuthenticationService) { }
  resolve(): Observable<any> {
    return this.authenticationService.loggedInUser();
  }
}

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home', animation: 'HomePage' },
    resolve: {
      user: LoginResolver
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'Profile', animation: 'ProfilePage' },
    resolve: {
      user: LoginResolver
    }
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: { title: 'Products' }
  },
  {
    path: '',
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
  exports: [RouterModule],
  providers: [LoginResolver]
})
export class AppRoutingModule { }
