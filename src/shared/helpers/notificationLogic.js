/** @format */

import {
  newNotificationActive,
  newNotificationText,
} from "../store/notificationReducer";

export function showNotification(text, dispatch) {
  dispatch(newNotificationActive(true));
  dispatch(newNotificationText(text));

  setTimeout(() => {
    dispatch(newNotificationActive(false));
  }, 3000);
}
