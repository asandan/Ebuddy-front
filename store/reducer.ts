import { combineReducers, AnyAction } from 'redux'

import { reducer as authReducer } from './stores/auth-store'
import { AppState } from '@/types';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const appReducer = combineReducers({
    auth: authReducer,
  })

  return (state: AppState | undefined, action: any) => {
    return appReducer(state, action);
  };
}