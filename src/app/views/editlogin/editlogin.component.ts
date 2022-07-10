import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NewUser } from 'src/app/models/newuser';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-editlogin',
  templateUrl: './editlogin.component.html',
  styleUrls: ['./editlogin.component.css']
})
export class EditloginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private snackBar: MatSnackBar) { }

  userModel = new NewUser();

  duration = 2;

  ngOnInit(): void {

    this.loginService.getlogin(<string>localStorage.getItem("codUsuario")).subscribe(
      (response) => {
        console.log(response);
        this.userModel.firstname = response.body.firstname
        this.userModel.lastname = response.body.lastname
        this.userModel.email = response.body.email
      },
      (erro) => {
        console.log(erro);
      }
    )

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

  cancelEdit(): void {
    this.router.navigateByUrl("/login");
  }

  logOff(): void {
    localStorage.setItem("nomeUsuario","")
    localStorage.setItem("codUsuario","")
    this.router.navigateByUrl("/login");
  }

  editLogin(): boolean {
    var lret = true;
    var cmsg = '';
    
        if ($("#edtEmail").val() == "") {
          cmsg = "Necessário informar o e-mail.";
          lret = false;
        }
    
        if (lret)  {
            if ($("#edtSenha").val() == "") {
                cmsg = "Necessário informar a senha.";
                lret = false;
            }   
        }

        if (lret)  {
          if ($("#edtFirstName").val() == "") {
              cmsg = "Necessário informar nome.";
              lret = false;
          }   
        }

        if (lret)  {
          if ($("#edtLastName").val() == "") {
              cmsg = "Necessário informar sobrenome.";
              lret = false;
          }   
        }

        if (lret)
          this.loginService.editlogin(this.userModel,<string>localStorage.getItem("codUsuario")).subscribe(
            (response) => {
              localStorage.setItem("nomeUsuario", response.body.firstname)
              localStorage.setItem("codUsuario", response.body.id)
              this.openSnackBarEdit("Dados atualizados com sucesso.")},
            (erro) => {
              lret = true;
              var cmsge = '';
              if (erro.error == "Email already exists") {
                cmsge = "Email já cadastrado."
                lret = false;
              }

              if (lret && (erro.error == "Incorrect password" || erro.error == "Cannot find user")) {
                cmsge = "Usuário ou senha inválida.";
                lret = false;
              }

              if (lret && erro.error == "Password is too short") {
                cmsge = "Senha precisa ter mais de 3 caracteres.";
                lret = false;
              }

              if (lret && erro.error == "Email format is invalid") {
                cmsge = "Formato do email inválido.";
                lret = false;
              }

              if (lret) {
                cmsge = erro.error;
                lret = false;
              }

              if (!lret){
                this.openSnackBarAlert(cmsge);
              }      
            })
          else {
              if (!lret){
                this.openSnackBarAlert(cmsg);
              }
           }

        return (lret);
    };

    openSnackBarEdit(texto: string) {
      const snacBakRef = this.snackBar.open(texto,'', {
        duration: this.duration * 1000,
        panelClass: ['mat-toolbar', 'mat-primary'],
        verticalPosition: 'top'
      }) ;

      snacBakRef.afterDismissed().subscribe(() => {
        this.router.navigateByUrl("/");
      });
    }

    openSnackBarAlert(texto: string) {
      const snacBakRef = this.snackBar.open(texto,'', {
        duration: this.duration * 1000,
        panelClass: ['mat-toolbar', 'mat-warn'],
        verticalPosition: 'top'
      }) ;
    }
}
