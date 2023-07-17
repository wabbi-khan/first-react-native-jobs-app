import React, { useCallback, useEffect } from "react";
import { useFonts } from "expo-font";
import * as Font from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  useEffect(() => {
    const loadFonts = async () => {
      await SplashScreen.preventAutoHideAsync();
      await SplashScreen.hideAsync();

      await Font.loadAsync({
        DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
      });

      SplashScreen.hideAsync();
    };

    loadFonts();
  }, []);

  if (!fontLoaded) {
    return null; // Return a loading screen or placeholder while fonts are loading
  }

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;

// import { Stack } from "expo-router";
// import { useCallback } from "react";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// SplashScreen.preventAutoHideAsync();
// const Layout = () => {
//   const [fontLoaded] = useFonts({
//     DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
//     DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
//     DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
//   });
//   const onLayoutRootView = useCallback(async () => {
//     if (fontLoaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontLoaded]);
//   if (!fontLoaded) return null;
//   return <Stack onLayout={onLayoutRootView} />;
// };
// export default Layout;
