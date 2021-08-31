export const setDate = (day) => {
  return new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + day
  );
};

// Makes a obj with id, desc, date, important
export const makeDumbData = (words, stampDate) => {
  return words.map((word, index) => {
    return {
      id: index,
      description: word,
      timeStamp: stampDate(index),
      important: Math.round(Math.random() * 100) > 50 ? true : false,
    };
  });
};

