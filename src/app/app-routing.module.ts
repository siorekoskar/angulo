import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { WycieczkiComponent } from './wycieczki/wycieczki.component';
import { BasketPreviewComponent } from './basket-preview/basket-preview.component';
import { SingleTourComponent } from './single-tour/single-tour.component';
import { LoginComponent } from './login/login.component';
import { NewTourComponent } from './new-tour/new-tour.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  // { path: '', component: WycieczkiComponent },
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: WycieczkiComponent, //canActivate: [AuthGuard],
    children: [
      // { path: 'basket', component: BasketPreviewComponent },
      // { path: 'tours/:id', component: SingleTourComponent },
      // { path: 'new-tour', component: NewTourComponent }
    ]
  },

  { path: 'basket', component: BasketPreviewComponent },
  { path: 'tours/:id', component: SingleTourComponent },
  { path: 'new-tour', component: NewTourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
