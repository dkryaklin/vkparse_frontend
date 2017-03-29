const initialState = {
    page: {
        label: 'Аудиозаписи',
        supportSearch: true,
        supportSelect: true
    },
    audiosCount: 0,
    selectedAudio: null,
    isLoading: false,
    searchQuery: '',
    audios: []
};

export default (state = initialState, action) => {
    if (action.type === 'SELECTED_AUDIO_CHANGE') {
        return {
            ...state,
            selectedAudio: action.selectedAudio
        };
    }

    if (action.type === 'FETCH_AUDIOS_REQUESTED') {
        return {
            ...state,
            searchQuery: action.searchQuery,
            isLoading: true
        };
    } else if (action.type === 'FETCH_AUDIOS_SUCCESS') {
        return {
            ...state,
            audiosCount: action.count,
            audios: action.audios,
            isLoading: false
        };
    } else if (action.type === 'FETCH_AUDIOS_FAIL') {
        return {
            ...state,
            isLoading: false
        };
    }

    return state;
};