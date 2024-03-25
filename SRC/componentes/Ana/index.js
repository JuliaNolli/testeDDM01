import react from 'react';
import { View , Text } from 'react-native';

export default function Ana() {
  return (
    <View style={styles.container}>
      <Text>Ana Clara de Andrade</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});
