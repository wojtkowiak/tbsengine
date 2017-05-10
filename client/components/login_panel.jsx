import React from 'react';

import { Button } from "@blueprintjs/core";

const LoginPanel = () => {
    return (
        <div name="page">
            <div className={'pt-card pt-elevation-4 .modifier'} name="panel">
                <div className={'pt-input-group .modifier'}>
                    <span className={'pt-icon pt-icon-user'} />
                    <input className={'pt-input'} type="text" placeholder="Login" dir="auto" />
                </div>
                <div className={'pt-input-group .modifier'}>
                    <span className={'pt-icon pt-icon-lock'} />
                    <input className={'pt-input'} type="password" placeholder="Password" dir="auto" />
                </div>
                <Button className={'pt-fill'} iconName="login" text="Login" />
                <div name="" />
                <div className="pt-button-group .modifier">
                    <a className={'pt-button pt-icon-chart'} name="login-as-github" role="button" />
                    <a className={'pt-button pt-icon-control'} name="login-as-google" role="button" />
                    <a className={'pt-button pt-icon-graph'} name="login-as-facebook" role="button" />
                    <a className={'pt-button pt-icon-camera'} name="login-as-steam" role="button" />
                </div>
            </div>
            <div name="logo" />
        </div>
    );
};

export default LoginPanel;