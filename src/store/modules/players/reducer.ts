import produce from 'immer';
import { Reducer } from 'redux';

import { ActionTypes, IPlayer } from './types';

const INITIAL_STATE: IPlayer = {
  atleta_id: 0,
  nome_popular: '',
  nome: '',
  posicao: {
    nome: '',
    sigla: ''
  }
};

const player: Reducer<IPlayer> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.getPlayerRequest:
        console.log(action);
        return {
          atleta_id: 564,
          nome_popular: 'Matheus Pimenta',
          nome: 'Matheus Freitas Toledo',
          posicao: {
            nome: 'Atacante',
            sigla: 'ATA'
          }
        };

      default:
        return draft;
    }
  });
};

export default player;
