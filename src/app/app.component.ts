/* 
Title: Assignment 9.2 + Assignment 9.3
Author: Professor Krasso
Date: September 4 2020
Modified By: Brendan Mulhern
Description: This is Bob's Computer Repair Store!
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup
  twoCost: any
  threeCost: any
  constructor(private fb: FormBuilder) { }
  ngOnInit() { 
    this.myForm = this.fb.group({
      one: new FormControl(),
      two: new FormControl(),
      three: new FormControl(),
      four: new FormControl(),
      five: new FormControl(),
      six: new FormControl(),
      seven: new FormControl(),
      parts: new FormControl(),
      labor: new FormControl()
    })
  }
  add() {
    let oneCost = 39.99;
    this.twoCost = 99.99;
    this.threeCost = 129.99;
    let fourCost = 49.99;
    let fiveCost = 89.99;
    let sixCost = 45.00;
    let sevenCost = 149.99;
    let { parts, labor } = this.myForm.value;
    let oneTotal = this.myForm.get('one').value * oneCost;
    let twoTotal = this.myForm.get('two').value * this.twoCost;
    let threeTotal = this.myForm.get('three').value * this.threeCost;
    let fourTotal = this.myForm.get('four').value * fourCost;
    let fiveTotal = this.myForm.get('five').value * fiveCost;
    let sixTotal = this.myForm.get('six').value * sixCost;
    let sevenTotal = this.myForm.get('seven').value * sevenCost;
    let total = oneTotal + twoTotal + threeTotal + fourTotal + fiveTotal + sixTotal + sevenTotal + parts + labor;
    let out = document.getElementById('out');
    out.innerHTML = total;
    this.myForm.reset()
  }
}
