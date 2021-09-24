import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {

  label = 'Active'

  change(){
    this.label = this.label=='Active'?"Inactive":"Active"
  }

}
