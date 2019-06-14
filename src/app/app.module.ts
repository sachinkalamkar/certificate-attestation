import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewUserS1Component } from './views/view-user-s1/view-user-s1.component';
import { ViewUserS2Component } from './views/view-user-s2/view-user-s2.component';
import { ViewUserS3Component } from './views/view-user-s3/view-user-s3.component';
import { ViewUserS4Component } from './views/view-user-s4/view-user-s4.component';
import { ViewUserS5Component } from './views/view-user-s5/view-user-s5.component';
import { ViewUserS6Component } from './views/view-user-s6/view-user-s6.component';

//import { NotifierModule } from 'angular-notifier';


// import { fakeBackendProvider } from './_helpers';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers





import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';
// import { NgMatSearchBarModule } from 'ng-mat-search-bar';
// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
// import { RegisterComponent } from './views/register/register.component';
// import { LoginComponent } from './views/login/login.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { NgxPaginationModule} from 'ngx-pagination';

import { CarouselModule } from 'ngx-bootstrap/carousel';
// import {AngularFireModule} from 'angularfire2';
// export const firebaseConfig=environment.firebaseConfig;
// import{environment} from '../environments/environment'
import {PopupModule} from 'ng2-opd-popup';

//import { BsDropdownModule } from 'ngx-bootstrap/dropdown';






////////////////  GOM /////////////////


//   MatToolbarModule,
//   MatButtonModule,
//   MatIconModule
// } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { environment } from '../environments/environment.prod';


import {
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
} from '@angular/material';

import { RegisterHereComponent } from './views/register-here/register-here.component';
import { ForgotPassComponent } from './views/forgot-pass/forgot-pass.component';
import { ResetPassComponent } from './views/reset-pass/reset-pass.component';
import { UserApplFormComponent } from './views/user-appl-form/user-appl-form.component';
import { from } from 'rxjs';

import { AdminAppComponent } from './views/admin-app/admin-app.component';
import { AdminAddAccountComponent } from './views/admin-add-account/admin-add-account.component';
import { DatepickerComponent } from './views/datepicker/datepicker.component';
import { UserDashboardComponent } from './views/user-dashboard/user-dashboard.component';
import { UserPassportDetailsComponent } from './views/user-passport-details/user-passport-details.component';
import { UserContactDetailsComponent } from './views/user-contact-details/user-contact-details.component';
import { UserGuarantorDetailsComponent } from './views/user-guarantor-details/user-guarantor-details.component';
import { UserCurrentDesignationComponent } from './views/user-current-designation/user-current-designation.component';
import { UserUploadDocumentsComponent } from './views/user-upload-documents/user-upload-documents.component';

// import{MatFormFieldModule,MatDatepickerModule, MatNativeDateModule, MatListModule,MatListItem,MatNavList}from'@angular/material';


// import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@NgModule({
  imports: [
    BrowserModule,
  //   MatToolbarModule,
  // MatButtonModule,
  // MatIconModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    HttpClientModule,
    HttpModule,
    FormsModule, ReactiveFormsModule ,
    NgxPaginationModule,
    CarouselModule.forRoot(),
   
   // BsDropdownModule.forRoot(),
    PopupModule.forRoot(),
   BrowserAnimationsModule,
   
  //  MatToolbarModule,
  // MatButtonModule,
  // MatIconModule,
  
 
  // AngularFireModule.initializeApp(firebaseConfig),

  // AgmCoreModule.forRoot({
  //   apiKey:environment.googleMapsKey
  // })
  //   // NotifierModule,
    // MatFormFieldModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatListModule,MatListItem
    
  
    
  ],
  declarations: [
    AppComponent,
   
    // RegisterComponent,
    // LoginComponent,
    DashboardComponent,
    
   
    
  
   
    RegisterHereComponent,
   
    ForgotPassComponent,
   
    ResetPassComponent,
   
    UserApplFormComponent,
   
    AdminAppComponent,AdminAddAccountComponent,DatepickerComponent, UserDashboardComponent, UserPassportDetailsComponent, UserContactDetailsComponent, UserGuarantorDetailsComponent, UserCurrentDesignationComponent, UserUploadDocumentsComponent
    ,ViewUserS1Component, ViewUserS2Component, ViewUserS3Component, ViewUserS4Component, ViewUserS5Component, ViewUserS6Component
    
   
    
    // MatNavList
   
    //BsDropdownModule,
    

   
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
