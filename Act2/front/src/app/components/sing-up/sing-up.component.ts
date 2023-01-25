import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BandsService } from 'src/app/services/bands.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit{

  formUser: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private passPattern: any = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/;

  constructor( public formulario:FormBuilder, private userService:BandsService ) { 
    this.formUser=this.formulario.group({
      name:['', [Validators.required]],
      email:['' , [Validators.required, Validators.pattern(this.emailPattern)]],
      password:['', [Validators.required, Validators.minLength(8), Validators.pattern(this.passPattern)]],
      confirmpassword:['', [Validators.required]],   
      confirmAP:['', [Validators.requiredTrue]]   
    },{
      validators: this.MustMatch("password", "confirmpassword")
    });
  }

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData(){
    this.userService.getData().subscribe(res => {
      console.log(res)
    })
  }


  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors?.['mustMatch']) {
          return;
        }
        if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
        } else {
          matchingControl.setErrors(null);
        }
      
    }
  }

  registrarUsuario(): any{
    if(this.formUser.valid){

      /*var alfabeto = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789-_$&#@';
      var key = "llaveparacifrar"
      var password = this.formUser.value.password;

      let cipherText = "";
      for (let i = 0; i < password.length; i++) {
        const indexInAbc = alfabeto.indexOf(password[i]);
        if (indexInAbc < 0) {
          cipherText += password[i]
            continue;
        }
        let index = indexInAbc + alfabeto.indexOf(key[i]);
        cipherText += alfabeto[index % alfabeto.length];
      }

      this.formUser.value.password = cipherText;*/

      this.userService.adduser(this.formUser.value).subscribe(res => {
        let arr = Object.entries(res);
        alert(arr[0][1])
        this.formUser.reset()
      })
    }
    if(!this.formUser.valid){
      alert("Llene todos los campos correctamente")
    }
  }

  get name(){ return this.formUser.get('name');}
  get email(){ return this.formUser.get('email');}
  get password(){ return this.formUser.get('password');}
  get confirmpassword(){ return this.formUser.get('confirmpassword');}  
  get confirmAP(){ return this.formUser.get('confirmAP');}


}
