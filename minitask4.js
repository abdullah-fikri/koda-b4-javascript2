// menghitung suhu 1. c = f  ||   2. c = r ||  3. c = k || 4. output hasil dengan benar
function suhu1 (c){
    let farenheit = 0
    farenheit = c * 9/5 + 32
        return farenheit
}

const suhu2 = function(c){
    let reamur = 0
    reamur = (c * 4)/5
    return reamur
}

const suhu3 = (c) => {
    let kelvin = 0
       kelvin =  c + 273.15
       return kelvin
    }

const result = (c) => {
    let suhu11 = suhu1(c)
    let suhu22 = suhu2(c)
    let suhu33 = suhu3(c)
    console.log(`dari c-f ${suhu11}°F\n  dari c-k ${suhu22}°R \n  dari c-k ${suhu33}°K`)
}


const out = (c, cb1, cb2, cb3) => {
    console.log (`${c}° diubah jadi ${cb1(c)}°F`)
    console.log (`${c}° diubah jadi ${cb2(c)}°R`)
    console.log (`${c}° diubah jadi ${cb3(c)}°k`)
   
}


result(20)
out(20, suhu1, suhu2, suhu3)