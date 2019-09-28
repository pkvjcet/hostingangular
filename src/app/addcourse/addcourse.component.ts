import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  
  constructor(private api:ApiService) { }

  ngOnInit() {
  }

  readValues(data:NgForm){
    console.log(data.value.courseDate);
    this.api.addCourse(data.value).subscribe((response)=>{
        console.log(response);
        alert("submitted successfully");
    });
  }


}
