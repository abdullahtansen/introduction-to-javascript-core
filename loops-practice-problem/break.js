for (var i = 0; i <= 20; i++){
    console.log(i);
    if(i > 10){
        break;
    }
}
// while loop
var roastGiven = 0;
while (roastGiven < 10){
    console.log('Roast Den');
    roastGiven++;
    if(roastGiven > 4){
        break;
    }
}

var tableItems = ['Books', 'spoken English', 'notebook', 'mouse', 'pen', 'keyboard', 'laptop','Dell Monitor'];
for(var i = 0; i < tableItems.length; i++){
    var tableItem = tableItems[i];
    if(tableItem == 'keyboard'){
        break;
    }
    console.log(tableItem);
}

var numbers = [45, 87, 25, 78, 56, 98, 23, 25,300];
for(var  i = 0; i < numbers.length; i++ ){
    var number = numbers[i];
    if( number > 100){
        break;
    }
    console.log(number);
}