const calculator = {
    
    sum (a,b){
        return a+b
    },
    sub (a,b){
        return a - b;
    },
    mul (a,b){
        return a * b;
    },
    divide (a,b){
        return a / b;
    }
}

let result = document.querySelector('.text-num')
let btn_num = document.querySelector('.text-num')
btn_num.forEach(btn=>{
    btn.addEventListener('click',(e)=>
    {
        result.innerText=btn.innerText;
    })
})