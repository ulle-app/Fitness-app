import { View, Text, StyleSheet, Pressable } from 'react-native';

interface ChallengeProps {
  title: string;
  description: string;
  participants: number;
  progress: number;
  daysLeft: number;
  reward: string;
}

export function Challenge({ title, description, participants, progress, daysLeft, reward }: ChallengeProps) {
  return (
    <Pressable style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.participants}>{participants} participants</Text>
      </View>
      
      <Text style={styles.description}>{description}</Text>
      
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
        <Text style={styles.progressText}>{progress}%</Text>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.daysLeft}>{daysLeft} days left</Text>
        <Text style={styles.reward}>{reward}</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    flex: 1,
  },
  participants: {
    fontSize: 12,
    color: '#8E8E93',
  },
  description: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 16,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#E5E5EA',
    borderRadius: 4,
    marginRight: 12,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  daysLeft: {
    fontSize: 14,
    color: '#8E8E93',
  },
  reward: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FF9500',
  },
});