import { connect } from 'react-redux';
import Login from '../../components/authentication/login';
import { signin } from '../../actions/authentication';


function mapStateToProps(state) {
  return {
    state
  };
}

const mapDispatchToProps = dispatch =>
  (
    {
      signin: (credentials) => { dispatch(signin(credentials)); }
    }
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login);
