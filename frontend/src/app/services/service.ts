import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/apiResponse';
import { Cartao } from '../models/cartao';

const BACKEND_URL = 'http://localhost:3000'

@Injectable()
export class Service {
  constructor(private http: HttpClient) { }

  cadastrarUsuario(usuario: any) {
      return this.http.post<ApiResponse>(BACKEND_URL + '/users/cadastrar', usuario)
  }

  loginUsuario(usario: any){
      return this.http.post<ApiResponse>(BACKEND_URL + '/users/login', usario)
  }

  criarTarefa(tarefa: any){
    return this.http.post<ApiResponse>(BACKEND_URL + '/tarefas/criar', tarefa)
  }

  pegarTarefas(email: String){
    return this.http.get<Cartao[]>(BACKEND_URL + '/tarefas/' + email)
  }
}