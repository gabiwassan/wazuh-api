const reduceCollection = (jsonData, offset, limit) => {
  return jsonData.slice(offset, limit + offset);
};

export { reduceCollection };
