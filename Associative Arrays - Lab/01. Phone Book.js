let as = {}
as['one'] = 1
as['two'] = 2
as['three'] = 3

Object.keys(as).forEach((i) => {
    console.log(`${i} = ${as[i]}`)
})