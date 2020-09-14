// @flow

import React from 'react';

const PropsChild = (props: {
    colors: string[],
    colorPosition: number
}) => {
    const colors = props.colors;
    const currentColorPosition = props.colorPosition;

    return <section>
        The traffic robot is currently {colors[currentColorPosition]}
    </section>;
};

export default PropsChild;