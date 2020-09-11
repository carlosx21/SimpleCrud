import { Component, OnInit } from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { Usuario } from './models/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private userSe: UsuarioService) {
  }

  public nombre = '';
  public correo = '';

  public upCtrl = true;

  lstUsuarios: Usuario[];

  ngOnInit() {

    this.userSe.getUsuarios().subscribe(resp => {
         this.lstUsuarios = resp;
    });

    this.nombre = '';
    this.correo = '';
  }

  agregarUsr() {
    const us: Usuario = {
       id: 0,
      correo: this.correo,
      nombre: this.nombre
    };
    this.userSe.addUsuario(us).subscribe(resp => {
      this.ngOnInit();
    });
  }

  eliminarUser(id: number) {
    this.userSe.deleteUsuario(id).subscribe(resp => {
      console.log(resp);
      this.ngOnInit();
    });
  }


  actualizarUsuario(id: number , usr: Usuario) {
    this.upCtrl = true;
    this.userSe.updateUsuario(id, usr).subscribe(resp => {
      console.log(resp);
      this.ngOnInit();
    });
  }
}
