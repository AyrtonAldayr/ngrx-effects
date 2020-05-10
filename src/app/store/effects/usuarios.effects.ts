import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { cargarUsuarios, cargarUsuariosSuccess, cargarUsuariosFailure } from '../actions';
import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';
import { of } from 'rxjs';



@Injectable()
export class UsuariosEffects {



  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService,
  ) { }

  cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      ofType(cargarUsuarios),
      /* tap(data => console.log('effect tap ', data)), */
      mergeMap(
        () => this.usuarioService.getUsers()
          .pipe(
            /* tap(data => console.log('getUsers effec data ', data)) */
            map(user => cargarUsuariosSuccess({ usuarios: user })),
            catchError(err => of(cargarUsuariosFailure({ payload: err })))
          )
      )
    )
  );

}
