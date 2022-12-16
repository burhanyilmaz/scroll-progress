import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { ReText } from 'react-native-redash';
import { COLORS } from 'theme/colors';
import { MENU_ITEM_SIZE, MENU_PADDING, PROGRESS_CONTAINER_WIDTH } from 'utils/constants';

type ProgressBarProps = {
  progress: SharedValue<number>;
};

const ProgressBar: FC<ProgressBarProps> = ({ progress }) => {
  const progressBarAnimatedStyle = useAnimatedStyle(() => ({
    width: `${interpolate(progress.value, [0, 100], [1, 100])}%`,
  }));

  const progressBarContainerAnimatedStyle = useAnimatedStyle(() => {
    const hideProgressBarContainer = progress.value >= 100 || progress.value === 0;

    return {
      width: withTiming(hideProgressBarContainer ? 0 : PROGRESS_CONTAINER_WIDTH),
      height: withTiming(hideProgressBarContainer ? 0 : MENU_ITEM_SIZE),
      opacity: withTiming(hideProgressBarContainer ? 0 : 1),
    };
  });

  const progressText = useDerivedValue(() => `${progress.value}%`);

  return (
    <Animated.View style={[styles.progressContainer, progressBarContainerAnimatedStyle]}>
      <ReText text={progressText} style={styles.progressBarText} />
      <View style={styles.progressBarArea}>
        <Animated.View style={styles.progressBarContainer}>
          <Animated.View style={[styles.progressBar, progressBarAnimatedStyle]} />
        </Animated.View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  progressBarArea: {
    flex: 1,
  },
  progressContainer: {
    width: 200,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: MENU_PADDING,
  },
  progressBarContainer: {
    height: 10,
    marginLeft: 8,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: COLORS.raisinBlackTwo,
  },
  progressBar: {
    height: 10,
    backgroundColor: COLORS.spanishGray,
  },
  progressBarText: {
    color: COLORS.titanium,
    fontVariant: ['tabular-nums'],
  },
});

export default ProgressBar;
