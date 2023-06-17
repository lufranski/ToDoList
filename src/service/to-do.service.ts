import { Injectable } from '@angular/core';
import { ToDoDTO } from '../dto/tododto';
import { toDoList } from '../data/todolist';
import { Status } from 'src/dto/status';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private todoList: ToDoDTO[] = [];

  constructor() { 

    this.todoList = toDoList;
  }

  getAll(): ToDoDTO[]{

    return this.todoList;
  }

  addTask(item: ToDoDTO): void{

    this.todoList.push(item);
  }

  deleteTask(index: number): void{

    this.todoList.splice(index, 1);
  }

  completeTask(index: number): void{

    this.todoList[index].status = Status.done;
  }

  countAll(): number{

    return this.todoList.length;
  }

  countDoneOnly(): number{

    return this.todoList.filter( task => task.status === Status.done).length;
  }
}
