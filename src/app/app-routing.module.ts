import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SingupComponent } from './pages/singup/singup.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { PackgesComponent } from './pages/packges/packges.component';
import { PackgeDetailsComponent } from './pages/packge-details/packge-details.component';
import { AboutComponent } from './pages/about/about.component';
import { ShopCartComponent } from './pages/shop-cart/shop-cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ShopComponent } from './pages/shop/shop.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign_up', component: SingupComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'packges', component: PackgesComponent },
  { path: 'packges_details/:id', component: PackgeDetailsComponent },
  { path: 'Products/:id', component: ProductsComponent },
  { path: 'products_details/:id', component: ProductsDetailsComponent },
  { path: 'user_profile', component: UserProfileComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'shop_cart', component: ShopCartComponent },
  { path: 'shop', component: ShopComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
