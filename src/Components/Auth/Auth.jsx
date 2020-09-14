// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../Page.scss';

const Auth = (props: {
    history: any[]
}) => {
    const login = () => {
        props.history.push('/home');
    };

    return <section className="page">
        <h1>Auth<br/>page</h1>
        <p>This is the page we'll show users when they haven't logged in!</p>
        <div>
            <button onClick={login}>Login with Github</button>
            <p>(don't worry, we'll implement this later)</p>
        </div>
    </section>;
};

export default withRouter(Auth);