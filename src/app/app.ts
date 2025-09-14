import { Component } from '@angular/core';
import { Child } from './shared/child/child';

@Component({
  selector: 'app-root',
  imports: [Child],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  content: { name: string; phone: number } = { name: 'unknown', phone: 0 }; // property, not constructor param

  byCallFromChild(data: { name: string; phone: number }) {
    this.content = data;
  }
}
