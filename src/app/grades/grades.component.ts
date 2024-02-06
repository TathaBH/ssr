import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent {
  @Input() grades: number[] = [90, 86, 35, 55, 71]
  @Output() newUser = new EventEmitter<string>()

  addNewUser($name:string) {
    this.newUser.emit($name)
  }
  
 }
