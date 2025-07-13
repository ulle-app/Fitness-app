import { View, Text, StyleSheet, ReactNode } from 'react-native';

interface StatsCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  change: string;
  color: string;
}

export function StatsCard({ icon, value, label, change, color }: StatsCardProps) {
  const isPositive = change.startsWith('+');

  return (
    <View style={styles.card}>
      <View style={[styles.iconContainer, { backgroundColor: `${color}15` }]}>
        {icon}
      </View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.change, { color: isPositive ? '#34C759' : '#FF3B30' }]}>
        {change}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    width: '47%',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  value: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 8,
  },
  change: {
    fontSize: 12,
    fontWeight: '600',
  },
});