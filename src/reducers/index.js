const initialState = {
    year: '2017',
};

export default function userstate(state = initialState, action) {
    switch (action.type) {
        case 'SET_YEAR':
            return {...state, year: action.payload};

        default:
            return state;
    }
}
