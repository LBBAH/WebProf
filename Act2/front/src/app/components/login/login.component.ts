import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BandsService } from 'src/app/services/bands.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formlogin: FormGroup;

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  

  constructor(public formulario:FormBuilder, private dataService:BandsService, private router: Router) { 
    this.formlogin=this.formulario.group({      
      email:['' , [Validators.required, Validators.pattern(this.emailPattern)]],
      password:['', [Validators.required]]      
    })
  }
  

  ngOnInit(): void {
  }

  loginUser():any{

    var alfabeto = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789-_$&#@';
    var key = "llaveparacifrar"    
    let decipherText = "";

    if(this.formlogin.valid){
      this.dataService.login(this.formlogin.value).subscribe(res => {
        let array = Object.entries(res)
        if(array[0][0]=="warning"){
          this.router.navigate(['500']);
        }else{

          /*for (let i = 0; i < array[0][1].password.length; i++) {
            const indexInAbc = alfabeto.indexOf(array[0][1].password[i]);
            if (indexInAbc < 0) {
                decipherText += array[0][1].password[i]
                continue;
            }
            let index = indexInAbc - alfabeto.indexOf(key[i]);
            if (index >= 0) {
                decipherText += alfabeto[index % alfabeto.length];
                continue;
            }
            if (index < 0) {
                decipherText += alfabeto[index + alfabeto.length];
            }
          }

          if(this.formlogin.value.password == decipherText){
            alert("Login exito")
          }else{
            alert("Contraseña incorrecta")
          }*/
          alert("Login exito")
        }        
      })      
    }else{
      alert("Llene todos los datos")
    }
  }
  get email(){ return this.formlogin.get('email');}
  get password(){ return this.formlogin.get('password');}
}
