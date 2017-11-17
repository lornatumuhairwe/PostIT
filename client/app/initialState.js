export default const state = {
    userAuth: { cookie: null, isAuthenticated: null},
    groups: [],
    activeGroup: {
        id: null,
        groupsName: null,
        messages: []
    }
};
