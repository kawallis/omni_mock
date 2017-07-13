import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from './actions';
import DateTimeBox from './DateTimeBox';

const mapStateToProps = (state) => state;

function mapDispatchtoProps (dispatch) {
  return bindActionCreators(actions, dispatch);
}

const DateTimeContainer = connect(mapStateToProps,mapDispatchtoProps)(DateTimeBox);

export default DateTimeContainer;