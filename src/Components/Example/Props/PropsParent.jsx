// @flow

import React from 'react';
import PropsChild from './PropsChild';

const PropsParent = () => {
    return <section>
        <PropsChild colorPosition={1} colors={['red', 'green', 'yellow']}></PropsChild>
    </section>;
};

export default PropsParent;