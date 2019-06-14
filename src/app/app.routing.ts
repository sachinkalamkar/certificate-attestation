import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';



import { DashboardComponent } from './views/dashboard/dashboard.component';

import { ModuleWithProviders } from "@angular/core";

import { ViewUserS1Component } from './views/view-user-s1/view-user-s1.component';
import { ViewUserS2Component } from './views/view-user-s2/view-user-s2.component';
import { ViewUserS3Component } from './views/view-user-s3/view-user-s3.component';
import { ViewUserS4Component } from './views/view-user-s4/view-user-s4.component';
import { ViewUserS5Component } from './views/view-user-s5/view-user-s5.component';
import { ViewUserS6Component } from './views/view-user-s6/view-user-s6.component';

// =====================GOM =========================
import { ForgotPassComponent } from './views/forgot-pass/forgot-pass.component';
import { ResetPassComponent } from './views/reset-pass/reset-pass.component';
import { RegisterHereComponent } from './views/register-here/register-here.component';
import { UserApplFormComponent } from './views/user-appl-form/user-appl-form.component';
import { AdminAppComponent } from './views/admin-app/admin-app.component';
import { AdminAddAccountComponent } from './views/admin-add-account/admin-add-account.component';
import { DatepickerComponent } from './views/datepicker/datepicker.component';
import { UserDashboardComponent } from './views/user-dashboard/user-dashboard.component';

import { UserPassportDetailsComponent } from './views/user-passport-details/user-passport-details.component';
import { UserContactDetailsComponent } from './views/user-contact-details/user-contact-details.component';
import { UserGuarantorDetailsComponent } from './views/user-guarantor-details/user-guarantor-details.component';
import { UserCurrentDesignationComponent } from './views/user-current-designation/user-current-designation.component';
import { UserUploadDocumentsComponent } from './views/user-upload-documents/user-upload-documents.component';

export const routes: Routes = [

  {

    path: '',

    redirectTo: 'dashboard',

    pathMatch: 'full',

  },


  {

    path: 'dashboard',

    component: DashboardComponent,

    data: {

      title: 'Dashboard Page'

    },
  },
  
    {

    path:'forgot-pass',
  
    component :ForgotPassComponent,

  },

  {

    path:'reset-pass',
  
    component :ResetPassComponent,

  },

  {

    path:'register-here',
  
    component :RegisterHereComponent,

  },
  {

    path:'user-dashboard',
  
    component :UserDashboardComponent,

  },
  {

    path:'user-appl-form',
  
    component :UserApplFormComponent ,

  },
  {

    path:'user-passport-details',
  
    component : UserPassportDetailsComponent ,

  },
  {

    path:'user-contact-details',
  
    component : UserContactDetailsComponent ,

  },
  {

    path:'user-guarantor-details',
  
    component : UserGuarantorDetailsComponent,

  },
  {

    path:'user-current-designation',
  
    component : UserCurrentDesignationComponent,

  },
  {

    path:'user-upload-documents',
  
    component : UserUploadDocumentsComponent,

  },
  {

    path:'admin-app',
  
    component :AdminAppComponent,

  },
  {

    path:'add-acc',
  
    component :AdminAddAccountComponent

  },
  {

    path:'date-picker',
  
    component :DatepickerComponent

  },

  {

    path:'view-user-s1',
  
    component : ViewUserS1Component,

  },
  {

    path:'view-user-s2',
  
    component :  ViewUserS2Component,

  },
  {

    path:'view-user-s3',
  
    component :  ViewUserS3Component,


  },
  {

    path:'view-user-s4',
  
    component :  ViewUserS4Component,

  },
  {

    path:'view-user-s5',
  
    component :  ViewUserS5Component,

  },
  {

    path:'view-user-s6',
  
    component :  ViewUserS6Component,

  },
];


export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);

@NgModule({

  imports: [ RouterModule.forRoot(routes)],

  exports: [ RouterModule ]

})

export class AppRoutingModule {}

