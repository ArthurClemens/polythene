
export default (opts) => {
    const elProp = opts.element || 'el';
    const invalidProp = opts.invalid || 'invalid';

    const fieldStates = [];

    const submit = (e, onValidated) => {
        e.preventDefault();
        const firstInvalidIndex = getInvalidIndex();
        if (firstInvalidIndex !== undefined) {
            if (fieldStates[firstInvalidIndex][elProp]) {
                fieldStates[firstInvalidIndex][elProp].focus();
            }
        } else {
            onValidated(e);
        }
    };

    const getIndex = (el) => {
        for (let i = 0; i < fieldStates.length; i++) {
            if (fieldStates[i][elProp] === el) {
                return i;
            }
        }
    };

    const getInvalidIndex = () => {
        for (let i = 0; i < fieldStates.length; i++) {
            if (fieldStates[i][invalidProp]) {
                return i;
            }
        }
    };

    const update = (state) => {
        const index = getIndex(state[elProp]);
        if (index === undefined) {
            fieldStates.push(state);
        } else {
            fieldStates[index] = state;
        }
    };

    return {
        submit,
        update
    };
};
