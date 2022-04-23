import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Cartao } from 'src/app/models/cartao';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  form = new FormGroup({
    titulo: new FormControl(''),
    descricao: new FormControl('')
  })

  emailLogado : String = ''

  cartoes: Cartao[] = [
  new Cartao('manda salve', 'use pao e agua'), ]


  constructor(private router: Router, private service: Service) { }

  ngOnInit(): void {
    let email = sessionStorage.getItem('email')
    if(email){
      this.emailLogado = email
      this.pegarTarefas()
    }else{
      this.router.navigate(['/'])
    }
  }

  pegarTarefas(): void {
    this.service.pegarTarefas(this.emailLogado).subscribe(data => {
      this.cartoes = data
    })
  }
  criarTarefa(): void{
    this.service.criarTarefa({...this.form.value, dono: this.emailLogado}).subscribe(data => {
      this.pegarTarefas()
    })
  }

  sair(): void{
    sessionStorage.removeItem('email')
    this.router.navigate(['/'])
  }

}
