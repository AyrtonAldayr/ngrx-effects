import { Action, createReducer, on } from '@ngrx/store';
import { cargarUsuarios, cargarUsuariosFailure, cargarUsuariosSuccess } from '../actions';
import { Usuario } from 'src/app/models/usuario.model';

export const usuariosFeatureKey = 'usuarios';

export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const UsuariosinitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};


// tslint:disable-next-line: variable-name
export const _reducer = createReducer(
  UsuariosinitialState,
  on(cargarUsuarios, state => ({ ...state, loading: true })),
  on(cargarUsuariosSuccess, (state, { usuarios }) => ({
    ...state,
    loading: false,
    loaded: true,
    users: [...usuarios]
  })),
  on(cargarUsuariosFailure, (state, { payload }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: payload
  })),
);

export function usuariosReducer(state, action) {
  return _reducer(state, action);
}

