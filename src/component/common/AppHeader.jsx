import React from 'react';
import { connect } from 'react-redux';

import AppBar from 'material-ui/AppBar';

import AppSearch from './AppSearch';

const headerStyle = {
    order: 4, 
    flexGrow: 1
};

const hiddenButtonStyle = {
    order: 5, 
    width: '40px', 
    opacity: 0, 
    pointerEvents: 'none'
};

const AppHeader = ({page, searchFetch, drawerOpen}) => {
    return (
        <AppBar
            className="appHeader"
            title={page.label}
            iconStyleLeft={{order: 1}}
            onLeftIconButtonTouchTap={drawerOpen}
        >

            {page.supportSearch ? <AppSearch searchFetch={searchFetch} /> : null}

            <h1 style={headerStyle} />
            <button style={hiddenButtonStyle} />
        </AppBar>
    )
};

export default connect(
    state => ({}),
    dispatch => ({
        drawerOpen: () => {
            dispatch({'type': 'DRAWER_OPEN'});
        }
    })
)(AppHeader);