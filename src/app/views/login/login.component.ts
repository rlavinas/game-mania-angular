import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import * as $ from 'jquery';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {

  }

  userModel = new User();

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

        if (lret)
          this.loginService.login(this.userModel).subscribe(
            (response) => {
              console.log(response);
              localStorage.setItem("nomeUsuario", response.body.user.firstname)
              this.router.navigateByUrl("/");
            },
            (erro) => {
              console.log(erro);
              $("#msgErro").html("Usuário ou senha inválida.");
              lret = false;
            })
    
        return (lret);
    };
}
