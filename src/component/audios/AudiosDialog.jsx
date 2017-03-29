import React from 'react';
import { connect } from 'react-redux';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const AudiosDialog = ({audios, closeDialog}) => {
    const audio = audios.selectedAudio;

    return (
        <div>
            <Dialog
                title={`Аудиозапись #${audio.id}`}
                actions={(
                    <FlatButton
                        label="Закрыть"
                        primary={true}
                        keyboardFocused={true}
                        onTouchTap={closeDialog}
                    />
                )}
                modal={false}
                open={true}
                onRequestClose={closeDialog}
            >
                <div>Хозяин: {audio.user_id}</div>
                <div>Артист: {audio.artist}</div>
                <div>Название: {audio.title}</div>

            </Dialog>
        </div>
    );
};

export default connect(
    ({audios}) => ({audios}),
    dispatch => ({
        closeDialog: () => {
            dispatch({type: 'SELECTED_AUDIO_CHANGE', selectedAudio: null});
        }
    })
)(AudiosDialog);