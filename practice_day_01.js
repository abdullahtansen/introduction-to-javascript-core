// 
var display = 0;
while(display < 39){
    console.log('ajke amar mon valo nei');
    display++;
    console.log(display);
}
// 
for(var i = 0; i < 39; i++){
    console.log('Ami Tomay valobasina',i)
}
// display numbers between 58 to 98
for (var i = 58; i <= 98; i++){
    console.log(i);
}
// display show all events number
for(var i = 412; i < 456; i +=2){
    console.log(i)
}

// show all odd numbers 

for(var i = 581; i <= 623; i += 2){
    console.log(i);
}
// difference between while loop and for loop

var i = 0;
while(i < 10){
    console.log(i);
    i++;
}
for(var i = 0; i < 10; i++){
    console.log(i)
}
// declare an array for all the topics that you have learned last few days,then as output;

var learnTopics = ['html','css','bootstrap','javascript','tailwind','daisyUi','even program solved','odd program solved'];

for(var i = 0; i < learnTopics.length; i++){
    var learnTopic = learnTopics[i];
    console.log(learnTopic);
}

// create an array for all the mobile phones.Display All the elements of the by using a while loop.
var mobilePhoneUses = ['nokia', 'symphony', 'nokia E-5', 'Samsung j1', 'samsung a30s'];
while( mobilePhoneUses.length < 6 ){
    console.log(mobilePhoneUses)
    mobilePhoneUses++;
}

// Run a loop from 30 to 86.this loop will stop it the values get higher than 44 stopped.
for(var i = 30; i < 86; i++){
    if(i > 44 ){
       break;
    }
    console.log(i);
}

// write the price of the books that you have.Display The prices if the prices is lower than 200


// let's say you have x amount of money.if you have more than 80,000, then you will buy a mac.
// if more than 60,000, then you will by gaming,
// if you more than 40,000 then you will by lenovo yoga
// if you have more than you will by an used laptop.