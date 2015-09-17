function chunk(arr, size) {
    str=arr.join('');
    arr=[];
    while (str.length > size){
        str2=str.slice(0,size);
        arr.push(str2.split(''));
        str=str.slice(size);console.log(str);
    }
    if (str.length <= size){
        arr.push(str.split(''));
    }
    
  // Break it up.
  return arr;
}

chunk(["a", "b", "c", "d"], 2, "");
