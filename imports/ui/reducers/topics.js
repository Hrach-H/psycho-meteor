export default function(state={}, action) {
    switch (action.type) {
        case 'TOPIC':
            return Object.assign({}, { topic: action.payload });
        default:
            return state;
    }
}