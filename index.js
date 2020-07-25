const container=document.querySelector('.container')
const text=document.querySelector('#text')



const totalTime=7500
const meowloveTime=(totalTime/5) * 2

const meowTime=totalTime/5

meowVacation()

function meowVacation(){
    text.innerHTML='Meowwwww!'

    setTimeout(()=>{
        text.innerText='I love you!!'
        setTimeout(()=>{
            text.innerText='Meoowuuh huuuhuu!'
           
        }, meowTime)
    },meowloveTime)
}

setInterval(meowVacation, totalTime)


