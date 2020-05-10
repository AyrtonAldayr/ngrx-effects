import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstadoAppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { loadUsuario } from 'src/app/store/actions';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit, OnDestroy {

  usuario: Usuario;

  constructor(
    private router: ActivatedRoute,
    private store: Store<EstadoAppState>,
  ) { }

  ngOnInit() {
    this.store.select('usuario').subscribe(
      ({ user, loading, error }) => {
        this.usuario = user;
      });

    this.router.params.subscribe(({ id }) => {
      this.store.dispatch(loadUsuario({ id }));
    });
  }
  ngOnDestroy() {

  }

}
