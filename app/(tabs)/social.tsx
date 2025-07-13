import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FriendActivity } from '@/components/FriendActivity';
import { Challenge } from '@/components/Challenge';
import { Trophy, Users, Plus } from 'lucide-react-native';

export default function SocialScreen() {
  const friendActivities = [
    {
      name: 'Sarah Johnson',
      activity: 'Completed a 5K run',
      time: '2 hours ago',
      avatar: '👩‍🦰',
      achievement: 'Personal best!',
    },
    {
      name: 'Mike Chen',
      activity: 'Finished strength training',
      time: '4 hours ago',
      avatar: '👨‍🦱',
      achievement: 'Weekly goal reached',
    },
    {
      name: 'Emma Davis',
      activity: 'Completed yoga session',
      time: '6 hours ago',
      avatar: '👩‍🦳',
      achievement: '7-day streak',
    },
  ];

  const challenges = [
    {
      title: 'January Step Challenge',
      description: '10,000 steps daily for 31 days',
      participants: 24,
      progress: 65,
      daysLeft: 16,
      reward: '🏆 Winner Badge',
    },
    {
      title: 'Workout Warriors',
      description: '5 workouts per week',
      participants: 12,
      progress: 80,
      daysLeft: 3,
      reward: '💪 Champion Title',
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Social</Text>
          <Pressable style={styles.addButton}>
            <Plus size={24} color="#007AFF" />
          </Pressable>
        </View>

        {/* Stats Overview */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Users size={32} color="#007AFF" />
            <Text style={styles.statValue}>24</Text>
            <Text style={styles.statLabel}>Friends</Text>
          </View>
          <View style={styles.statCard}>
            <Trophy size={32} color="#FF9500" />
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Challenges</Text>
          </View>
        </View>

        {/* Active Challenges */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Active Challenges</Text>
          {challenges.map((challenge, index) => (
            <Challenge key={index} {...challenge} />
          ))}
        </View>

        {/* Friend Activity */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Friend Activity</Text>
          {friendActivities.map((activity, index) => (
            <FriendActivity key={index} {...activity} />
          ))}
        </View>

        {/* Leaderboard */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Weekly Leaderboard</Text>
          <View style={styles.leaderboard}>
            <View style={styles.leaderboardItem}>
              <View style={styles.rank}>
                <Text style={styles.rankText}>1</Text>
              </View>
              <Text style={styles.leaderName}>You</Text>
              <Text style={styles.leaderScore}>2,340 pts</Text>
            </View>
            <View style={styles.leaderboardItem}>
              <View style={styles.rank}>
                <Text style={styles.rankText}>2</Text>
              </View>
              <Text style={styles.leaderName}>Sarah Johnson</Text>
              <Text style={styles.leaderScore}>2,210 pts</Text>
            </View>
            <View style={styles.leaderboardItem}>
              <View style={styles.rank}>
                <Text style={styles.rankText}>3</Text>
              </View>
              <Text style={styles.leaderName}>Mike Chen</Text>
              <Text style={styles.leaderScore}>1,980 pts</Text>
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
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 4,
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
  leaderboard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  leaderboardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  rank: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  rankText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  leaderName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  leaderScore: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
});