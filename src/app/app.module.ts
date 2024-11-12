import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './shared/login/login.component';
import { LogoutComponent } from './shared/logout/logout.component';
import { SignupComponent } from './shared/signup/signup.component';
import { AboutUsComponent } from './shared/about-us/about-us.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { ProductComponent } from './sales/product/product.component';
import { ProductService } from './sales/service/product.service';
import { CommonService } from './services/common.service';
import { MenuComponent } from './sales/menu/menu.component';
import { ProductDetailsComponent } from './sales/product-details/product-details.component';
import { SearchComponent } from './sales/search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './sales/cart-status/cart-status.component';
import { CartDetailsComponent } from './sales/cart-details/cart-details.component';
import { CheckoutComponent } from './sales/checkout/checkout.component';
import { ProductListComponent } from './admin/product/product-list/product-list.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { CategoryListComponent } from './admin/category/category-list/category-list.component';
import { NewCategoryComponent } from './admin/category/new-category/new-category.component';
import { UpdateCategoryComponent } from './admin/category/update-category/update-category.component';
import { NewProductComponent } from './admin/product/new-product/new-product.component';
import { UpdateProductComponent } from './admin/product/update-product/update-product.component';
import { AdminListComponent } from './admin/hr/admin/admin-list/admin-list.component';
import { NewAdminComponent } from './admin/hr/admin/new-admin/new-admin.component';
import { UpdateAdminComponent } from './admin/hr/admin/update-admin/update-admin.component';
import { UserListComponent } from './admin/hr/user/user-list/user-list.component';
import { NewUserComponent } from './admin/hr/user/new-user/new-user.component';
import { UpdateUserComponent } from './admin/hr/user/update-user/update-user.component';
import { CityListComponent } from './admin/lookups/city/city-list/city-list.component';
import { NewCityComponent } from './admin/lookups/city/new-city/new-city.component';
import { UpdateCityComponent } from './admin/lookups/city/update-city/update-city.component';
import { UpdateAreaComponent } from './admin/lookups/area/update-area/update-area.component';
import { NewAreaComponent } from './admin/lookups/area/new-area/new-area.component';
import { AreaListComponent } from './admin/lookups/area/area-list/area-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CountryListComponent } from './admin/lookups/country/country-list/country-list.component';
import { NewCountryComponent } from './admin/lookups/country/new-country/new-country.component';
import { UpdateCountryComponent } from './admin/lookups/country/update-country/update-country.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    ProductComponent,
    MenuComponent,
    ProductDetailsComponent,
    SearchComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    ProductListComponent,
    DashbordComponent,
    CategoryListComponent,
    NewCategoryComponent,
    UpdateCategoryComponent,
    NewProductComponent,
    UpdateProductComponent,
    AdminListComponent,
    NewAdminComponent,
    UpdateAdminComponent,
    UserListComponent,
    NewUserComponent,
    UpdateUserComponent,
    CityListComponent,
    NewCityComponent,
    UpdateCityComponent,
    UpdateAreaComponent,
    NewAreaComponent,
    AreaListComponent,
    NavbarComponent,
    CountryListComponent,
    NewCountryComponent,
    UpdateCountryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [CommonService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
