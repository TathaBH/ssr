import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { GradesComponent } from './grades/grades.component';
import { HomeComponent } from './home/home.component';
import { RouteRoutingModule } from './route/route-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { MenuDirective } from './menu.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CachingInterceptor } from './caching.interceptor';
import { MystoreComponent } from './mystore/mystore.component';
import { StoreModule } from '@ngrx/store';
import { storeReducer } from './store/store.reducer';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    GradesComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    MenuDirective,
    MystoreComponent,
  ],
  imports: [
    BrowserModule,
    RouteRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({addition: storeReducer}),
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
