import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Views
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { BandComponent } from './components/band/band.component';
import { SearchComponent } from './components/search/search.component';
import { NotFoundComponentComponent } from './components/not-found-component/not-found-component.component';
import { Error400Component } from './components/error400/error400.component';
import { Error500Component } from './components/error500/error500.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SingUpComponent,
    BandComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    MaterialModule,
    ReactiveFormsModule,   
    HttpClientModule,
    FormsModule,      
    RouterModule.forRoot([
      { path: '', pathMatch:'full', redirectTo:'home'},
      { path: 'home', component: HomeComponent},
      { path: 'login', component: LoginComponent},
      { path: 'sing-up', component: SingUpComponent},
      { path: 'band/:id', component: BandComponent},
      { path: '404', component: Error400Component},
      { path: '500', component: Error500Component},
      { path: '**', component:NotFoundComponentComponent }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
