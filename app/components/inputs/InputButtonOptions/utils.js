const determineIndex = (options, value) => {
  const indexValue = options.indexOf(value);
  if(indexValue !== -1){
    return indexValue;
  }
  return 0;
}

export default {
  determineIndex,
};