import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.expressions}>1+1</Text>
        <View style={styles.resultContainer}>
          <Text style={styles.equalOperator}>=</Text>
          <Text style={styles.total}>2</Text>
        </View>
      </View>
      
      <View style={styles.main}>

      </View>

      <StatusBar style="light" translucent />
    </View>
  );
}