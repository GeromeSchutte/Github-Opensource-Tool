// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../Page.scss';

const Home = (props: { history: any[] }) => {
    const logout = () => {
        props.history.push('/auth');
    };

    return <section className="page">
        <h1>Home<br/>page</h1>
        <p>This is the page we'll show users when they have already logged in!</p>
        <div>
            <button onClick={logout}>Logout</button>
            <p>(don't worry, we'll implement this later)</p>
        </div>
    </section>;
};

export default withRouter(Home);