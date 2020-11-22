import { autorun, makeAutoObservable, runInAction } from "mobx"
import { weatherService } from "./services/weatherService";

export const store = makeAutoObservable({
    isMetric: true,
    locationMode: null,
    weatherMode: null,
    locationCoords: null,
    weatherInfo: null
})
window.store = store;

autorun(() => {
    if (store.locationCoords) {
        weatherService.getForecast(store.locationCoords)
            .then(res => {
                runInAction(() => store.weatherInfo = res);
            })
    };
})