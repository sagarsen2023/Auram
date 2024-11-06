import React, { useEffect } from "react";
import { Animated, StyleSheet, ViewStyle } from "react-native";

interface ShimmerEffectProps {
  style?: ViewStyle;
}

export const useShimmerAnimation = () => {
  const shimmerAnimation = new Animated.Value(0);

  useEffect(() => {
    const startShimmerAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(shimmerAnimation, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(shimmerAnimation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    startShimmerAnimation();
    return () => {
      shimmerAnimation.stopAnimation();
    };
  }, []);

  const translateX = shimmerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 200],
  });

  return translateX;
};

export const ShimmerEffect = ({ style }: ShimmerEffectProps) => {
  const translateX = useShimmerAnimation();

  return (
    <Animated.View
      style={[
        styles.shimmer,
        {
          transform: [{ translateX }],
        },
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  shimmer: {
    width: 200,
    height: "100%",
    backgroundColor: "#FFFFFF",
    opacity: 0.5,
    transform: [{ skewX: "-20deg" }],
  },
});
