import { View, Text, StyleSheet, Pressable } from 'react-native';

interface WorkoutCardProps {
  type: string;
  duration: string;
  calories: string;
  date: string;
  color: string;
}

export function WorkoutCard({ type, duration, calories, date, color }: WorkoutCardProps) {
  return (
    <Pressable style={styles.card}>
      <View style={[styles.typeIndicator, { backgroundColor: color }]} />
      <View style={styles.content}>
        <Text style={styles.type}>{type}</Text>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.stats}>
          <Text style={styles.stat}>{duration}</Text>
          <Text style={styles.separator}>•</Text>
          <Text style={styles.stat}>{calories} cal</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
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
  typeIndicator: {
    width: 4,
    borderRadius: 2,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  type: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 8,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stat: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
  separator: {
    marginHorizontal: 8,
    color: '#8E8E93',
  },
});