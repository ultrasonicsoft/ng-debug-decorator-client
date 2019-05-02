import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { setupEnvironment } from './debug.decorator';
import { environment } from 'src/environments/environment';

import { setupEnvironment } from "ng-debug-decorator";
import { LoginComponent } from './login/login.component';

setupEnvironment(environment);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
