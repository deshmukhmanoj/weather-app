/* const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c6ee311d3fmshaf2ef6435e10a84p133a82jsn11d845fba871',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = fetch(url, options);
	const result =response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}
 */

const Sumbit = document.getElementById("Sumbit");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c6ee311d3fmshaf2ef6435e10a84p133a82jsn11d845fba871",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getdata = async (city) => {
  const cityname = document.getElementById("cityname");
  cityname.innerHTML = city;
  console.log(cityname);
  const feels_like = document.getElementById("feels-like");

  try {
    const data = await fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
      options
    );
    
    realdata = await data.json();
    cloud_pct.innerHTML = realdata.cloud_pct;
    feels_like.innerHTML = realdata.feels_like;
    humidity.innerHTML = realdata.humidity;
    humidity2.innerHTML = realdata.humidity;
    max_temp.innerHTML = realdata.max_temp;
    min_temp.innerHTML = realdata.min_temp;
    sunrise.innerHTML = realdata.sunrise;
    sunset.innerHTML = realdata.sunset;
    temp.innerHTML = realdata.temp;
    temp2.innerHTML = realdata.temp;
    wind_degrees.innerHTML = realdata.wind_degrees;
    wind_speed.innerHTML = realdata.wind_speed;
    wind_speed2.innerHTML = realdata.wind_speed;
  } catch (error) {
    console.log(error);
  }
};
Sumbit.addEventListener("click", (e) => {
  e.preventDefault();
  getdata(city.value);
});

getdata("Mumbai");


const getmumbaidata = async (city) => {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c6ee311d3fmshaf2ef6435e10a84p133a82jsn11d845fba871',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const mumbaifeels_like = document.getElementById("mumbaifeels-like");
try {
	const response = await fetch(url, options);
	const mumbaidata = await response.json();
	console.log(mumbaidata);
  mumbaicloud_pct.innerHTML = mumbaidata.cloud_pct;
  mumbaifeels_like.innerHTML = mumbaidata.feels_like;
  mumbaihumidity.innerHTML = mumbaidata.humidity;
  mumbaimax_temp.innerHTML = mumbaidata.max_temp;
  mumbaimin_temp.innerHTML = mumbaidata.min_temp;
  mumbaisunrise.innerHTML = mumbaidata.sunrise;
  mumbaisunset.innerHTML = mumbaidata.sunset;
  mumbaitemp.innerHTML = mumbaidata.temp;;
  mumbaiwind_degrees.innerHTML = mumbaidata.wind_degrees;
  mumbaiwind_speed.innerHTML = mumbaidata.wind_speed;



} catch (error) {
	console.error(error);
}

}
getmumbaidata("ahmednagar");


getgoadata = async (city) => {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c6ee311d3fmshaf2ef6435e10a84p133a82jsn11d845fba871',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const goafeels_like = document.getElementById("goafeels-like");
try {
	const response = await fetch(url, options);
	const goadata = await response.json();
	console.log(goadata);
  goacloud_pct.innerHTML = goadata.cloud_pct;
  goafeels_like.innerHTML = goadata.feels_like;
  goahumidity.innerHTML = goadata.humidity;
  goamax_temp.innerHTML = goadata.max_temp;
  goamin_temp.innerHTML = goadata.min_temp;
  goasunrise.innerHTML = goadata.sunrise;
  goasunset.innerHTML = goadata.sunset;
  goatemp.innerHTML = goadata.temp;;
  goawind_degrees.innerHTML = goadata.wind_degrees;
  goawind_speed.innerHTML = goadata.wind_speed;



} catch (error) {
	console.error(error);
}

}


getgoadata("goa");
const getnagpurdata = async (city) => {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c6ee311d3fmshaf2ef6435e10a84p133a82jsn11d845fba871',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const nagpurfeels_like = document.getElementById("nagpurfeels-like");
try {
	const response = await fetch(url, options);
	const nagpurdata = await response.json();
	console.log(nagpurdata);
  nagpurcloud_pct.innerHTML = nagpurdata.cloud_pct;
  nagpurfeels_like.innerHTML = nagpurdata.feels_like;
  nagpurhumidity.innerHTML = nagpurdata.humidity;
  nagpurmax_temp.innerHTML = nagpurdata.max_temp;
  nagpurmin_temp.innerHTML = nagpurdata.min_temp;
  nagpursunrise.innerHTML = nagpurdata.sunrise;
  nagpursunset.innerHTML = nagpurdata.sunset;
  nagpurtemp.innerHTML = nagpurdata.temp;;
  nagpurwind_degrees.innerHTML = nagpurdata.wind_degrees;
  nagpurwind_speed.innerHTML = nagpurdata.wind_speed;



} catch (error) {
	console.error(error);
}

}

getnagpurdata("nagpur");
const getahmednagardata = async (city) => {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c6ee311d3fmshaf2ef6435e10a84p133a82jsn11d845fba871',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const ahmednagarfeels_like = document.getElementById("ahmednagarfeels-like");
try {
	const response = await fetch(url, options);
	const ahmednagardata = await response.json();
	console.log(ahmednagardata);
  ahmednagarcloud_pct.innerHTML = ahmednagardata.cloud_pct;
  ahmednagarfeels_like.innerHTML = ahmednagardata.feels_like;
  ahmednagarhumidity.innerHTML = ahmednagardata.humidity;
  ahmednagarmax_temp.innerHTML = ahmednagardata.max_temp;
  ahmednagarmin_temp.innerHTML = ahmednagardata.min_temp;
  ahmednagarsunrise.innerHTML = ahmednagardata.sunrise;
  ahmednagarsunset.innerHTML = ahmednagardata.sunset;
  ahmednagartemp.innerHTML = ahmednagardata.temp;;
  ahmednagarwind_degrees.innerHTML = ahmednagardata.wind_degrees;
  ahmednagarwind_speed.innerHTML = ahmednagardata.wind_speed;



} catch (error) {
	console.error(error);
}

}
getahmednagardata("ahmednagar");

