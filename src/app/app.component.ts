import { Component } from '@angular/core';
import { Debug, setupEnvironment } from 'ng-debug-decorator/lib';
import { environment } from 'src/environments/environment';

setupEnvironment(environment);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-debug-decorator-client';

  ngOnInit(){
    this.sayHi();
  }

  @Debug()
  sayHi(){
    alert("I am debug mode code");
  }
}
