const submitBtn = document.getElementById('submitBtn');
const CityName = document.getElementById('cityName');
const city_name = document.getElementById('city_Name');
const temp = document.getElementById('temp');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');


const getInfo  = async(event) => {
event.preventDefault();

let cityVal = CityName.value;
if(cityVal === ""){

    city_name.innerText = "Plz write the name before search";
    datahide.classList.add("data_hide");
}
else{
    try{
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=278ae8cf61d5499d5f5aa48a6408751c`;
    const response = await fetch(url);
    const data = response.json();
    const arrdata  = [data];
    city_name.innerHTML = `${arrdata[0].name}, ${arrdata[0].sys.country}`;

    temp.innerHTML = arrdata[0].main.temp;
    temp_status.innerHTML = arrdata[0].weather[0].main;

    const tempMood = arrdata[0].weather[0].main;
    
    if (tempMood == "Clear") {
        temp_status.innerHTML =
            "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
        } else if (tempMood == "Clouds") {
        temp_status.innerHTML =
            "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
        } else if (tempMood == "Rain") {
        temp_status.innerHTML =
            "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
        } else {
        temp_status.innerHTML =
            "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";


        }
        datahide.classList.remove("data_hide");
    }
    catch{

       // alert("please write city name properly");
        alert(`please enter the proper city name`);
       datahide.classList.add("data_hide");
    }
}

}
submitBtn.addEventListener('click',getInfo);