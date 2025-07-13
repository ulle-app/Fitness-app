import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

interface ActivityRingsProps {
  moveProgress: number;
  exerciseProgress: number;
  standProgress: number;
}

export function ActivityRings({ moveProgress, exerciseProgress, standProgress }: ActivityRingsProps) {
  const size = 200;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  const createRing = (progress: number, color: string, ringRadius: number) => {
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <>
        {/* Background ring */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={ringRadius}
          stroke="#E5E5EA"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress ring */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={ringRadius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.ringsContainer}>
        <Svg width={size} height={size}>
          {createRing(moveProgress, '#FF3B30', radius - 30)}
          {createRing(exerciseProgress, '#34C759', radius - 15)}
          {createRing(standProgress, '#007AFF', radius)}
        </Svg>
        <View style={styles.centerContent}>
          <Text style={styles.centerTitle}>Daily Goals</Text>
          <Text style={styles.centerSubtitle}>Keep going!</Text>
        </View>
      </View>
      
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#FF3B30' }]} />
          <Text style={styles.legendText}>Move: {moveProgress}%</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#34C759' }]} />
          <Text style={styles.legendText}>Exercise: {exerciseProgress}%</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, { backgroundColor: '#007AFF' }]} />
          <Text style={styles.legendText}>Stand: {standProgress}%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  ringsContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContent: {
    position: 'absolute',
    alignItems: 'center',
  },
  centerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  centerSubtitle: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 2,
  },
  legend: {
    marginTop: 20,
    gap: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  legendColor: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
});