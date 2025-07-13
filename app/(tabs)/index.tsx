import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ActivityRings } from '@/components/ActivityRings';
import { StatsCard } from '@/components/StatsCard';
import { WorkoutCard } from '@/components/WorkoutCard';
import { TrendingUp, Footprints, Flame, Heart } from 'lucide-react-native';

export default function ActivityScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.dateText}>Today, January 15</Text>
          <Text style={styles.title}>Your Activity</Text>
        </View>

        {/* Activity Rings */}
        <View style={styles.ringsContainer}>
          <ActivityRings 
            moveProgress={75}
            exerciseProgress={60}
            standProgress={90}
          />
        </View>

        {/* Quick Stats */}
        <View style={styles.statsGrid}>
          <StatsCard
            icon={<Footprints size={24} color="#007AFF" />}
            value="8,234"
            label="Steps"
            change="+12%"
            color="#007AFF"
          />
          <StatsCard
            icon={<Flame size={24} color="#FF3B30" />}
            value="420"
            label="Calories"
            change="+8%"
            color="#FF3B30"
          />
          <StatsCard
            icon={<Heart size={24} color="#FF2D92" />}
            value="72"
            label="Avg BPM"
            change="-2%"
            color="#FF2D92"
          />
          <StatsCard
            icon={<TrendingUp size={24} color="#34C759" />}
            value="6.2"
            label="Distance"
            change="+15%"
            color="#34C759"
          />
        </View>

        {/* Recent Workouts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Workouts</Text>
          <WorkoutCard
            type="Running"
            duration="45 min"
            calories="380"
            date="Today, 7:30 AM"
            color="#34C759"
          />
          <WorkoutCard
            type="Strength Training"
            duration="60 min"
            calories="290"
            date="Yesterday, 6:00 PM"
            color="#FF9500"
          />
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Start</Text>
          <View style={styles.quickActions}>
            <Pressable style={[styles.actionButton, { backgroundColor: '#34C759' }]}>
              <Text style={styles.actionText}>Start Workout</Text>
            </Pressable>
            <Pressable style={[styles.actionButton, { backgroundColor: '#007AFF' }]}>
              <Text style={styles.actionText}>Log Activity</Text>
            </Pressable>
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
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  dateText: {
    fontSize: 16,
    color: '#8E8E93',
    fontWeight: '500',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 4,
  },
  ringsContainer: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
  },
  section: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  quickActions: {
    flexDirection: 'row',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  actionText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});