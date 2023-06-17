import { Injectable } from '@angular/core';
import { ToDoDTO } from '../dto/tododto';
import { toDoList } from '../data/todolist';

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
}
