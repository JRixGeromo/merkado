import React, { useRef, useEffect } from 'react';
import { View, Text, ScrollView, Image, Dimensions } from 'react-native';
import { useAppSelector, useAppDispatch } from '../../../hooks/reduxHooks';
import { commonStyles } from '../../../styles/commonStyles';
import Carousel from 'react-native-snap-carousel';  // Import carousel

const { width: screenWidth } = Dimensions.get('window');

const DashboardScreen = () => {
  const theme = useAppSelector(state => state.theme.theme);
  const dispatch = useAppDispatch();
  const styles = commonStyles(theme);

  // Reference for the carousel
  const carouselRef = useRef<Carousel<any>>(null);

  // Promo images array
  const promoImages = [
    { imageUrl: 'https://athleticahq.com/images/icons/store.png' },
    { imageUrl: 'https://athleticahq.com/images/icons/store.png' },
    { imageUrl: 'https://athleticahq.com/images/icons/store.png' },
  ];

  // Render promo slider item
  const renderPromoItem = ({ item }: { item: { imageUrl: string } }) => (
    <View style={styles.slide}>
      <Image source={{ uri: item.imageUrl }} style={styles.promoImage} />
    </View>
  );

  // Ensure autoplay is started once the component is mounted
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.startAutoplay();  // Start autoplay manually
    }
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        
        {/* Promo Slider Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Mga Promo</Text>
          <Carousel
            ref={carouselRef}  // Attach the carousel reference
            data={promoImages}  // Use the typed promo images array
            renderItem={renderPromoItem}
            sliderWidth={screenWidth}
            itemWidth={screenWidth * 0.8}
            loop={true}
            autoplay={true}  // Enable autoplay
            autoplayInterval={3000}  // Set autoplay interval to 3 seconds
            autoplayDelay={500}  // Delay autoplay start for 0.5 seconds
            vertical={false}  // Horizontal carousel, explicitly set vertical to false
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
