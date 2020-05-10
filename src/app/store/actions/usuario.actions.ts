import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const loadUsuario = createAction(
  '[Usuario] Load Usuarios',
  props<{ id: string }>()
);

export const loadUsuarioSuccess = createAction(
  '[Usuario] Load Usuarios Success',
  props<{ usuario: Usuario }>()
);

export const loadUsuarioFailure = createAction(
  '[Usuario] Load Usuarios Failure',
  props<{ error: any }>()
);
