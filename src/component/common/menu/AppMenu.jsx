import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';

import AppMenuCities from './AppMenuCities';

const AppMenu = ({app, drawerClose, drawerOpen}) => {
    const drawerChange = (drawerStatus) => {
        if (drawerStatus) {
            drawerOpen();
        } else {
            drawerClose();
        }
    };

    return (
        <Drawer
            docked={false}
            open={app.drawerIsOpen}
            onRequestChange={drawerChange}
        >

            <AppMenuCities />

            <Divider />

            {app.menus.map((page, i) => <Link key={i} className="menuLink" to={page.urlPath}><MenuItem onTouchTap={drawerClose}>{page.label}</MenuItem></Link>)}
        </Drawer>
    );
};

export default connect(
    ({app}) => ({app}),
    dispatch => ({
        drawerClose: () => {
            dispatch({'type': 'DRAWER_CLOSE'});
        },
        drawerOpen: () => {
            dispatch({'type': 'DRAWER_OPEN'});
        }
    })
)(AppMenu);