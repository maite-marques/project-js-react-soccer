import { ActionTypes, IPlayer } from './types';

export function getPlayerRequest(player: IPlayer) {
  return {
    type: ActionTypes.getPlayerRequest,
    payload: {
      player
    }
  };
}
