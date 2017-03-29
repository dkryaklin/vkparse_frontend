export let audiosFetch = (searchQuery) => dispatch => {
    dispatch({ type: 'FETCH_AUDIOS_REQUESTED' , searchQuery });

    if (process.env.NODE_ENV !== 'production') {
        const audiosMock = [
            {
                id: 1,
                user_id: 1,
                artist: 'Artist',
                title: 'Title'
            },
            {
                id: 2,
                user_id: 2,
                artist: 'Artist 2',
                title: 'Title 2'
            }
        ];

        setTimeout(() => {
            dispatch({ type: 'FETCH_AUDIOS_SUCCESS', audios: audiosMock, count: 100 });
        }, 2000);
        
        return;
    }

    fetch('/api/audios', {
        method: 'post',
        body: JSON.stringify({
            searchQuery: searchQuery
        })
    }).then(response => response.json()).then(({audios, count}) => {
        dispatch({ type: 'FETCH_AUDIOS_SUCCESS', audios, count });
    }).catch(() => {
        dispatch({ type: 'FETCH_AUDIOS_FAIL' });
    });
};