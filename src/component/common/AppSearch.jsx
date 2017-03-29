import React from 'react';

import IconButton from 'material-ui/IconButton';
import Paper from 'material-ui/Paper';
import AutoComplete from 'material-ui/AutoComplete';

const paperStyle = {
    height: '46px', 
    padding: '0 20px', 
    position: 'relative'
};

const AppSearch = ({searchFetch}) => {
    let searchQuery = '';

    const handleNewRequest = () => {
        searchFetch(searchQuery);
    };

    return (
        <div className="appSearch">
            <Paper zDepth={1} style={paperStyle}>
                <AutoComplete
                    hintText="Поиск"
                    searchText={searchQuery}
                    onUpdateInput={value => {searchQuery = value}}
                    onNewRequest={handleNewRequest}
                    openOnFocus={true}
                    underlineShow={false}
                    dataSource={[]}
                />

                <IconButton onClick={handleNewRequest} className="searchButton">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path style={{fill: '#00bcd4'}} d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
                </IconButton>
            </Paper>
        </div>
    )
};

export default AppSearch;