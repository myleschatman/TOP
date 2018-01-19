var removeFromArray = function(arr, ...nums) {
  for (var i = 0; i < nums.length; i++) {
    let index = arr.indexOf(nums[i]);
    if (index > -1) {
      arr.splice(index, 1)
    }
  }
  return arr;
}

module.exports = removeFromArray
