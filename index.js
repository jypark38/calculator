const btn_num = document.querySelectorAll('.btn-num'),
    btn_oper = document.querySelectorAll('.btn-oper'),
    btn_submit = document.querySelector('.btn-submit'),
    btn_reset = document.querySelector('.btn-reset')

let result = document.querySelector('.text-num'),
    exp = document.querySelector('.expression'),
    oper = '', a = '', b=''

function calc(num1,num2,oper){
    if (oper==='+'){
        return num1*1 + num2*1
    }
    if (oper==='-'){
        return num1*1 - num2*1
    }
    if (oper==='x'){
        return num1*1 * num2*1
    }
    if (oper==='/'){
        return num1*1 / num2*1
    }
}

btn_num.forEach(btn=>{
    btn.addEventListener('click',(e)=>
    {
        if (oper){
            b+=btn.innerText;
            exp.innerText=`${a} ${oper} ${b}`
        } else{
            a+=btn.innerText;
            exp.innerText=`${a} ${oper} ${b}`
        }
    })
})

btn_oper.forEach(btn=>{
    btn.addEventListener('click',(e)=>{   
        if (a){
            if (!oper){
                oper = btn.innerText
                exp.innerText=`${a} ${oper} ${b}`
            } else{
                result.innerText = `Ans = ${calc(a,b,oper)}`;
                a = calc(a,b,oper)
                b = ''
                oper = btn.innerText
                exp.innerText = `${a} ${oper}`
            }
        }
    })
})

btn_submit.addEventListener('click',(e)=>
    {
        if (!oper){
            alert('제출 안됨')
        } else{
            result.innerText = `Ans = ${calc(a,b,oper)}`;
            
        }
    }
)

btn_reset.addEventListener('click',(e)=>{
        result.innerText='Ans = '
        a=''
        b=''
        oper=''
        exp.innerText=''
    }
)