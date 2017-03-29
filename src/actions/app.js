export let checkPassword = (password) => dispatch => {
    fetch('/api/checkPassword', {
        method: 'post',
        body: JSON.stringify({
            password: password
        })
    }).then(response => response.json()).then(response => {
        if (response.status === 'OK') {
            dispatch({ type: 'CHECK_PASSWORD_SUCCESS'});
        } else {
            dispatch({ type: 'CHECK_PASSWORD_FAILED', logonErrMessage: 'Неверный пароль' });
        }
    }).catch(() => {
        dispatch({ type: 'CHECK_PASSWORD_FAILED', logonErrMessage: 'Ошибка при входе. Повторите еще раз' });
    });
};