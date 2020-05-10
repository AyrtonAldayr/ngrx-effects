import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsuarioService } from 'src/app/services/usuario.service';
import { loadUsuario, loadUsuarioSuccess, loadUsuarioFailure } from '../actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';



@Injectable()
export class UsuarioEffects {



  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService,
  ) { }

  cargarUsuario$ = createEffect(
    () => this.actions$.pipe(
      ofType(loadUsuario),
      mergeMap(
        (action) => this.usuarioService.getUsersById(action.id)
          .pipe(
            map(user => loadUsuarioSuccess({ usuario: user })),
            catchError(err => of(loadUsuarioFailure({ error: err })))
          )
      )
    )
  );

}
