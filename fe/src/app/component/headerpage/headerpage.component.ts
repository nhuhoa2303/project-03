import { Component } from '@angular/core';

@Component({
  selector: 'app-headerpage',
  templateUrl: './headerpage.component.html',
  styleUrls: ['./headerpage.component.css']
})
export class HeaderpageComponent {
  myScriptElement: HTMLScriptElement;
  constructor() {
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "./assets/js/theme.js"
    document.body.appendChild(this.myScriptElement);
  }
}
