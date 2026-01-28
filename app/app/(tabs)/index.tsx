import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function HomeScreen() {
  const [count, setCount] = useState(0);

  const handlePress = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bloc</Text>
      <Text style={styles.subtitle}>Bouldering Session Tracker</Text>

      <Text style={styles.count}>Climbs logged: {count}</Text>

      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Log Climb</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#19181f',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#c9a0dc',
  },
  subtitle: {
    fontSize: 18,
    color: '#e0e0e0',
    marginTop: 10,
  },
  count: {
    fontSize: 24,
    color: '#e0e0e0',
    marginTop: 30,
  },
  button: {
    backgroundColor: '#7b3f8c',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
