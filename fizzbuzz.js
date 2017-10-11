var a

for (var i = 1; i <=100; i++){
  	a = i

    if (i%5 == 0){
    	a = "Buzz"
    }

    if (i%3 == 0){
    	a = "Fizz"
    }

    if ((i%3 == 0) & (i%5 == 0)){
    	a = "FizzBuzz"
   	}

  console.log(a)
}
