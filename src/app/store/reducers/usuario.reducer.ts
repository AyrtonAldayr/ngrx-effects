import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { loadUsuario, loadUsuarioSuccess, loadUsuarioFailure } from '../actions';


export const usuarioFeatureKey = 'usuario';

export interface UsuarioState {
  id: string;
  user: Usuario;
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const UsuarioInitialState: UsuarioState = {
  id: null,
  user: null,
  loaded: false,
  loading: false,
  error: null,
};


// tslint:disable-next-line: variable-name
export const _usuarioReducer = createReducer(
  UsuarioInitialState,
  on(loadUsuario, (state, { id }) => ({
    ...state,
    loading: true,
    id
  })),
  on(loadUsuarioSuccess, (state, { usuario }) => ({
    ...state,
    loading: false,
    loaded: true,
    user: { ...usuario }
  })),
  on(loadUsuarioFailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: true,
    error
  })),
);

export function usuarioReducer(state, action) {
  return _usuarioReducer(state, action);
}
