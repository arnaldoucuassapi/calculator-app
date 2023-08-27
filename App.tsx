import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Button } from './components/Button';

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
        <View style={styles.row}>
          <Button title='CE' type='function' />
          <Button title='C' type='function'/>
          <Button title='%' />
          <Button title='%' type='operation' />
        </View>
        
        <View style={styles.row}>
          <Button title='7' />
          <Button title='8' />
          <Button title='9' />
          <Button title='x' type='operation' />
        </View>
        
        <View style={styles.row}>
          <Button title='4' />
          <Button title='5' />
          <Button title='6' />
          <Button title='-' type='operation' />
        </View>
        
        <View style={styles.row}>
          <Button title='1' />
          <Button title='2' />
          <Button title='3' />
          <Button title='+' type='operation' />
        </View>
        
        <View style={styles.row}>
          <Button title='|' />
          <Button title='0' />
          <Button title=',' />
          <Button title='=' type='calculator' />
        </View>
      </View>

      <StatusBar style="light" translucent />
    </View>
  );
}