const initialState = {
    drawerIsOpen: false,
    userNeedToLogon: process.env.NODE_ENV === 'production' ? true : false,
    logonErrMessage: '',
    menus: [
        {
            label: 'Аудиозаписи',
            urlPath: '/audios'
        }
    ]
};

export default (state = initialState, action) => {
    if (action.type === 'DRAWER_CLOSE') {
        return {
            ...state,
            drawerIsOpen: false
        };
    } else if (action.type === 'DRAWER_OPEN') {
        return {
            ...state,
            drawerIsOpen: true
        };
    }

    if (action.type === 'CHECK_PASSWORD_SUCCESS') {
        return {
            ...state,
            userNeedToLogon: false,
            logonErrMessage: ''
        };
    } else if (action.type === 'CHECK_PASSWORD_FAILED') {
        return {
            ...state,
            userNeedToLogon: true,
            logonErrMessage: action.logonErrMessage
        };
    }

    return state;
};