import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDoDTO } from 'src/dto/tododto';
import { Status } from '../../dto/status';

import { ToDoService } from 'src/service/to-do.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

  newForm: FormGroup = new FormGroup({});
  taskToAdd: ToDoDTO = {

    name: '',
    status: Status.todo
  };

  constructor(private formBuilder: FormBuilder, private service: ToDoService){}

  ngOnInit(): void {
    
    this.newForm = this.formBuilder.group({
      
      name: ['', Validators.required]
    })
  }

  addTask(): void{

    if(this.newForm.valid){

      const taskName = this.newForm.value.name;
      this.taskToAdd.name = taskName;
      this.service.addTask(this.taskToAdd);
      this.newForm.reset();      
    }
  }
}
