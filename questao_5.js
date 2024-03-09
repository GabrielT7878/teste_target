function reverseString(string) {
    reversed = [...string]
    for(let i = 0; i < reversed.length / 2; i++) {
        let temp = reversed[i]
        reversed[i] = reversed[reversed.length - i - 1]
        reversed[reversed.length - i - 1] = temp
    }
    return reversed.join("")
}

string = "estágio"

console.log(reverseString(string))

