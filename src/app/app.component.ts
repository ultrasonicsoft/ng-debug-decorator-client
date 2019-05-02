import { Component } from '@angular/core';
import { Debug, setupEnvironment } from 'ng-debug-decorator';
import { environment } from 'src/environments/environment';

setupEnvironment(environment);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-debug-decorator-client';

  ngOnInit() {
    this.sayHi();
  }

  @Debug()
  sayHi() {
    alert("I am debug mode code");
  }
}

/*
Angular case
1. Debug() - No output in prod
2. Debug(true) - No output in prod
3. Debug(false) - Output in prod

Nodejs case
1. Debug() - No output in output
2. Debug(true) - No output in prod
3. Debug(false) - Output in prod
*/