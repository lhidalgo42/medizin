import React, { useRef } from 'react';
import { View, Dimensions } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';
import { PinchGestureHandler, PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';

interface ZoomableContainerProps {
  children: React.ReactNode;
  contentWidth: number;
  contentHeight: number;
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const ZoomableContainer: React.FC<ZoomableContainerProps> = ({ 
  children, 
  contentWidth, 
  contentHeight 
}) => {
  const pinchRef = useRef(null);
  const panRef = useRef(null);
  
  const scale = useSharedValue(1);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  
  const pinchHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      scale.value = Math.max(0.5, Math.min(event.scale, 3));
      focalX.value = event.focalX;
      focalY.value = event.focalY;
    },
    onEnd: () => {
      scale.value = withSpring(1);
    },
  });
  
  const panHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    },
    onEnd: () => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
        { translateX: focalX.value },
        { translateY: focalY.value },
        { scale: scale.value },
        { translateX: -focalX.value },
        { translateY: -focalY.value },
      ],
    };
  });
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PinchGestureHandler ref={pinchRef} onGestureEvent={pinchHandler} simultaneousHandlers={panRef}>
        <Animated.View>
          <PanGestureHandler ref={panRef} onGestureEvent={panHandler} simultaneousHandlers={pinchRef}>
            <Animated.View style={animatedStyle}>
              {children}
            </Animated.View>
          </PanGestureHandler>
        </Animated.View>
      </PinchGestureHandler>
    </GestureHandlerRootView>
  );
};