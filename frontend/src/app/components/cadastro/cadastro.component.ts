import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/apiResponse';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {


  form = new FormGroup({
    nome: new FormControl(''),
    senha: new FormControl(''),
    email: new FormControl('')
  })

  constructor(private service: Service, private router: Router) {}

  ngOnInit(): void {
  }

  cadastrar(): void {
    console.log(this.form.value)
    this.service.cadastrarUsuario(this.form.value).subscribe( data => {
      if(data.ok){
        sessionStorage.setItem('email', this.form.value.email.toString())
        this.router.navigate(['/listagem'])
      }
    })
  }

}
