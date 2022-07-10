import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  NomeUsuario?: string

  constructor() {
    this.NomeUsuario = <string>localStorage.getItem("nomeUsuario");  
   }

  ngOnInit(): void {
    
  }  

  verifUser(): boolean {
    this.NomeUsuario = <string>localStorage.getItem("nomeUsuario");  
    if (localStorage.getItem('nomeUsuario') == null || localStorage.getItem('nomeUsuario') == ""){
      return false;
    } else {
      return true;
    }
  }

}
