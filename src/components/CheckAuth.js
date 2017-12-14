/*
  This file will contain a Higher Order Component (HOC) that basically check whether the person is logged in or not, using localStorage and the store state's auth key, which means we will have to use mapStateToProps.

  The HOC will contain 2 lifecycle methods: "componentWillMount" and "componentWillUpdate". Both of those methods will check if the user is currently authenticated or not. If the user is not authenticated, it will redirect them back to the login page.
*/
