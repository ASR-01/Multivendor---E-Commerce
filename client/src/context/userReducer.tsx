export interface UserState {
    user: {
      id: string;
      name: string;
      email: string;
    } | null;
  }
  
  export type UserAction =
    | { type: 'LOGIN'; payload: { id: string; name: string; email: string } }
    | { type: 'LOGOUT' };
  
  export const initialUserState: UserState = {
    user: null,
  };
  
  export function userReducer(state: UserState, action: UserAction): UserState {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
        };
      default:
        return state;
    }
  }
  