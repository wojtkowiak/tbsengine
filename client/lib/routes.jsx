import React from 'react';
import { mount } from 'react-mounter';

import '@blueprintjs/core/dist/blueprint.css';

import LoginPanel from './../components/login_panel';
import MainLayout from './../components/main_layout';

FlowRouter.route('/', {
    name: 'home',
    action() {
        mount(MainLayout, {
            content: () => (<LoginPanel />)
        });
    }
});