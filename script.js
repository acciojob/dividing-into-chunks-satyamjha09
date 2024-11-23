const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
	const result = [];
  let currentChunk = [];
  let currentSum = 0;

  for (let num of arr) {
    // Check if adding the current number exceeds the maximum sum
    if (currentSum + num > n) {
      // Push the current chunk into the result and reset
      result.push(currentChunk);
      currentChunk = [];
      currentSum = 0;
    }
    // Add the number to the current chunk
    currentChunk.push(num);
    currentSum += num;
  }

  // Push the last chunk if it has any elements
  if (currentChunk.length > 0) {
    result.push(currentChunk);
  }

  return result;
	
  
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
