const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const tempvalue = document.getElementById("tempvalue");
const temp_status = document.getElementById("temp_status");
const datahide = document.querySelector(".middle_layer");


const getInfo = async(event)=> {
    event.preventDefault();
    // alert("done")
    let cityval = cityName.value;

    if(cityval === " "){
        city_name.innerText ="Please enter your City Name before search"
        datahide.classList.add('data_hide');

    }else{
        try{
        let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=8c2076e6054de9e1ea5a65a6d3c26754`;
        const response = await fetch(url);
        const data = await response.json();
        const arr = [data];


        city_name.innerText = `${arr[0].name} , ${arr[0].sys.country}`;
        tempvalue.innerText = arr[0].main.temp;

        // condition to check sunny or cloudy

        const tempMood = arr[0].weather[0].main;
        // console.log(tempMood);

        if(tempMood == "Clear") {
            temp_status.innerHTML ='<i class="fa-solid fa-cloud fa"></i>';
        } else if (tempMood == "clouds"){
            temp_status.innerHTML ='<i class="fa-solid fa-cloud" style="color: #f1f2f6"></i>';
        } else if (tempMood == "Rain"){
            temp_status.innerHTML ='<i class="fa-solid fa-cloud-rain" style="color: #a4b0be"></i>';
        } else {
            temp_status.innerHTML ='<i class="fa-solid fa-sun" style="color: #f1f2f6"></i>';
        }
        // datahide.classList.remove('data_hide');
        }
        catch{
            // city_name.innerText ="Plz enter the City Name Properly"
            datahide.classList.add('data_hide');
        }


    }
}

submitBtn.addEventListener("click" , getInfo);