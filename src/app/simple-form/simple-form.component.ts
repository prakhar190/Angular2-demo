import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <input #myInput type='text' />
      <button (click)='onClick($event, myInput.value)'> Submit </button>
    </div>`,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  onClick(event, value){
    console.log(event)
    alert(value)
  }
  constructor() { }

  ngOnInit() {
  }

}
