export let citiesFetch = () => dispatch => {
    if (process.env.NODE_ENV !== 'production') {
        const citiesMock = [
            {
                id: 64,
                label: 'Кемерово',
            }, {
                id: 2,
                label: 'Санкт-Петербург'
            }
        ];

        dispatch({ type: 'FETCH_CITIES_SUCCESS', cities: citiesMock });
        return;
    }

    fetch('/api/cities').then(response => response.json()).then(({cities}) => {
        dispatch({ type: 'FETCH_CITIES_SUCCESS', cities });
    }).catch(() => {
        dispatch({ type: 'FETCH_CITIES_FAIL' });
    })
};