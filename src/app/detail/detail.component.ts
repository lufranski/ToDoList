import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

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
  myForm: FormGroup;
  taskNameControl: FormControl;

  constructor(private route: ActivatedRoute, private service: ToDoService, 
    private formBuilder: FormBuilder, private router: Router){ 
    
    this.taskNameControl = new FormControl(this.task.name);
    this.myForm = this.formBuilder.group({ taskName: [this.task.name]})
  }
  
  ngOnInit(): void {
    
    this.route.params.subscribe( params => {

      this.taskId = +params['id'];
    })

    this.readTask();

    this.taskNameControl = new FormControl(this.task.name);
  }

  readTask(){
    
    this.task = this.service.readTask(this.taskId);
    console.log(this.task);
    
  }

  updateTask(): void{

    const newTaskName = this.taskNameControl.value;
    const updatedTask: ToDoDTO = {

      name: newTaskName,
      status: this.task.status
    };
    this.service.updateTask(this.taskId, updatedTask);
    this.router.navigate(['/']);
  }
}
