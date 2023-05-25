//For Dark and Light Mode
function changeMode(){
    let mybody = document.body;
    mybody.classList.toggle('mylight')
}

//For Coupon
function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('main').style.opacity = '0.3'
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('main').style.opacity = '1'
}

//Geo Location

let x = document.getElementById('out');
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText="Geo Not Supported"
    }
}
function showPosition(data){
    console.log(data)
    let lat = data.coords.latitude
    let lon = data.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
   fetch(url,{method: 'GET'})
   .then((res) =>res.json())
   .then((data) => {
    console.log(data)
   let cityName = data.city.name;
   let temp = data.list[0].temp.day+" °C"
   x.innerText = `${cityName} , ${temp}`
   })
}