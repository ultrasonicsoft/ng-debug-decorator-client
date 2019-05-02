import { Component, OnInit } from '@angular/core';
import { Debug } from 'ng-debug-decorator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.printLoginDetails();
  }

  @Debug()
  printLoginDetails(){
    console.log('login details for debug purpose...');
  }
}
