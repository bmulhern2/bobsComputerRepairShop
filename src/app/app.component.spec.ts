/* 
Title: Assignment 9.2 + Assignment 9.3
Author: Professor Krasso
Date: September 4 2020
Modified By: Brendan Mulhern
Description: This is Bob's Computer Repair Store!
*/

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  //1
  it('add function is truthy', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add()).toBeTruthy();
  });
  //2
  it('ngOnInit works', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.ngOnInit()).toBeTruthy();
  });
  //3
  it('myForm is defined', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.myForm).toBeTruthy();
  });
  //4
  it('three is true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.threeCost).toBe(129.99);
  });
  //5
  it('five is true', () => {
   const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.componentInstance;
   expect(app.twoCost).toBe(99.99);
  });
});
