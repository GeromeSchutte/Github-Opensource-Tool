// @flow

import React from 'react';
import '../../../Page.scss';

const State = () => {
    const [ numberOfTimesClicked, setNumberOfTimesClicked ] = React.useState(0);

    const increaseNumberOfTimesClicked = () => {
        setNumberOfTimesClicked(numberOfTimesClicked + 1);
    }

    return <section className="page">
        <h1>State<br/>example<br/></h1>
        <p>The button has been clicked {numberOfTimesClicked} times</p>
        <button onClick={increaseNumberOfTimesClicked}>Click here to see the number go up!</button>
    </section>;
};

export default State;