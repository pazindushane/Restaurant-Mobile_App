import { SAVE_USER } from "../Actions/Usertypes";
import { NavigationActions } from 'react-navigation';
import { NavigateScreen } from '../../Screens/Navigation/NavigateScreen'

const firstAction = AppNavigator.router.getActionForPathAndParams('StartScreen');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

const initialState = {
		users: []
}

export default function(state = initialState, action) {
			switch(action.type){
					case SAVE_USER:
									return {
											...state,
											users: [...state.users, action.payload]
										}
					default:
								return state;
			}
}
