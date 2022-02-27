import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './confirm.component';
import { ConfirmService } from './confirm.service';

@NgModule({
  declarations: [
    ConfirmComponent
  ],
  imports: [
    CommonModule
  ],
  providers : [ConfirmService]
})
export class ConfirmModule { }
