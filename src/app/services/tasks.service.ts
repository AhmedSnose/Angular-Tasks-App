import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks:Array<Task> = [{title:'Click',description:'description'},{title:'Hi3',description:'description'},]

  constructor() { 
    let savedData = localStorage.getItem('tasks')
    if(savedData) this.tasks = JSON.parse(savedData) 
    else return;

  }

  DeleteTask(i:any){
    this.tasks.splice(i,1)
    this.saveAll()

    
  }
  saveTask(taskTit:string,taskDes:string){
    this.tasks.push({
      title:taskTit,
      description:taskDes,
    })
    this.saveAll()

  }

  editTask(i:any , data:any){
    this.tasks[i] = data
    this.saveAll()
  }

  saveAll(){
    localStorage.setItem('tasks' , JSON.stringify(this.tasks))
  }

}
