import { Component, OnInit, Input } from '@angular/core';

import { ToDoService } from '../../service/to-do.service';

import { ToDoDTO } from 'src/dto/tododto';
import { Status } from 'src/dto/status';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  toDoList: ToDoDTO[] = [];
  totalTasks: number = 0;
  doneTasks: number = 0;
  @Input() inputStatus: string = Status.todo;


  constructor(private service: ToDoService){}

  ngOnInit(): void {
    
    this.getAll();
    this.getCounters();
  }
  
  getAll(){
    
    this.toDoList = this.service.getAll();    
    console.log(this.toDoList);
  }

  delete(index: number){

    this.service.deleteTask(index);
  }

  completeTask(index: number){

    this.service.completeTask(index);
    this.doneTasks = this.service.countDoneOnly();    
  }

  getCounters(){

    this.totalTasks = this.service.countAll();
    this.doneTasks = this.service.countDoneOnly();
  }
}
