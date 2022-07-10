import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private snackBar: MatSnackBar) {

  }

  userModel = new User();

  duration = 2;

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
  }

  efetuarLogin(): void {

  }

  envLogin(): void{
    if (this.valLogin()) {
        //$("#formLogin").submit();
    };
  };

  valLogin(): boolean {
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

        if (lret)
          this.loginService.login(this.userModel).subscribe(
            (response) => {
              localStorage.setItem("nomeUsuario", response.body.user.firstname)
              localStorage.setItem("codUsuario", response.body.user.id)
              this.router.navigateByUrl("/");
            },
            (erro) => {
              var cmsge = '';
              lret = true;
              if (erro.error == "Email already exists") {
                cmsge = "Email já cadastrado.";
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

    openSnackBarAlert(texto: string) {
      const snacBakRef = this.snackBar.open(texto,'', {
        duration: this.duration * 1000,
        panelClass: ['mat-toolbar', 'mat-warn'],
        verticalPosition: 'top'
      }) ;
    }
}
