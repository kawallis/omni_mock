import { ADD_DATE, CHANGE_DATE } from './constants';

export default function DateTimeSelector(state, { type, payload}) {
  switch (type) {
  case ADD_DATE:
    let update = {...state};
    update.availableTimes = payload;
    return update;
  case CHANGE_DATE:
    return
  default:
    return state;
  }
}