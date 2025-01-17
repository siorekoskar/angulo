import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { WycieczkiComponent } from './wycieczki/wycieczki.component';
import { BasketPreviewComponent } from './basket-preview/basket-preview.component';
import { SingleTourComponent } from './single-tour/single-tour.component';
import { LoginComponent } from './login/login.component';
import { NewTourComponent } from './new-tour/new-tour.component';
import { AuthGuard } from './auth/auth.guard';
import { RegisterComponent } from './register/register.component';
import { AdminToursComponent } from './admin-tours/admin-tours.component';
import { AdminTourComponent } from './admin-tour/admin-tour.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { RoleGuard } from './auth/role.guard';
import { NewTourDateComponent } from './new-tour-date/new-tour-date.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'tours', component: WycieczkiComponent, canActivate: [AuthGuard] },
  { path: 'basket', component: BasketPreviewComponent, canActivate: [AuthGuard], },
  { path: 'tours/:id', component: SingleTourComponent, canActivate: [AuthGuard], },
  { path: 'new-tour', component: NewTourComponent, canActivate: [AuthGuard, RoleGuard], },
  { path: 'admin/tours', component: AdminToursComponent, canActivate: [AuthGuard, RoleGuard], },
  { path: 'admin/tours/:id', component: NewTourComponent, canActivate: [AuthGuard, RoleGuard] },
  { path: 'admin/tours/:id/tourdates', component: NewTourDateComponent, canActivate: [AuthGuard, RoleGuard] },
  { path: 'unauthorized', component: UnauthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
