export enum ActionTypes {
  getPlayerRequest = 'GET_PLAYER_REQUEST'
}

export interface IPlayer {
  atleta_id: number;
  nome_popular: string;
  nome: string;
  posicao: {
    nome: string;
    sigla: string;
  };
}
