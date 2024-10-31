import React, { useRef, useState } from "react";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PrevNextButton from "@/src/components/onboarding-components/prev-next-button.component";
import { router } from "expo-router";
import { useThemeColor } from "@/src/constants/theme";

export default function Onboarding() {
  const sliderData = [
    {
      id: 1,
      title: "Seamless Shopping Experience",
      description:
        "Shop with ease from browsing to checkout. Enjoy a smooth and efficient shopping journey.",
      imgSrc: require("@/src/assets/images/onboarding/onboarding-slider-image1.jpg"),
    },
    {
      id: 2,
      title: "Wishlist: Save Your Favorites",
      description:
        "Save your favorite items and shop whenever you want. Never miss out on products you love.",
      imgSrc: require("@/src/assets/images/onboarding/onboarding-slider-image2.jpg"),
    },
    {
      id: 3,
      title: "Swift and Reliable Delivery",
      description:
        "Get fast and dependable delivery, ensuring your products arrive on time and in perfect condition.",
      imgSrc: require("@/src/assets/images/onboarding/onboarding-slider-image3.jpg"),
    },
  ];
  const COLORS = useThemeColor();
  const width = Dimensions.get("window").width;

  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.secondary,
      justifyContent: "space-between",
    },
    slide: {
      width,
      justifyContent: "center",
      alignItems: "center",
    },
    imageContainer: {
      width: "100%",
      height: 650,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    textContainer: {
      padding: 25,
      position: "absolute",
      bottom: 0,
      width: "100%",
      backgroundColor: COLORS.secondary,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      minHeight: 200,
    },
    headingText: {
      fontSize: 40,
      fontWeight: "bold",
      textAlign: "center",
      color: COLORS.primary,
    },
    descriptionText: {
      marginTop: 10,
      fontSize: 20,
      textAlign: "center",
      lineHeight: 25,
      color: COLORS.text,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 30,
      paddingVertical: 40,
    },
  });

  const handleNext = () => {
    if (currentIndex < sliderData.length - 1) {
      const newIndex = currentIndex + 1;
      setIsAutoScrolling(true);
      flatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
      setCurrentIndex(newIndex);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setIsAutoScrolling(true);
      flatListRef.current?.scrollToIndex({ index: newIndex, animated: true });
      setCurrentIndex(newIndex);
    }
  };

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (!isAutoScrolling) {
      const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    }
  };

  const renderItem = ({
    item,
  }: {
    item: { id: number; title: string; description: string; imgSrc: any };
  }) => (
    <View style={styles.slide}>
      <Image
        style={styles.imageContainer}
        source={item.imgSrc}
        resizeMode="cover"
      />
      <View style={styles.textContainer}>
        <Text style={styles.headingText}>{item.title}</Text>
        <Text style={styles.descriptionText}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: "100%" }}>
          <Pressable
            style={{
              width,
              padding: 16,
              alignItems: "flex-end",
            }}
            onPress={() => {
              router.replace("/(auth)/auth-type-selector");
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: COLORS.text,
                fontWeight: "bold",
              }}
            >
              Skip
            </Text>
          </Pressable>
          <FlatList
            ref={flatListRef}
            style={{ width }}
            data={sliderData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            onScroll={onScroll}
            onMomentumScrollEnd={() => setIsAutoScrolling(false)}
          />
        </View>
        <View style={styles.buttonContainer}>
          {currentIndex > 0 ? (
            <PrevNextButton
              type="prev"
              onPress={handlePrev}
              currentIndex={currentIndex}
            />
          ) : (
            <Pressable onPress={() => router.back()}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  paddingHorizontal: 20,
                  paddingVertical: 12,
                  borderWidth: 1,
                  borderColor: COLORS.primary,
                  borderRadius: 20,
                  color: COLORS.text,
                }}
              >
                Back
              </Text>
            </Pressable>
          )}
          <PrevNextButton
            type="next"
            onPress={handleNext}
            currentIndex={currentIndex}
            totalItemsCount={sliderData.length - 1}
            onEndReached={() => router.replace("/(auth)/auth-type-selector")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
