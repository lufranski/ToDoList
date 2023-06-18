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
    this.service.taskListChanged.subscribe( tasks => {

      this.totalTasks = tasks.length;
      this.doneTasks = tasks.filter( task => task.status === Status.done).length;
    })
  }
  
  getAll(){
    
    this.toDoList = this.service.getAll();    
    console.log(this.toDoList);
    this.getCounters();
  }

  delete(task: ToDoDTO){

    this.service.deleteTask(task);
    this.getAll();
  }

  completeTask(index: number){

    this.service.completeTask(index);
    // this.doneTasks = this.service.countDoneOnly();    
    this.totalTasks = this.toDoList.length;
  }

  getCounters(){

    this.totalTasks = this.toDoList.length;
    // this.doneTasks = this.service.countDoneOnly();
  }
}
