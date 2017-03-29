const initialState = {
    selectedCityId: localStorage.getItem('selectedCityId') ? parseInt(localStorage.getItem('selectedCityId'), 10) : 64,
    citiesLoaded: false,
    cities: []
};

const defaultCity = {
    id: 64,
    label: 'Кемерово'
};

export default (state = initialState, action) => {
    if (action.type === 'FETCH_CITIES_SUCCESS') {
        if (action.cities.length === 0) {
            return {
                ...state,
                citiesLoaded: true,
                cities: [defaultCity]
            };
        } else {
            const city = action.cities.filter((city, i) => {
                if (parseInt(city.id, 10) === state.selectedCityId) {
                    return true;
                }

                return false;
            });

            return {
                ...state,
                selectedCityId: city.length > 0 ? parseInt(city[0].id, 10) : 64,
                citiesLoaded: true,
                cities: action.cities
            };
        }
    } else if (action.type === 'FETCH_CITIES_FAIL') {
        return {
            ...state,
            citiesLoaded: true,
            cities: [defaultCity]
        };
    }
    
    if (action.type === 'SELECTED_CITY_CHANGE') {
        localStorage.setItem('selectedCityId', action.selectedCityId);

        return {
            ...state,
            selectedCityId: parseInt(action.selectedCityId, 10)
        };
    }

    return state;
};