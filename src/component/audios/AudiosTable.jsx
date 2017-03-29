import React from 'react';
import { connect } from 'react-redux';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import AudiosDialog from './AudiosDialog';

const AudiosTable = ({audios, audioSelect}) => {
    const selectAudio = (selectedAudioIndex) => {
        if (audios.page.supportSelect) {
            audioSelect(audios.audios[selectedAudioIndex]);
        }
    };

    return (
        <div className="appTable">
            <Table onRowSelection={selectAudio}>
                
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>Пользователь ИД</TableHeaderColumn>
                        <TableHeaderColumn>Аудио ИД</TableHeaderColumn>
                        <TableHeaderColumn>Артист</TableHeaderColumn>
                        <TableHeaderColumn>Название</TableHeaderColumn>
                    </TableRow>
                </TableHeader>

                <TableBody showRowHover={true} displayRowCheckbox={false}>
                    {audios.audios.map(
                        (audio, index) => 
                            <TableRow key={index}>
                                <TableRowColumn>{audio.user_id}</TableRowColumn>
                                <TableRowColumn>{audio.id}</TableRowColumn>
                                <TableRowColumn>{audio.artist}</TableRowColumn>
                                <TableRowColumn>{audio.title}</TableRowColumn>
                            </TableRow>
                    )}
                </TableBody>

            </Table>

            {audios.selectedAudio ? <AudiosDialog /> : null}
        </div>
    )
};

export default connect(
    ({audios}) => ({audios}),
    dispatch => ({
        audioSelect: (selectedAudio) => {
            dispatch({type: 'SELECTED_AUDIO_CHANGE', selectedAudio })
        }
    })
)(AudiosTable);