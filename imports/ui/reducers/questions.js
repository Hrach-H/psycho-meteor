export default function(state={}, action) {
    switch (action.type) {
        case 'STORE_QUESTIONS':
            return Object.assign({}, action.payload.map(question => question));
        default:
            return state;
    }
}