let argv = process.argv
let initialVal = 0
argv = argv.slice(2)
argv = argv.map(num => Number(num))
argv = argv.reduce((prevVal,CurrVal) => {
    return prevVal + CurrVal + initialVal
})

console.log(argv)