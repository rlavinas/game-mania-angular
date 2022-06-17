import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (document.querySelector("#div_menubar")?.classList.contains("div_menubar_exibe")) {
      document.querySelector("#div_menubar")?.classList.remove("div_menubar_exibe")
      document.querySelector("#navbar")?.classList.remove("div_menubar_exibe");  
    }
  }

  AbreMenu(): void {
    if (document.querySelector("#div_menubar")?.classList.contains("div_menubar_exibe")) {
      document.querySelector("#div_menubar")?.classList.remove("div_menubar_exibe");
      document.querySelector("#navbar")?.classList.remove("div_menubar_exibe");         
    } else {
      document.querySelector("#div_menubar")?.classList.add("div_menubar_exibe");
      document.querySelector("#navbar")?.classList.add("div_menubar_exibe");   
    }
  }
}
