import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Achievement } from '@/components/Achievement';
import { Settings, CreditCard as Edit3, Share } from 'lucide-react-native';

export default function ProfileScreen() {
  const achievements = [
    { icon: '🏃', title: 'First 5K', description: 'Completed your first 5K run', earned: true },
    { icon: '💪', title: 'Strength Builder', description: '10 strength workouts completed', earned: true },
    { icon: '🔥', title: 'Streak Master', description: '7-day workout streak', earned: true },
    { icon: '🎯', title: 'Goal Crusher', description: 'Reached monthly fitness goal', earned: false },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <Pressable style={styles.settingsButton}>
            <Settings size={24} color="#007AFF" />
          </Pressable>
        </View>

        {/* Profile Info */}
        <View style={styles.profileSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>👤</Text>
          </View>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>john.doe@email.com</Text>
          <View style={styles.profileActions}>
            <Pressable style={styles.actionButton}>
              <Edit3 size={20} color="#007AFF" />
              <Text style={styles.actionText}>Edit Profile</Text>
            </Pressable>
            <Pressable style={styles.actionButton}>
              <Share size={20} color="#007AFF" />
              <Text style={styles.actionText}>Share</Text>
            </Pressable>
          </View>
        </View>

        {/* Stats Overview */}
        <View style={styles.statsSection}>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>156</Text>
            <Text style={styles.statLabel}>Workouts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>24.5</Text>
            <Text style={styles.statLabel}>Hours</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statValue}>12.3k</Text>
            <Text style={styles.statLabel}>Calories</Text>
          </View>
        </View>

        {/* Achievements */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Achievements</Text>
          <View style={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <Achievement key={index} {...achievement} />
            ))}
          </View>
        </View>

        {/* Health Data */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Health Data</Text>
          <View style={styles.healthCard}>
            <View style={styles.healthRow}>
              <Text style={styles.healthLabel}>Height</Text>
              <Text style={styles.healthValue}>5'10" (178 cm)</Text>
            </View>
            <View style={styles.healthRow}>
              <Text style={styles.healthLabel}>Weight</Text>
              <Text style={styles.healthValue}>165 lbs (75 kg)</Text>
            </View>
            <View style={styles.healthRow}>
              <Text style={styles.healthLabel}>Age</Text>
              <Text style={styles.healthValue}>28 years</Text>
            </View>
            <View style={styles.healthRow}>
              <Text style={styles.healthLabel}>BMI</Text>
              <Text style={styles.healthValue}>23.7 (Normal)</Text>
            </View>
          </View>
        </View>

        {/* Goals */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Current Goals</Text>
          <View style={styles.goalCard}>
            <View style={styles.goalItem}>
              <Text style={styles.goalTitle}>Daily Steps</Text>
              <Text style={styles.goalTarget}>10,000 steps</Text>
            </View>
            <View style={styles.goalItem}>
              <Text style={styles.goalTitle}>Weekly Workouts</Text>
              <Text style={styles.goalTarget}>5 workouts</Text>
            </View>
            <View style={styles.goalItem}>
              <Text style={styles.goalTitle}>Monthly Distance</Text>
              <Text style={styles.goalTarget}>100 km</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
  },
  settingsButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  profileSection: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E5E5EA',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 40,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  email: {
    fontSize: 16,
    color: '#8E8E93',
    marginBottom: 20,
  },
  profileActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    gap: 6,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  actionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#007AFF',
  },
  statsSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  statLabel: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 4,
  },
  section: {
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  healthCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  healthRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  healthLabel: {
    fontSize: 16,
    color: '#8E8E93',
  },
  healthValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  goalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  goalItem: {
    paddingVertical: 8,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  goalTarget: {
    fontSize: 14,
    color: '#007AFF',
    marginTop: 2,
  },
});