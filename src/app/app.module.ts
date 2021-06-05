import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskComponent } from './tasklist/task/task.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'task', component: TasklistComponent },
  { path: 'todo', component: TodoComponent },
  { path: '', redirectTo: '/task', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasklistComponent,
    TaskComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
