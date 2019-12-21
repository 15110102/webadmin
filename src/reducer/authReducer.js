export const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {...state,
        username: action.user.username,
        password: action.user.password,
        id: action.user.id
      }

    case 'REMOVE_USER':
      return null

    default:
      return state
  }
}