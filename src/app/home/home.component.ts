import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name="Prince";
  course="Fullstack development";
  buttonactive=false;
  constructor(){
    setTimeout(() => {
      this.buttonactive=true;
    }, 10000);
  }
  changeCourse(){
    this.course="MEAN Stack Development";
  }


  

  ngOnInit() {
  }

}
