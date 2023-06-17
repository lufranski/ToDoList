import { Component, OnInit } from '@angular/core';

import { ToDoService } from '../../service/to-do.service';
import { ToDoDTO } from 'src/dto/tododto';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{

  toDoList: ToDoDTO[] = [];

  constructor(private service: ToDoService){}

  ngOnInit(): void {
    
    this.getAll();
  }

  getAll(){

    this.toDoList = this.service.getAll();    
  }

  delete(index: number){

    this.service.deleteTask(index);
  }
}
