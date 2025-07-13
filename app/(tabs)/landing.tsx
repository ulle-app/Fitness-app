import { View, Text, StyleSheet, ScrollView, Pressable, ImageBackground, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Play, Smartphone, Download } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming,
  interpolate,
  Easing
} from 'react-native-reanimated';
import { useEffect } from 'react';

const { width, height } = Dimensions.get('window');

export default function LandingScreen() {
  const pulse1 = useSharedValue(0);
  const pulse2 = useSharedValue(0);
  const pulse3 = useSharedValue(0);
  const bounce = useSharedValue(0);

  useEffect(() => {
    pulse1.value = withRepeat(
      withTiming(1, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
      -1,
      true
    );
    pulse2.value = withRepeat(
      withTiming(1, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
      -1,
      true
    );
    pulse3.value = withRepeat(
      withTiming(1, { duration: 2000, easing: Easing.inOut(Easing.ease) }),
      -1,
      true
    );
    bounce.value = withRepeat(
      withTiming(1, { duration: 1500, easing: Easing.inOut(Easing.ease) }),
      -1,
      true
    );
  }, []);

  const pulse1Style = useAnimatedStyle(() => ({
    opacity: interpolate(pulse1.value, [0, 1], [0.2, 0.6]),
    transform: [{ scale: interpolate(pulse1.value, [0, 1], [0.8, 1.2]) }],
  }));

  const pulse2Style = useAnimatedStyle(() => ({
    opacity: interpolate(pulse2.value, [0, 1], [0.2, 0.6]),
    transform: [{ scale: interpolate(pulse2.value, [0, 1], [0.8, 1.2]) }],
  }));

  const pulse3Style = useAnimatedStyle(() => ({
    opacity: interpolate(pulse3.value, [0, 1], [0.2, 0.6]),
    transform: [{ scale: interpolate(pulse3.value, [0, 1], [0.8, 1.2]) }],
  }));

  const bounceStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: interpolate(bounce.value, [0, 1], [0, -10]) }],
  }));

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <ImageBackground
            source={{ uri: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop' }}
            style={styles.backgroundImage}
            resizeMode="cover"
          >
            {/* Gradient Overlay */}
            <LinearGradient
              colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.7)']}
              style={styles.gradientOverlay}
            />

            {/* Floating Elements */}
            <Animated.View style={[styles.floatingElement1, pulse1Style]} />
            <Animated.View style={[styles.floatingElement2, pulse2Style]} />
            <Animated.View style={[styles.floatingElement3, pulse3Style]} />

            {/* Content */}
            <View style={styles.content}>
              <Text style={styles.title}>
                Start Your{'\n'}
                <Text style={styles.gradientText}>Fitness Journey</Text>
              </Text>

              <Text style={styles.subtitle}>
                Join Heal Fitness Zone and transform your health with expert guidance, 
                personalized plans, and a supportive community.
              </Text>

              {/* Action Buttons */}
              <View style={styles.buttonContainer}>
                <Pressable style={styles.primaryButton}>
                  <Play size={20} color="#FFFFFF" />
                  <Text style={styles.primaryButtonText}>Start Free Trial</Text>
                </Pressable>

                <Pressable style={styles.secondaryButton}>
                  <Play size={20} color="#FFFFFF" />
                  <Text style={styles.secondaryButtonText}>Watch Demo</Text>
                </Pressable>
              </View>

              {/* App Download Section */}
              <View style={styles.downloadSection}>
                <Text style={styles.downloadTitle}>
                  DOWNLOAD THE HEAL FITNESS ZONE APP
                </Text>

                <View style={styles.downloadButtons}>
                  <Pressable style={styles.downloadButton}>
                    <View style={styles.androidIcon}>
                      <Play size={12} color="#FFFFFF" />
                    </View>
                    <Text style={styles.downloadButtonText}>Android</Text>
                  </Pressable>

                  <Pressable style={styles.downloadButton}>
                    <Download size={24} color="#FFFFFF" />
                    <Text style={styles.downloadButtonText}>iOS</Text>
                  </Pressable>
                </View>
              </View>
            </View>

            {/* Scroll Indicator */}
            <View style={styles.scrollIndicator}>
              <View style={styles.scrollIndicatorContainer}>
                <Animated.View style={[styles.scrollIndicatorDot, bounceStyle]} />
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Additional Content Sections */}
        <View style={styles.featuresSection}>
          <Text style={styles.featuresSectionTitle}>Why Choose Heal Fitness Zone?</Text>
          
          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>🏋️‍♂️ Expert Trainers</Text>
            <Text style={styles.featureDescription}>
              Work with certified fitness professionals who understand your goals
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>📱 Smart Tracking</Text>
            <Text style={styles.featureDescription}>
              Monitor your progress with advanced analytics and insights
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureTitle}>👥 Community Support</Text>
            <Text style={styles.featureDescription}>
              Join a motivating community of fitness enthusiasts
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollView: {
    flex: 1,
  },
  heroSection: {
    height: height,
    position: 'relative',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  floatingElement1: {
    position: 'absolute',
    top: 80,
    left: 40,
    width: 128,
    height: 128,
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    borderRadius: 64,
    zIndex: 2,
  },
  floatingElement2: {
    position: 'absolute',
    bottom: 80,
    right: 40,
    width: 160,
    height: 160,
    backgroundColor: 'rgba(59, 130, 246, 0.2)',
    borderRadius: 80,
    zIndex: 2,
  },
  floatingElement3: {
    position: 'absolute',
    top: height * 0.33,
    right: width * 0.25,
    width: 96,
    height: 96,
    backgroundColor: 'rgba(249, 115, 22, 0.2)',
    borderRadius: 48,
    zIndex: 2,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    zIndex: 3,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 56,
  },
  gradientText: {
    color: '#10B981',
  },
  subtitle: {
    fontSize: 18,
    color: '#D1D5DB',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 28,
    maxWidth: 320,
  },
  buttonContainer: {
    gap: 16,
    marginBottom: 48,
    alignItems: 'center',
  },
  primaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: '#059669',
    borderRadius: 16,
    gap: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  secondaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  downloadSection: {
    alignItems: 'center',
    gap: 16,
  },
  downloadTitle: {
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '600',
    letterSpacing: 1.5,
    textAlign: 'center',
  },
  downloadButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    gap: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  downloadButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  androidIcon: {
    width: 24,
    height: 24,
    backgroundColor: 'linear-gradient(45deg, #10B981, #3B82F6)',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: 32,
    left: '50%',
    marginLeft: -12,
    zIndex: 3,
  },
  scrollIndicatorContainer: {
    width: 24,
    height: 40,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,
    alignItems: 'center',
    paddingTop: 8,
  },
  scrollIndicatorDot: {
    width: 4,
    height: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 2,
  },
  featuresSection: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  featuresSectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 32,
  },
  featureCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 8,
  },
  featureDescription: {
    fontSize: 16,
    color: '#6B7280',
    lineHeight: 24,
  },
});