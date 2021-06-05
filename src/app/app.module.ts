import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskComponent } from './tasklist/task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasklistComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
