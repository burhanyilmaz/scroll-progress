import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  withTiming,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { COLORS } from 'theme/colors';
import DummyContent from './DumyContent';
import ProgressBar from './ProgressBar';
import {
  ICON_SIZE,
  MENU_WIDTH,
  MENU_HEIGHT,
  MENU_PADDING,
  MENU_ITEM_SIZE,
  CONTENT_BOTTOM_SPACE,
  ARROW_UP_HIT_SLOP,
} from 'utils/constants';

const ScrollProgressMenu = () => {
  const scrollY = useSharedValue(0);
  const progress = useSharedValue(0);
  const ref = useAnimatedRef<Animated.ScrollView>();

  const onScrollHandler = useAnimatedScrollHandler(
    ({ contentOffset, layoutMeasurement, contentSize }) => {
      const newProgress =
        (contentOffset.y / (contentSize.height - layoutMeasurement.height - CONTENT_BOTTOM_SPACE)) *
        100;
      const progressValue = Math[newProgress < 1 ? 'ceil' : 'floor'](newProgress);

      scrollY.value = contentOffset.y;
      progress.value = progressValue <= 0 ? 0 : progressValue >= 100 ? 100 : progressValue;
    },
  );

  const upArrowAnimatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(progress.value === 100 ? 1 : 0),
  }));

  const minuteAnimatedStyle = useAnimatedStyle(() => ({
    opacity: withTiming(progress.value === 0 ? 1 : 0),
  }));

  const scrollToTop = () => ref.current?.scrollTo({ y: 0, animated: true });

  return (
    <SafeAreaView>
      <Animated.ScrollView
        ref={ref}
        scrollEventThrottle={16}
        onScroll={onScrollHandler}
        contentContainerStyle={styles.contentContainer}>
        <DummyContent contentSize={40} />
      </Animated.ScrollView>
      <View style={styles.menuContainer}>
        <View style={[styles.menuItem]}>
          <Icon name="command" size={ICON_SIZE} color={COLORS.taupeGray} />
        </View>
        <View style={styles.space} />
        <View style={[styles.menuItem]}>
          <Animated.View style={[styles.absCenter, minuteAnimatedStyle]}>
            <Text style={styles.minuteText}>5 mins</Text>
          </Animated.View>
          <Animated.View style={[styles.absCenter, upArrowAnimatedStyle]}>
            <Pressable onPress={scrollToTop} hitSlop={ARROW_UP_HIT_SLOP}>
              <Icon name="arrow-up" size={ICON_SIZE} color={COLORS.taupeGray} />
            </Pressable>
          </Animated.View>
          <ProgressBar progress={progress} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    bottom: 40,
    overflow: 'hidden',
    borderRadius: 100,
    height: MENU_HEIGHT,
    minWidth: MENU_WIDTH,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.raisinBlackOne,
    paddingHorizontal: MENU_PADDING,
    alignSelf: 'center',
  },
  contentContainer: { paddingBottom: CONTENT_BOTTOM_SPACE },
  menuItem: {
    height: MENU_ITEM_SIZE,
    minWidth: MENU_ITEM_SIZE,
    borderRadius: MENU_ITEM_SIZE / 2,
    backgroundColor: COLORS.jet,
    alignItems: 'center',
    justifyContent: 'center',
  },
  absCenter: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    width: 12,
  },
  minuteText: {
    fontSize: 15,
    color: COLORS.titanium,
  },
});

export default ScrollProgressMenu;
