// @flow
import React from 'react';
import '../../../Page.scss';
import './Hooks.scss';

const Hooks = () => {
    const [ numChanges, setNumChanges ] = React.useState(0);
    const inputRefs: {
        current: ?HTMLInputElement
    }[] = [ React.useRef(null), React.useRef(null) ];
    const [ activeRef, setActiveRef ] = React.useState(null);

    const increaseNumChanges = () => {
        setNumChanges(numChanges + 1);
    };

    React.useEffect(() => {
        if (activeRef !== null) {
            const inactiveRefs = inputRefs.filter(ref => ref !== activeRef);
            for (const ref of inactiveRefs) {
                const refInput = ref.current;
                if (refInput) {
                    refInput.value = activeRef?.current?.value ?? '';
                }
            }
        }
    }, [numChanges, activeRef, inputRefs]);

    return <section className="page">
        <h1>Hooks<br/>example</h1>
        <p>These inputs are synchronised! Continue typing in any one of them.</p>
        {
            inputRefs.map(ref => 
                <input ref={ref} onKeyDown={increaseNumChanges} onFocus={() => setActiveRef(ref)}/>)
        }
    </section>;
};

export default Hooks;