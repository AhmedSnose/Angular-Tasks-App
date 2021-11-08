import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public  tasksSer:TasksService , private title: Title) {
    this.title.setTitle('Task Manger')
  }
  
  ngOnInit(): void {
    console.log(this.tasksSer.tasks);
  }
  DeleteTask(i:any){
    this.tasksSer.DeleteTask(i)
  }

}
