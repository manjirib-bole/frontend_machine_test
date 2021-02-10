import { Component, OnInit } from '@angular/core';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-get-task',
  templateUrl: './get-task.component.html',
  styleUrls: ['./get-task.component.css']
})



export class GetTaskComponent implements OnInit {
  
  constructor(private taskService: TaskService) { }
  
  ngOnInit() {
    this.getTaskList();
    
  }
 
  getTaskList(){
    this.taskService.getTaskList().subscribe(
      (result)=> console.log(result),
      (err) =>console.log(err)
  );
  }

}
