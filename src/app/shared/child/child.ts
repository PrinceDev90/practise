import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  templateUrl: './child.html',
  styleUrls: ['./child.css'],
})
export class Child {
  @Output() childBtn =new  EventEmitter<{ name: string; phone: number }>();

  
  childButton() {
    this.childBtn.emit({ name: 'prince', phone: 123 });
  }
}
