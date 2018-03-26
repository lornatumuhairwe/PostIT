export default {
  loading: false,
  userAuth: { cookie: localStorage.getItem('token'), isAuthenticated: !!localStorage.getItem('token')},
  groups: [],
  activeGroup: {
    // id: null,
    // groupName: null,
    messages: []
  }
};
