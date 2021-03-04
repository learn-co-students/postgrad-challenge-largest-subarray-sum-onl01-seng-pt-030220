function largestSubarraySum(array){
    let max_so_far = 0
    let max_ending_here = 0
    let max_collection = [];

  for ( let i = 0; i < array.length; i++) 
    if (max_ending_here + array[i] > 0){
      max_ending_here = max_ending_here + array[i]
      max_collection.push(max_ending_here)
    } else {
      max_ending_here = 0;
    }
  
  if (max_so_far < max_ending_here)
    max_so_far = max_ending_here
  
  
    return max_collection.length ? Math.max(...max_collection) : 0;
}
 