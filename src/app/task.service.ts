import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../environments/environment';
//import {Observable} from 'rxjs/Observable';
console.log(environment.Url);
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) {}
 
    // Uses http.get() to load data from a single API endpoint
    getTaskList() {
        return this.http.get("http://localhost:3000/api/task/get-task-list");
    }

    addTask(objparms){
      return this.http.post("http://localhost:3000/api/task/add-task",objparms);
    }
}
