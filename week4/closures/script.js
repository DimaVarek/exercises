function externalAdd () {
    let x = 0

    return num => {
        res = x + num
        x = num
        return res
    }
}

const add = externalAdd()
console.log(add(3)); // 3
console.log(add(1)); // 4
console.log(add(2)); // 3
console.log(add(2)); // 4
console.log(add(8)); // 10