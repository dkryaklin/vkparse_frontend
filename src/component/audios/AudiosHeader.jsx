import React from 'react';
import { connect } from 'react-redux';

import AppHeader from '../common/AppHeader';

import { audiosFetch } from '../../actions/audios';

const AudiosHeader = ({audios, audiosFetch}) => {
    return <AppHeader page={audios.page} searchFetch={audiosFetch} />;
};

export default connect(
    ({audios}) => ({audios}),
    dispatch => ({
        audiosFetch: (searchQuery) => {
            dispatch(audiosFetch(searchQuery));
        }
    })
)(AudiosHeader);