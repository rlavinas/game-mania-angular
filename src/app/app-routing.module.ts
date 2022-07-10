import { EditloginComponent } from './views/editlogin/editlogin.component';
import { NewloginComponent } from './views/newlogin/newlogin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerProdutoPropagandaComponent } from './views/banner-produto-propaganda/banner-produto-propaganda.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: BannerProdutoPropagandaComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'newlogin',
    component: NewloginComponent
  },
  {
    path: 'editlogin',
    component: EditloginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
