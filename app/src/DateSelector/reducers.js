import { ADD_DATES, QUERY_DATES } from './constants';

export default function DateTimeSelector(state, { type, payload}) {
  switch (type) {
  case ADD_DATES:
    let update = {...state};
    update.availableTimes = payload;
    return update;
  case QUERY_DATES:
  console.log(payload)
  let newState = {...state};
  newState.time = payload;
  return newState;
  //TODO
    return
  default:
    return state;
  }
}