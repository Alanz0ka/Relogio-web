const horas = document.getElementById('Horas')

const minutos = document.getElementById('Minutos')

const segundos = document.getElementById('Segundos')

const relogio = setInterval(()=>{
    const DateToday = new Date();
    const hr = DateToday.getHours();
    const min = DateToday.getMinutes();
    const sec = DateToday.getSeconds();

    if(hr<10) hr = '0' + hr
    if(min<10) min = '0' + min
    if(sec<10) sec = '0' + sec

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = sec
})