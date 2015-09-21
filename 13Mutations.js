function mutation(arr) {
  var i;
  var check = [];
  
  arr = arr.map(function(value) {
    return value.toLowerCase();
  });
  
  for (i=0;  i< arr[1].length; i++){
    check[i] = arr[0].indexOf(arr[1][i])
  }
  
  if (check.indexOf(-1) === -1)
    return true;
  else 
    return false;
}

mutation(["hello", "Hey"], "");
