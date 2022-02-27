import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SubscribeModule } from './subscribe/subscribe.module';

const routes: Routes = [
  {
    path : '',
    component: SubscribeComponent
  },
  {
    path : 'confirm/:requestId',
    pathMatch: 'full',
    component: ConfirmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
