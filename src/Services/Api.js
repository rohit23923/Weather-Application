import axios from 'axios'

const key = 'af8bc407451548f485d114607240807';
const url = 'https://api.weatherapi.com/v1/forecast.json'

export const Api = async(city) => {
    console.log("city==>",city)
    try{
       let response= await axios.get(`${url}?key=${key}&q=${city}&days=7&aqi=yes&alerts=yes`);
       console.log("response=>",response)
       return response.data;

    }
    catch(error){
        console.log("Error while calling the API",error.meassage)
        return error.response;
    }
}