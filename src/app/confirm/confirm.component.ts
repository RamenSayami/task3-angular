import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmService } from './confirm.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  requestId=0;
  errorMessage = '';
  headingMessage = 'Please wait while we process your request';

  constructor(
    private activeRoute: ActivatedRoute,
    @Inject(DOCUMENT) private document: Document,
    private confirmService: ConfirmService
  ) { }

  ngOnInit(): void {
    this.requestId = this.activeRoute.snapshot.params['requestId'];
    console.log(this.requestId);
    console.log(this.activeRoute.snapshot.params);
    this.confirmService.sendConfirmEmail(this.requestId).subscribe(
      {
        next: (res : any) => {
          this.document.location.href = 'https://google.com';
        },
        error : (err:any) => {
          this.headingMessage = '';
          this.errorMessage = err.error.message;
        }
      });
    //make confirm call here

  }

}
