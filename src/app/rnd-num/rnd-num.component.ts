import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rnd-num',
  templateUrl: './rnd-num.component.html',
  styleUrls: ['./rnd-num.component.css']
})
export class RndNumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rndNumber = 0;

  decrement(){
    this.rndNumber -= Number((Math.random()*10).toFixed())
  }

  increment(){
    this.rndNumber += Number((Math.random()*10).toFixed())
  }

  clear(){
    this.rndNumber = 0;
  }
}
