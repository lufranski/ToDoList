import { Component } from '@angular/core';
import { Status } from '../dto/status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'ToDoList';
  inputStatus: string = Status.todo;

  filter(status: string){

    this.inputStatus = status;
  }
}
