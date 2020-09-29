const reduceCollection = (jsonData, offset, limit) => {
  return jsonData.slice(offset, limit);
};

export { reduceCollection };
