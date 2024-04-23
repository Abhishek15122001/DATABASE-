import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule,NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,FormsModule,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project2';
  name:string=''
  email:string=''
  address:string=''
  userArray:Array<any>=[]
  onclick(){
    this.userArray.push({
      "name": this.name,
      "email": this.email,
      "address": this.address,
    })
 }
 ondelete(index:any)
 {
     this.userArray.splice(index,1)
 }
  
}
