import { Injectable, EventEmitter } from '@angular/core';
import { ToDoDTO } from '../dto/tododto';
import { toDoList } from '../data/todolist';
import { Status } from 'src/dto/status';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private todoList: ToDoDTO[] = [];
  private task: ToDoDTO = {
    name: '',
    status: Status.todo
  };
  taskListChanged = new EventEmitter<ToDoDTO[]>();

  constructor() { 

    this.todoList = toDoList;
  }

  getAll(): ToDoDTO[]{

    return this.todoList;
  }

  addTask(task: ToDoDTO): void{

    this.todoList.push(task);
    this.taskListChanged.emit(this.todoList);
  }

  deleteTask(task: ToDoDTO): void{

    const index = this.todoList.indexOf(task);
    
    if(index > -1){

      this.todoList.splice(index, 1);
      this.taskListChanged.emit(this.todoList);
    }
  }

  completeTask(index: number): void{

    this.todoList[index].status = Status.done;
    this.taskListChanged.emit(this.todoList);
  }

  readTask(id: number): ToDoDTO{
    
    if( id >= 0 && id < this.todoList.length){

      return this.todoList[id];
    }
    return this.todoList[id];
  }

  updateTask(id: number, task: ToDoDTO): void {
    
    if (id >= 0 && id < this.todoList.length) {
      this.todoList[id] = task;
      this.taskListChanged.emit(this.todoList); //Emette una copia della lista aggiornata
    }
  }
  
}
