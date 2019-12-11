function disney(jour, month){
    let journeyCost = jour
    let needMonth = month
    
if (needMonth % 3 === 0){
    needMonth = journeyCost * 0.84
}  
let spend = journeyCost  * needMonth
console.log(spend)
}
disney(1000, 4)