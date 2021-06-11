function calMode(arr, n){
    let mode = 0;
    let c = 0;
    let res = 0;
    for(let i =0; i < n-1 ; i++){
        let count =0;
        for(let j=1; j < n; j++){
            if(arr[i]==arr[j]){
                count++;
                c = arr[i];
            }
            if(mode<=count){
                mode = count;
                res =c;
            }else{
                continue;
            }
        }
    }
    if(mode>1) return res;
    else return arr[0];
}

function processData(input) {
    //Enter your code here
    input = input.split('\n');
    input = input[1].split(' ').sort(function(a,b){return a-b});
    let median = 0;
    let mean = 0;
    let mode = 0;
    if(input.length % 2 == 0){
        median = (parseInt(input[Math.floor(input.length/2)]) + parseInt(input[Math.floor(input.length/2)-1])) / 2;
    }else{
        median = input[Math.floor(input.length/2)];        
    }
    for(let i = 0; i < input.length;i++){
        mean += parseInt(input[i]);
    }
    console.log(mean/input.length);
    console.log(median);
    console.log(calMode(input,input.length));
} 
