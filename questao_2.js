fibonacci_table = [0, 1, 1];

number = 21

function fibo(x){
    if(fibonacci_table.includes(x)){
        console.log("Esse número pertence a sequência de Fibonacci")
    }else{
        lastFibo = fibonacci_table[fibonacci_table.length-1]
        penultimate_fibo = fibonacci_table[fibonacci_table.length-2]

        calculated_fibo = lastFibo + penultimate_fibo

        if(calculated_fibo <= x){
            fibonacci_table.push(calculated_fibo)
            fibo(x)
        }else{
            console.log("Esse número não pertence a sequência de Fibonacci")
        }
    }
}

fibo(number)


