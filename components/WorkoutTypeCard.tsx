import { View, Text, StyleSheet, Pressable } from 'react-native';

interface WorkoutTypeCardProps {
  name: string;
  icon: string;
  color: string;
  count: number;
}

export function WorkoutTypeCard({ name, icon, color, count }: WorkoutTypeCardProps) {
  return (
    <Pressable style={[styles.card, { backgroundColor: color }]}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.count}>{count} workouts</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '47%',
    aspectRatio: 1,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  icon: {
    fontSize: 32,
    textAlign: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  count: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.8,
    textAlign: 'center',
  },
});