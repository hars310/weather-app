
let inputElement = document.querySelector('.cityName');

const url = 'https://open-weather13.p.rapidapi.com/city/';
const options= {
    headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    }
};


document.querySelector('.btn').addEventListener('click',function(){
    const cityName=inputElement.value;
  

    async function collect(){
        const response = await fetch(url+cityName, options);

        const result = await response.json();
        console.log(result)

        if(result.cod==404) {
            console.log("hello")
            document.querySelector('.error').style.display = "block";
            document.querySelector('.weather').style.display = "none";
        }
        else{
            const tempInCelcius = (result.main.temp - 32)*(5/9)

        document.querySelector('.temp').innerHTML = Math.floor(tempInCelcius);
        document.querySelector('.city').innerHTML = result.name;
        document.querySelector('.humidity').innerHTML = result.main.humidity;
        document.querySelector('.pressure').innerHTML = result.main.pressure;
        document.querySelector('.wind').innerHTML = result.wind.speed;

        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";
   }

    

    }
    collect()
})





