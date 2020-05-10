import { Action, ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers';

export const appFeatureKey = 'app';

export interface EstadoAppState {
  usuarios: reducers.UsuariosState;
  usuario: reducers.UsuarioState;
}

export const appReducers: ActionReducerMap<EstadoAppState> = {
  usuarios: reducers.usuariosReducer,
  usuario: reducers.usuarioReducer,
};

