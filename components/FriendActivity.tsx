import { View, Text, StyleSheet, Pressable } from 'react-native';

interface FriendActivityProps {
  name: string;
  activity: string;
  time: string;
  avatar: string;
  achievement: string;
}

export function FriendActivity({ name, activity, time, avatar, achievement }: FriendActivityProps) {
  return (
    <Pressable style={styles.card}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{avatar}</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.activity}>{activity}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
      <View style={styles.achievement}>
        <Text style={styles.achievementText}>{achievement}</Text>
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
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#F2F2F7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 20,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 2,
  },
  activity: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 2,
  },
  time: {
    fontSize: 12,
    color: '#8E8E93',
  },
  achievement: {
    backgroundColor: '#34C759',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  achievementText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});