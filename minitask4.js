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

const result = () => {
    console.log(`dari c ke f = ${suhu1(20)}  dari c ke r =  ${suhu2(20)} dari c ke k = ${suhu3(20)} `)
}


result()
