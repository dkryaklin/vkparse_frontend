import React from 'react';
import { connect } from 'react-redux';

import AudiosHeader from './AudiosHeader';
import AudiosTable from './AudiosTable';
import AudiosFooter from './AudiosFooter';

import { audiosFetch } from '../../actions/audios';

class Audios extends React.Component {
    componentWillMount() {
        this.props.audiosFetch();
    }
    render() {
        const audioHeader = <AudiosHeader />;

        if (this.props.audios.isLoading) {
            return (
                <div>
                    {audioHeader}
                    <div className="message">Идет поиск</div>
                </div>
            )
        } else if (this.props.audios.audios.length === 0) {
            return (
                <div>
                    {audioHeader}
                    <div className="message">Ничего не найдено</div>
                </div>
            )
        }

        return (
            <div>
                {audioHeader}
                <div>
                    <AudiosTable />
                    <AudiosFooter />
                </div>
            </div>
        )
    }
};

export default connect(
    ({audios}) => ({audios}),
    dispatch => ({
        audiosFetch: () => {
            dispatch(audiosFetch());
        }
    })
)(Audios);