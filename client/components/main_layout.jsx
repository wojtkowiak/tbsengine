import React from 'react';

import { Provider } from 'react-redux-meteor'
import { combineReducers, createStore } from 'redux';

// FIXME quick redux usage only for test
const store = createStore(combineReducers({ visibilityFilter: 'ALL' }));

const Layout = ({ content = () => null }) => {
    let contentStyle = {
        width: '100%',
        height: '100%',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        position: 'absolute'
    };

    return (
        <Provider store={store}>
            <div style={contentStyle}>
                {content()}
            </div>
        </Provider>
    );
};

Layout.propTypes = {
    content: React.PropTypes.func.isRequired
};

export default Layout;