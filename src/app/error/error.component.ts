import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errorMessage = 'An Error Occured! Contact Support at *** - ***'

  constructor() { }

  ngOnInit() {
    console.log("test")
    console.log("test")
    console.log("dev")
    console.log("from browser")
  }

}
