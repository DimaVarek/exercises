const myObject = {
    conteinArray: [11,13,14,66,67,69,234,456,2,1],
    currentIndex: 0,
    [Symbol.iterator]: function() {
        let array = []
        for (let i of this.conteinArray){
            if (i % 2 === 0){
                array.push(i)
            }
        }
        let index = 0
        return {
            next() {
                if (index < array.length){
                    return {done: false, value: array[index++]}
                }
                else {
                    return {done: true}
                }
            }
        }
    }
}
    
for (let x of myObject) {
    console.log(x)
}