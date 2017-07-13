import {ADD_DATES, QUERY_DATES } from './constants';

export function addDates(payload) {
  return {
    type: ADD_DATES,
    payload
  };
}

export function queryDates(payload) {
  return {
    type: QUERY_DATES,
    payload
  };
}