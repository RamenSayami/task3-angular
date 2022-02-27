import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeComponent } from './subscribe.component';
import { FormsModule } from '@angular/forms';
import { SubscribeService } from './subscribe.service';


@NgModule({
  declarations: [
    SubscribeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [SubscribeService]
})
export class SubscribeModule { }
