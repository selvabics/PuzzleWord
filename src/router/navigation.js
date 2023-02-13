import {createNavigationContainerRef} from '@react-navigation/native';
import {StackActions} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef(); // Navigation ref

/**
 * This method is used to navigate to specific screen
 * @param {String} name 
 * @param {Object} params 
 */
export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

/**
 * This method is used to replace a specific screen with new screen
 * @param {String} name 
 * @param {Object} params 
 */
export function replace(name, params = {}) {
  params.options = {
    animationEnabled: false,
  };
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name, params));
  }
}

/**
 * This method is used to navigate to previous screen
 * @param {Number} count 
 */
export function pop(count = 1) {
  if (navigationRef.isReady()) {
    const nav = StackActions.pop(count);
    navigationRef.dispatch(nav);
  }
}

/**
 * This method is used to pop back to back screens
 */
export function popToTop() {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.popToTop());
  }
}
