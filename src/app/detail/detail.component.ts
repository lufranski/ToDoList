import { Component, OnInit } from '@angular/core';

import { ToDoService } from '../../service/to-do.service';

import { ActivatedRoute } from '@angular/router';
import { ToDoDTO } from 'src/dto/tododto';
import { Status } from 'src/dto/status';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  taskId: number = 0;
  task: ToDoDTO= {
    name: '',
    status: Status.todo
  };

  constructor(private route: ActivatedRoute, private service: ToDoService){}
  
  ngOnInit(): void {
    
    this.route.params.subscribe( params => {

      this.taskId = +params['id'];
    })

    this.readTask();
  }

  readTask(){
    
    this.task = this.service.readTask(this.taskId);
    console.log(this.task);
    
  }
}
