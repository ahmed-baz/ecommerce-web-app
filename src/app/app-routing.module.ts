import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartDetailsComponent } from './sales/cart-details/cart-details.component';
import { CheckoutComponent } from './sales/checkout/checkout.component';
import { ProductDetailsComponent } from './sales/product-details/product-details.component';
import { ProductListComponent } from './admin/product/product-list/product-list.component';
import { ProductComponent } from './sales/product/product.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { LoginComponent } from './shared/login/login.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SignupComponent } from './shared/signup/signup.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { CategoryListComponent } from './admin/category/category-list/category-list.component';
import { AdminListComponent } from './admin/hr/admin/admin-list/admin-list.component';
import { UserListComponent } from './admin/hr/user/user-list/user-list.component';
import { CityListComponent } from './admin/lookups/city/city-list/city-list.component';
import { AreaListComponent } from './admin/lookups/area/area-list/area-list.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'admin-dashbord', component: DashbordComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'category-list', component: CategoryListComponent },
  { path: 'admin-list', component: AdminListComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'city-list', component: CityListComponent },
  { path: 'area-list', component: AreaListComponent },
  { path: 'products', component: ProductComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'searchInProducts/:keyword', component: ProductComponent },
  { path: 'category/:id', component: ProductComponent },
  { path: 'cart-details', component: CartDetailsComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '', component: ProductComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
