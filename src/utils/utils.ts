const reduceCollection = (jsonData, offset, limit) => {
  return jsonData.slice(Number(offset) - 1, Number(limit) + Number(offset) - 1);
};

export { reduceCollection };
