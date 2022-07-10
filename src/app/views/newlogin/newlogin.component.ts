import { Router } from '@angular/router';
import { NewUser } from 'src/app/models/newuser';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-newlogin',
  templateUrl: './newlogin.component.html',
  styleUrls: ['./newlogin.component.css']
})
export class NewloginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  userModel = new NewUser();

  ngOnInit(): void {
    if (document.getElementById("edtEmail") != null) {

      function limpMsg() {
          $("#msgErro").html("");
      }
  
      var email = document.getElementById("edtEmail");
  
      if (email != null){
        email.addEventListener("click", limpMsg);
        email.addEventListener("mouseover", limpMsg);
      }
    }
  
    if (document.getElementById("edtSenha") != null) {
    
        function limpMsg() {
            $("#msgErro").html("");
        }
    
        var email = document.getElementById("edtSenha");
    
        if (email != null){
          email.addEventListener("click", limpMsg);
          email.addEventListener("mouseover", limpMsg);
        }
    }

    if (document.getElementById("edtFirstName") != null) {
    
      function limpMsg() {
          $("#msgErro").html("");
      }
  
      var email = document.getElementById("edtFirstName");
  
      if (email != null){
        email.addEventListener("click", limpMsg);
        email.addEventListener("mouseover", limpMsg);
      }
    }

    if (document.getElementById("edtLastName") != null) {
    
      function limpMsg() {
          $("#msgErro").html("");
      }
  
      var email = document.getElementById("edtLastName");
  
      if (email != null){
        email.addEventListener("click", limpMsg);
        email.addEventListener("mouseover", limpMsg);
      }
    }
  }

  cancelLogin(): void {
    this.router.navigateByUrl("/login");
  }

  newLogin(): boolean {
    var lret = true;
    
        if ($("#edtEmail").val() == "") {
            $("#msgErro").html("Necessário informar o e-mail.");
            lret = false;
        }
    
        if (lret)  {
            if ($("#edtSenha").val() == "") {
                $("#msgErro").html("Necessário informar a senha.");
                lret = false;
            }   
        }

        if (lret)  {
          if ($("#edtFirstName").val() == "") {
              $("#msgErro").html("Necessário informar nome.");
              lret = false;
          }   
        }
        

        if (lret)  {
          if ($("#edtLastName").val() == "") {
              $("#msgErro").html("Necessário informar sobrenome.");
              lret = false;
          }   
        }

        if (lret)
          this.loginService.newlogin(this.userModel).subscribe(
            (response) => {
              localStorage.setItem("nomeUsuario", response.body.user.firstname)
              localStorage.setItem("codUsuario", response.body.user.id)
              this.router.navigateByUrl("/");
            },
            (erro) => {
              lret = true;
              if (erro.error == "Email already exists") {
                $("#msgErro").html("Email já cadastrado.");
                lret = false;
              }

              if (lret && (erro.error == "Incorrect password" || erro.error == "Cannot find user")) {
                $("#msgErro").html("Usuário ou senha inválida.");
                lret = false;
              }

              if (lret && erro.error == "Password is too short") {
                $("#msgErro").html("Senha precisa ter mais de 3 caracteres.");
                lret = false;
              }

              if (lret && erro.error == "Email format is invalid") {
                $("#msgErro").html("Formato do email inválido.");
                lret = false;
              }

              if (lret) {
                $("#msgErro").html(erro.error);
                lret = false;
              }
            })
    
        return (lret);
    };
}
