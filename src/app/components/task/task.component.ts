import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskId:any;
  task:any;
  constructor(private route : ActivatedRoute ,
    private router : Router ,
    private taskSer : TasksService ,private title: Title) {
      this.title.setTitle('Task Manger') }

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id')
    this.task = this.taskSer.tasks[this.taskId]
    
  }

  DeleteTask(){
    this.taskSer.DeleteTask(this.taskId)
    this.router.navigate(['/'])

  }
  saveTask(){
    this.taskSer.editTask(this.taskId ,this.task)
    this.router.navigate(['/'])
  }
}
