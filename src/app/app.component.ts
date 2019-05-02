import { Component } from '@angular/core';
// import { Debug } from 'ng-debug-decorator';
import { environment } from 'src/environments/environment';
import { Debug } from 'ng-debug-decorator';
// import { Debug } from './debug.decorator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-debug-decorator-client';

  ngOnInit() {

    this.sayHi();

    if (!environment.production) {
      this.sayBye();
    }
  }

  @Debug()
  sayHi() {
    alert('I am debug code');
  }

  sayBye() {
    alert('Me too!');
  }
}