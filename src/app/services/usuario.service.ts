import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/usuario';  // URL to web api

  getUsuarios() {
    return this.http.get<Usuario[]>(this.apiUrl, {
      headers: {'Access-Control-Allow-Headers': 'Content-Type',
                   'Access-Control-Allow-Methods': 'GET',
                   'Access-Control-Allow-Origin': '*'
                  }
    });
  }

  addUsuario(usr: Usuario) {
    return this.http.post<Usuario>(this.apiUrl , usr);
  }

  deleteUsuario(id: number) {
      return this.http.delete<Usuario>(this.apiUrl + '/' + id);
  }

  updateUsuario(id: number, usr: Usuario) {
    return this.http.put<Usuario>(this.apiUrl + '/' + id, usr);
  }
}
