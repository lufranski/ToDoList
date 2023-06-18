import { Component, OnInit } from '@angular/core';

import { ToDoService } from '../../service/to-do.service';

import { ToDoDTO } from 'src/dto/tododto';
import { Status } from 'src/dto/status';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  toDoList: ToDoDTO[] = [];
  totalTasks: number = 0;
  doneTasks: number = 0;
  inputStatus: string = Status.todo;


  constructor(private service: ToDoService, private router: Router){}

  ngOnInit(): void {
    
    this.getAll();
    this.getCounters();
    this.service.taskListChanged.subscribe( ( tasks: ToDoDTO[])  => {

      this.totalTasks = tasks.length;
      this.doneTasks = tasks.filter( task => task.status === Status.done).length;
      this.toDoList = tasks;
    })
    this.toDoList = this.service.getAll();
  }
  
  getAll(){
    
    this.toDoList = this.service.getAll();    
  }

  delete(task: ToDoDTO){

    this.service.deleteTask(task);
  }

  completeTask(index: number){

    this.service.completeTask(index);
  }

  getCounters(){

    this.totalTasks = this.toDoList.length;
  }

  goToDetail(index: number): void {
    
    this.service.updateTask(index, this.toDoList[index]);
    this.updateTaskName(index);
    this.router.navigate(['/detail', index]);
  }
  

  updateTaskName(index: number): void {
    
    const updatedTask = this.toDoList[index];
    updatedTask.name = this.service.readTask(index).name;
    this.toDoList[index] = updatedTask;
  }
  
  filter(status: string){

    this.inputStatus = status;
  }
}
