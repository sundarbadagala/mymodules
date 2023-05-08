const helperMemoization = (callback) => {
    const memoizedObj = {};
    return (...args) => {
        
      let n = args.toString();
      if (!memoizedObj[n]) {
        memoizedObj[n] = callback(...args);
      }
      return memoizedObj[n];
    };
  };

  export default helperMemoization