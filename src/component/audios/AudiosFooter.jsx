import React from 'react';
import { connect } from 'react-redux';

import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';

const exportCsv = (selectedCityId, searchQuery) => {
    console.log(`Export to csv doesn't implemented`);
    /*$(`<iframe src='/api/export?_cityId=${selectedCityId}&q=${searchQuery}' class="iframeExport"/>`).appendTo('body')*/
}

const AudiosFooter = ({cities, audios}) => {
    let buttonProps = {
        buttonStyle: {
            backgroundColor: '#aaaaaa'
        },
        disabled: true
    };

    if (audios.searchQuery) {
        buttonProps = {
            disabled: false
        };
    }

    return (
        <Toolbar className="footer">
            <ToolbarGroup className="footerLabel" firstChild={true}>
                <ToolbarTitle text={`Загружено ${audios.audios.length}/${audios.audiosCount}`} />
            </ToolbarGroup>

            <ToolbarGroup lastChild={true}>

                <RaisedButton 
                    {...buttonProps}
                    label="Экспорт в CSV" 
                    onClick={() => exportCsv(cities.selectedCityId, audios.searchQuery)} 
                    primary={true} 
                />
            </ToolbarGroup>
        </Toolbar>
    )
};

export default connect(
    ({cities, audios}) => ({cities, audios}),
    dispatch => ({

    })
)(AudiosFooter);