import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import QuestionDetail from '../components/QuestionView/QuestionDetail';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return dispatch;
};

export default connect(mapStateToProps, null)(QuestionDetail);
