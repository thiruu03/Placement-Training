function array(arr){
    for(i = 0; i<=arr.length; i++){
        if(arr[i] != i){
            return "The missing element is " +i;
        }
    }
    
}
console.log(array([0,1,2,3,4,5,6,7,8,10]));