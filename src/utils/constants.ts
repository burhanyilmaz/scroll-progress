import { Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

export const MENU_HEIGHT = 80;
export const MENU_PADDING = 10;
export const MENU_LONG_WIDTH = width / 1.7;
export const MENU_WIDTH = (MENU_LONG_WIDTH * 2) / 3;
export const MENU_ITEM_SIZE = MENU_HEIGHT - 2 * MENU_PADDING;
export const ICON_SIZE = MENU_ITEM_SIZE / 3;
export const PROGRESS_CONTAINER_WIDTH = MENU_LONG_WIDTH - MENU_WIDTH + MENU_ITEM_SIZE;
export const CONTENT_BOTTOM_SPACE =
  Platform.select({
    android: 114,
    ios: 80,
  }) || 0;
export const ARROW_UP_HIT_SLOP = {
  bottom: ICON_SIZE,
  left: ICON_SIZE,
  right: ICON_SIZE,
  top: ICON_SIZE,
};
