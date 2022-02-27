import { Component, OnInit } from '@angular/core';
import { SubscribeService } from './subscribe.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  constructor(private subscribeService: SubscribeService) { }

  public emailStr = '';
  public successMessage = '';
  public errorMessage = '';

  ngOnInit(): void {
  }

  public subscribe() {

    this.subscribeService.sendSubscribeRequest(this.emailStr).subscribe({
      next: (res: any) => {
        console.log(res);
        this.errorMessage = '';
        this.successMessage = res.message;
      },
      error : (err: any) => {
        console.log(err);
        this.successMessage = '';
        this.errorMessage = err.error.message;
        // rejects(err);
      },
      complete : () => {
        console.log('complete');
      }
    });
    console.log(this.emailStr);
  }
}
