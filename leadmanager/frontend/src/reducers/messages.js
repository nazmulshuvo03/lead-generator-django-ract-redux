import { CREATE_MESSAGE } from "../actions/types";

const inititalState = {};

export default function(state = inititalState, action) {
    switch (action.type) {
        case CREATE_MESSAGE:
            return (state = action.payload);

        default:
            return state;
    }
}
