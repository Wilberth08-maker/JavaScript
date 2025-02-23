for(let index=1; index<=100; index++){

    if(index % 3 === 0 && index % 5 === 0){
        console.log(index,"FlizzBuzz")
    }
    else if(index % 3 === 0){
        console.log(index, "Flizz")
    }   
    else if(index % 5 === 0){
        console.log(index, "Buzz")
    }   
    else{
        console.log(index)
    }
}