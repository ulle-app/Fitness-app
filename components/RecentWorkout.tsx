import { View, Text, StyleSheet, Pressable } from 'react-native';

interface RecentWorkoutProps {
  type: string;
  duration: string;
  distance?: string | null;
  calories: number;
  date: string;
  pace?: string;
  exercises?: number;
  poses?: number;
}

export function RecentWorkout({ 
  type, 
  duration, 
  distance, 
  calories, 
  date, 
  pace, 
  exercises, 
  poses 
}: RecentWorkoutProps) {
  const getWorkoutIcon = (type: string) => {
    switch (type) {
      case 'Running': return '🏃‍♂️';
      case 'Strength Training': return '💪';
      case 'Yoga': return '🧘‍♀️';
      case 'Cycling': return '🚴‍♂️';
      case 'Swimming': return '🏊‍♂️';
      default: return '⚡';
    }
  };

  return (
    <Pressable style={styles.card}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.icon}>{getWorkoutIcon(type)}</Text>
          <View>
            <Text style={styles.type}>{type}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{duration}</Text>
          <Text style={styles.statLabel}>Duration</Text>
        </View>
        
        {distance && (
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{distance}</Text>
            <Text style={styles.statLabel}>Distance</Text>
          </View>
        )}
        
        <View style={styles.statItem}>
          <Text style={styles.statValue}>{calories}</Text>
          <Text style={styles.statLabel}>Calories</Text>
        </View>
        
        {pace && (
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{pace}</Text>
            <Text style={styles.statLabel}>Pace</Text>
          </View>
        )}
        
        {exercises && (
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{exercises}</Text>
            <Text style={styles.statLabel}>Exercises</Text>
          </View>
        )}
        
        {poses && (
          <View style={styles.statItem}>
            <Text style={styles.statValue}>{poses}</Text>
            <Text style={styles.statLabel}>Poses</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  icon: {
    fontSize: 24,
  },
  type: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  date: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 2,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  statLabel: {
    fontSize: 12,
    color: '#8E8E93',
    marginTop: 4,
  },
});