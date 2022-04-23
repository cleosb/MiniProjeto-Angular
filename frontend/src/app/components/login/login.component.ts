import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 form= new FormGroup({
  senha:new  FormControl(''),
  email:new  FormControl('')
 })
  constructor(private router: Router, private service:Service) { }

  ngOnInit(): void {
  }
  login(): void{
    this.service.loginUsuario(this.form.value).subscribe(data => {
      if(data.ok){
        sessionStorage.setItem('email', data.email.toString())
        this.router.navigate(['/listagem'])
      }else{
        alert('email ou senha incorreta')
      }
    })
  }
}
