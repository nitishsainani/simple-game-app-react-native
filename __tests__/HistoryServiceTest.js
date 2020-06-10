import 'react-native';
import React from 'react-native'
import {getHistory, addToHistory} from "../src/Services/HistoryHandler";

it('test history Service', () => {
  const game1 = {
    firstPlayerName: 'nitish',
    secondPlayerName: 'david',
    firstPlayerScore: 2,
    secondPlayerScore: 3
  }
  const game2 = {
    firstPlayerName: 'nitish1',
    secondPlayerName: 'david1',
    firstPlayerScore: 22,
    secondPlayerScore: 33
  }

  addToHistory(game1);
  addToHistory(game2);

  expect(containsObject(getHistory(), game1)).toEqual(true);
  expect(containsObject(getHistory(), game2)).toEqual(true);
})

const containsObject = (list, obj) => {
  for (let i = 0; i < list.length; i++) {
    if (JSON.stringify(list[i]) === JSON.stringify(obj)) {
      return true;
    }
  }
  return false;
}
