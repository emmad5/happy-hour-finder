import { connect } from 'react-redux';
import AddHappyHour from './add_happy_hour';
import { addBusiness } from '../../actions/business_actions';


const mstp = state => {
    return {  
    }
};
const mdtp = dispatch => {
    return {
        addBusiness: () => dispatch(addBusiness()),
    };
};


export default connect(
    mstp,
    mdtp
)(AddHappyHour);