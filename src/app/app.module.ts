import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { CategoryComponent } from './pages/category/category.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { PackgesComponent } from './pages/packges/packges.component';
import { PackgeDetailsComponent } from './pages/packge-details/packge-details.component';
import { AboutComponent } from './pages/about/about.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { ShopCartComponent } from './pages/shop-cart/shop-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdataClientComponent } from './pages/updata-client/updata-client.component';
import { AddresComponent } from './pages/addres/addres.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ForgetpwComponent } from './pages/forgetpw/forgetpw.component';
import { ResetpwComponent } from './pages/resetpw/resetpw.component';
import { UpdateMoreInfoComponent } from './pages/update-more-info/update-more-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    UserProfileComponent,
    PackgesComponent,
    PackgeDetailsComponent,
    AboutComponent,
    ShopCartComponent,
    CheckoutComponent,
    UpdataClientComponent,
    AddresComponent,
    ShopComponent,
    ForgetpwComponent,
    ResetpwComponent,
    UpdateMoreInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SwiperModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
