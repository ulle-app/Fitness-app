import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { WorkoutTypeCard } from '@/components/WorkoutTypeCard';
import { RecentWorkout } from '@/components/RecentWorkout';
import { Play, Plus } from 'lucide-react-native';

export default function WorkoutsScreen() {
  const workoutTypes = [
    { name: 'Running', icon: '🏃‍♂️', color: '#34C759', count: 12 },
    { name: 'Cycling', icon: '🚴‍♂️', color: '#007AFF', count: 8 },
    { name: 'Strength', icon: '💪', color: '#FF9500', count: 15 },
    { name: 'Yoga', icon: '🧘‍♀️', color: '#AF52DE', count: 6 },
    { name: 'Swimming', icon: '🏊‍♂️', color: '#5AC8FA', count: 4 },
    { name: 'HIIT', icon: '⚡', color: '#FF3B30', count: 10 },
  ];

  const recentWorkouts = [
    {
      type: 'Running',
      duration: '45:32',
      distance: '5.2 km',
      calories: 380,
      date: 'Today, 7:30 AM',
      pace: '8:45/km',
    },
    {
      type: 'Strength Training',
      duration: '60:00',
      distance: null,
      calories: 290,
      date: 'Yesterday, 6:00 PM',
      exercises: 12,
    },
    {
      type: 'Yoga',
      duration: '30:00',
      distance: null,
      calories: 120,
      date: 'Jan 13, 8:00 AM',
      poses: 15,
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Workouts</Text>
          <Pressable style={styles.addButton}>
            <Plus size={24} color="#007AFF" />
          </Pressable>
        </View>

        {/* Start Workout Button */}
        <View style={styles.startWorkoutContainer}>
          <Pressable style={styles.startWorkoutButton}>
            <Play size={24} color="#FFFFFF" />
            <Text style={styles.startWorkoutText}>Start New Workout</Text>
          </Pressable>
        </View>

        {/* Workout Types */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Workout Types</Text>
          <View style={styles.workoutGrid}>
            {workoutTypes.map((workout, index) => (
              <WorkoutTypeCard
                key={index}
                name={workout.name}
                icon={workout.icon}
                color={workout.color}
                count={workout.count}
              />
            ))}
          </View>
        </View>

        {/* Recent Workouts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Workouts</Text>
          {recentWorkouts.map((workout, index) => (
            <RecentWorkout
              key={index}
              {...workout}
            />
          ))}
        </View>

        {/* Weekly Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>This Week</Text>
          <View style={styles.summaryCard}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Total Workouts</Text>
              <Text style={styles.summaryValue}>8</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Total Time</Text>
              <Text style={styles.summaryValue}>6h 45m</Text>
            </View>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryLabel}>Calories Burned</Text>
              <Text style={styles.summaryValue}>2,340</Text>
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
  addButton: {
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
  startWorkoutContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  startWorkoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#34C759',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  startWorkoutText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 16,
  },
  workoutGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  summaryLabel: {
    fontSize: 16,
    color: '#8E8E93',
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
});