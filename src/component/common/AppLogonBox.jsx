import React from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import { checkPassword } from '../../actions/app';

const errorMessageStyle = {
    color: 'red'
};

const AppLogin = ({app, checkPassword}) => {
    let password = '';

    return (
        <Dialog
            title="Введите пароль"
            actions={[
                <FlatButton
                    label="Войти"
                    primary={true}
                    onTouchTap={() => {checkPassword(password)}}
                    disabled={false}
                />,
            ]}
            modal={true}
            open={app.userNeedToLogon}
        >
            <div>
                <div style={errorMessageStyle}>{app.logonErrMessage}</div>
                <TextField hintText="Пароль" onChange={(event, newValue) => {password = newValue}} />
            </div>
        </Dialog>
    );
};

export default connect(
    ({app}) => ({app}),
    dispatch => ({
        checkPassword: (password) => {
            dispatch(checkPassword(password));
        }
    })
)(AppLogin);