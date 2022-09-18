// give away.
const months = ["january","february","march","april","may","june","july","august","september","october","november","december"]
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",]


const deadline = new Date(2023,0,15,00,00,00 )

const year = deadline.getFullYear()
const month = months[deadline.getMonth()]
const day = weekday[deadline.getDay()]
const hours = deadline.getHours()
const minutes = deadline.getMinutes()
const dates = deadline.getDate()


//DOM 

const deadLineDay = document.getElementById('deadLineDay')
deadLineDay.innerHTML =`give away Ends on ${dates} ${month} ${year} ${"0"+hours}:${minutes}am
`
//count down time
const remainTime = deadline.getTime()


const countDown = () =>{
   const timeDown = remainTime - new Date().getTime()
   const oneDay = 24*60*60*1000
   const onehour = 60*60*1000
   const oneMinutes = 60*1000
   const oneSecond = 1000

   let dayRemain = Math.floor(timeDown/oneDay)
   

   let hourRemain =Math.floor((timeDown % oneDay)/onehour)


   let minRemain = Math.floor((timeDown % onehour)/oneMinutes)


    let secRemain = Math.floor((timeDown % oneMinutes)/oneSecond)


    let d = dayRemain < 10 ? "0" + dayRemain:dayRemain
    
    let h = hourRemain < 10 ? "0" + hourRemain:hourRemain

    let m = minRemain < 10? "0" + minRemain:minRemain

    let s = secRemain < 10? "0" + secRemain:secRemain
    
    const display =document.querySelector(".hourRemain")
    if(timeDown > 0){
    display.innerHTML =     `<span>${d}</span><span>${h}</span><span>${m}</span><span>${s}</span>`}
    else {
        display.innerHTML = `sory your give away as expired`
    }
}
let calller = setInterval(countDown, 1000)

countDown()