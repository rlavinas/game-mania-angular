import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { MenuComponent } from './views/menu/menu.component';
import { BannerComponent } from './views/banner/banner.component';
import { PropagandaComponent } from './views/propaganda/propaganda.component';
import { BannerProdutoPropagandaComponent } from './views/banner-produto-propaganda/banner-produto-propaganda.component';
import { LoginComponent } from './views/login/login.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { ProdutoComponent } from './views/produto/produto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    BannerComponent,
    PropagandaComponent,
    BannerProdutoPropagandaComponent,
    LoginComponent,
    ProdutosComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
