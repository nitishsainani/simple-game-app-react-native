history = []

export const addToHistory = (game) => {
  history.push(game);
}

export const getHistory = () => {
  return history;
}