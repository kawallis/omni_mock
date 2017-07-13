import {ADD_DATE, CHANGE_DATE } from './constants';

export function addDate(payload) {
  return {
    type: ADD_DATE,
    payload
  };
}

export function changeDate(payload) {
  return {
    type: CHANGE_DATE,
    payload
  };
}