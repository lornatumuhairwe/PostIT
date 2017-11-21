import { connect } from 'react-redux';
import Signup from '../../components/authentication/signup';
import { signup } from '../../actions/authentication';


function mapStateToProps(state) {
  return {
    state
  };
}

const mapDispatchToProps = dispatch =>
  (
    {
      signup: (credentials) => { dispatch(signup(credentials)); }
    }
  );

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
