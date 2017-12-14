/*
  File should contain:
    - Import of the action types
    - Reducer function

    There are 4 possible scenarios that need to be addressed:

    1. The user is in the process of being authenticated. In that case, just return state.
    2. The user is authenticated successfully. If this happens, do the following:
      - Store the user object in localStorage
      - Return the state as an object containing: {authenticated: true}
    3. The user is unsuccessful due to either a bad email or password. If that happens, do the following:
      - Return the state as an object containing the authenticated key set to false and a message that the login is unsuccessful. You could use that message on the login page.
    4. It can't find the action type you're passing in, so it returns just state
*/
