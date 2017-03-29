import React from 'react';
import { connect } from 'react-redux';

import AppLogonBox from './common/AppLogonBox';
import AppMenu from './common/menu/AppMenu';

import { citiesFetch } from '../actions/cities';

class App extends React.Component {
    componentWillMount() {
        if (!this.props.children) {
            this.props.router.push('/audios');
        }
    }
    render() {
        if (!this.props.children) {
            return null;
        } else if (!this.props.cities.citiesLoaded) {
            this.props.citiesFetch();
            return null;
        } else if (this.props.app.userNeedToLogon) {
            return <AppLogonBox />;
        }

        return (
            <div key={this.props.cities.selectedCityId}>
                <AppMenu />
                {this.props.children}
            </div>
        );
    }
};

export default connect(
    ({app, cities}) => ({app, cities}),
    dispatch => ({
        citiesFetch: () => {
            dispatch(citiesFetch());
        }
    })
)(App);