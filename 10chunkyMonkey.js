function chunk(arr, size) {
    str=arr.join('');
    arrNew=[];
    
    var i = 0;
    var j = 0;
    
    while (str.length > size){
        str2=str.slice(0,size);
        arrNew.push(str2.split(''));
        str=str.slice(size);console.log(str);
    }
    
    if (str.length <= size){
        arrNew.push(str.split(''));
    }
    
    if (!isNaN(arr[0])){
        for(i = 0; i < arrNew.length; i++){
            for(j = 0; j < arrNew[i].length; j++)
                arrNew[i][j]=Number(arrNew[i][j]);
        }
    }

  return arrNew;
}

chunk(["a", "b", "c", "d"], 2, "");
