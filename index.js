// Code your solutions in this file
function writeCards(arrayOfstringName, evenName){
    const newArray = [];
    for(let i = 0; i < arrayOfstringName.length; i++){
        newArray.push(`Thank you, ${arrayOfstringName[i]}, for the wonderful ${evenName} gift!`);
    }
    return newArray;
}

function countDown(number){
    while(number >= 0){
        console.log(number);
        number = number-1;
    }
}