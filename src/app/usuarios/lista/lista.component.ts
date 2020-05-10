import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { EstadoAppState } from 'src/app/store/app.reducer';
import { cargarUsuarios } from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  // tslint:disable-next-line: no-inferrable-types
  loding: boolean = false;
  error: any;

  constructor(
    /* public usuarioService: UsuarioService  */
    private store: Store<EstadoAppState>
  ) { }

  ngOnInit() {
    this.store.select('usuarios').subscribe(({ users, loading, error }) => {
      /* console.log('select: ', users); */
      this.usuarios = users;
      this.loding = loading;
      this.error = error;
    });
    this.store.dispatch(cargarUsuarios());
    /* this.usuarioService.getUsers()
        .subscribe( users => {
          console.log(users);
          this.usuarios = users;
        }); */

  }

}
