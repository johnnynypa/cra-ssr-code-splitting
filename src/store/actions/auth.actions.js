import { AUTH_IN, AUTH_OUT } from './type.actions';

const getAction = (type, payload = null) => {
  return {
    type: type,
    payload: payload
  }
};


export const SignInAction = (user) => getAction(AUTH_IN, user);

export const LooutAction = () => getAction(AUTH_OUT);