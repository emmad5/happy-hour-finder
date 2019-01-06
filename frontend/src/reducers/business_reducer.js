import { RECEIVE_ALL_BUSINESSES } from '../actions/business_actions';

export default function (prevState = {}, action) {
    switch (action.type) {
        case RECEIVE_ALL_BUSINESSES:
            return action.businesses;
        default:
            return prevState;
    }
}