import { Component, OnInit } from '@angular/core';
import {NgModule} from "@angular/core";
import {TaskService} from '../task.service';
//import {Observable} from 'rxjs/Rx';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }
  
  form = new FormGroup({
    "title": new FormControl("", Validators.required),
    "description": new FormControl("", Validators.required),
    "image":new FormControl("", Validators.required)
});

onFileSelect(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    // this.form.patchValue({
    //   fileSource: image
    // });
    this.form.get('image').setValue(file);
  }
}


onSubmit() {
  console.log("reactive form submitted");
  console.log(this.form.value);
  const formData = new FormData();
  formData.append('file', this.form.get('image').value);
  console.log(formData);
    //   this.taskService.addTask(this.form.value).subscribe(
    //     (result)=> console.log(result),
    //     (err) =>console.log(err)
    // );

  
}}
