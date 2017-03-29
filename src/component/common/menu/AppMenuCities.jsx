import React from 'react';
import { connect } from 'react-redux';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const citiesSelectorStyle = {
    width: 160, 
    paddingLeft: 16
};

const AppMenuCities = ({cities, selectedCityChange}) => {
    return (
        <SelectField
            floatingLabelText="Город"
            value={cities.selectedCityId}
            onChange={selectedCityChange}
            style={citiesSelectorStyle}
        >
            {
                cities.cities.map((city, i) => {
                    let label = city.label;

                    if (label.length > 18) {
                        label = `${label.substr(0, 15)}...`;
                    }

                    return <MenuItem value={city.id} key={i} primaryText={label} />
                })
            }
        </SelectField>
    )
};

export default connect(
    ({cities}) => ({cities}),
    dispatch => ({
        selectedCityChange: (event, index, selectedCityId) => {
            dispatch({type: 'SELECTED_CITY_CHANGE', selectedCityId});
        }
    })
)(AppMenuCities);