import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../actions/actions';
import Dashboard from '../components/MainView/Dashboard';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);