import axios from 'axios';

const API_KEY = 'cd3c450c9fe64efe8c8114500201911';
const BASE_URL = 'http://api.weatherapi.com/v1';

export const weatherService = {
    getLocation,
    getSuggestions,
    getForecast,
}

async function getLocation(coords) {
    if (!coords) return;
    else coords = `${coords.lat},${coords.lng}`;
    let location = await httpService('search', coords)
    location = location[0].name;
    return location;
}

async function getSuggestions(searchTerm) {
    if (!searchTerm) return;
    return await httpService('search', searchTerm);
}

async function getForecast(coords) {
    if (!coords) return;
    const query = `${coords.lat},${coords.lng}&days=3`;
    return await httpService('forecast', query);
}

async function httpService(api, query) {
    try {
        const res = await axios.get(`${BASE_URL}/${api}.json?key=${API_KEY}&q=${query}`,)
        return res.data;
    } catch (error) {
        console.error(`Had trouble getting to: ${api},\nwith query: ${query}`);
        console.error(error);
    }
}