import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskComponent } from './components/task/task.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const appRoutes:Routes =[
  {path:'' , component:HomeComponent},
  {path:'add-task' , component:AddTaskComponent},
  {path:'task' , component:TaskComponent},
  {path:'task/:id' , component:TaskComponent},
  {path:'task/:**' , component:NotFoundComponent},
  {path:'**' , component:NotFoundComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTaskComponent,
    TaskComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
