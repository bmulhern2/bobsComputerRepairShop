import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myForm: FormGroup
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
    let numbers = JSON.stringify(this.myForm.value)
    let oneCost = 39.99;
    let twoCost = 99.99;
    let threeCost = 129.99;
    let fourCost = 49.99;
    let fiveCost = 89.99;
    let sixCost = 45.00;
    let sevenCost = 149.99;
    let { parts, labor } = this.myForm.value;
    let oneTotal = this.myForm.get('one').value * oneCost;
    let twoTotal = this.myForm.get('two').value * twoCost;
    let threeTotal = this.myForm.get('three').value * threeCost;
    let fourTotal = this.myForm.get('four').value * fourCost;
    let fiveTotal = this.myForm.get('five').value * fiveCost;
    let sixTotal = this.myForm.get('six').value * sixCost;
    let sevenTotal = this.myForm.get('seven').value * sevenCost;
    let total = oneTotal + twoTotal + threeTotal + fourTotal + fiveTotal + sixTotal + sevenTotal + parts + labor;
    let out = document.getElementById('out');
    out.innerHTML = total;
  }
}