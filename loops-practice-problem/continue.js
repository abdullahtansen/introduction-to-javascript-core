var numbers = [45, 87, 25, 78, 56, 98, 23, 25,100,300];
for(var  i = 0; i < numbers.length; i++ ){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}