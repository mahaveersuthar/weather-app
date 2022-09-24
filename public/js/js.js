const cityName = document.getElementById('cityName');
const sumbitBtn = document.getElementById('sumbitBtn');
const city_name = document.getElementById('cityN');
const tempRealVal = document.getElementById('tempRealVal');
const temp_status = document.getElementById('temp_status');
const dataHideShow = document.querySelector('.midLay');
const day= document.getElementById('day');
const date = document.getElementById('date');

// day and date today
const todayDate=()=>{
    let Tddate= new Date();
    let dd= Tddate.getDate();let mm=Tddate.getMonth()+1;Tdday=Tddate.getDay();yy=Tddate.getFullYear();
    let dL = ["Sunday", "Monday", "Tuesday", "Wednasday", "Thursday", "Friday", "Suterday"];
    let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const dateMonthYear=`${dd} ${mL[mm]} ${yy}`;
    const todayday=dL[Tdday];
    day.innerText=todayday;
    // console.log(dateMonthYear);
    date.innerText=dateMonthYear;
    }
const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal == "") {
        city_name.innerText = 'Please Enter Input City Name ';
        dataHideShow.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=1aba27a1bdb4dc2c3b5d98798e15d640&units=metric`;
            const respo = await fetch(url);
            const data = await respo.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name} ${arrData[0].sys.country}`;
            tempRealVal.innerText = arrData[0].main.temp;
            dataHideShow.classList.remove('data_hide');
            const tempStatus = arrData[0].weather[0].main;

            // conndition for weather cloudly and not
            if (tempStatus == "Clear") {
                temp_status.innerHTML = "<i class='fa fa-sun' style='color:#eccc68;'></i>";
            } else if (tempStatus == "Clouds") {
                temp_status.innerHTML = "<i class='fa fa-cloud' style='color:#f1f2f6;'></i>";
            }
            else if (tempStatus == "Clouds") {
                temp_status.innerHTML = "<i class='fa fa-rain' style='color:#a4b0be;'></i>";
            }
            else {
                temp_status.innerHTML = "<i class='fa fa-cloud' style='color:#f1f2f6;'></i>";
            }
        }
        catch {
            city_name.innerText = 'city name worng ';
            dataHideShow.classList.add('data_hide');
        }

    }
}
todayDate();
sumbitBtn.addEventListener('click', getInfo);

