import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Button } from './components/Button';
import { useState } from 'react';

export default function App() {
  const [number, setNumber] = useState<number>(0);
  const [expressions, setExpressions] = useState<string>("");

  function selectOperation(operation: string) {

    const selectedOperation = number;
    setExpressions(state => {
      return state ? `${state} ${operation} ${number} ` : `${number} ${operation}`;
    });

    switch(operation) {
      case '+':
        break;

      case '-':
        break;

      case '÷':
        break;

      case 'x':
        break;
    }
  }

  function addNumber(x: number) {
    if (x != 0) {
      
    } else {
      
    }
  }

  function clear() {

  }

  function showCalc() {

  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.expressions}>{expressions}</Text>
        <View style={styles.resultContainer}>
          <Text style={styles.equalOperator}>=</Text>
          <Text style={styles.total}>2</Text>
        </View>
      </View>
      
      <View style={styles.main}>
        <View style={styles.row}>
          <Button title='CE' onPress={clear} type='function' />
          <Button title='C' onPress={clear} type='function'/>
          <Button title='%' onPress={() => selectOperation('%')} />
          <Button title='÷' type='operation' onPress={() => selectOperation('÷')} />
        </View>
        
        <View style={styles.row}>
          <Button title='7' onPress={() => addNumber(7)} />
          <Button title='8' onPress={() => addNumber(8)} />
          <Button title='9' onPress={() => addNumber(9)} />
          <Button title='x' type='operation' onPress={() => selectOperation('x')} />
        </View>
        
        <View style={styles.row}>
          <Button title='4' onPress={() => addNumber(4)} />
          <Button title='5' onPress={() => addNumber(5)} />
          <Button title='6' onPress={() => addNumber(6)} />
          <Button title='-' type='operation' onPress={() => selectOperation('-')} />
        </View>
        
        <View style={styles.row}>
          <Button title='1' onPress={() => addNumber(1)} />
          <Button title='2' onPress={() => addNumber(2)} />
          <Button title='3' onPress={() => addNumber(3)} />
          <Button title='+' type='operation' onPress={() => selectOperation('+')} />
        </View>
        
        <View style={styles.row}>
          <Button title='|' />
          <Button title='0' onPress={() => addNumber(0)} />
          <Button title=',' />
          <Button title='=' type='calculator' onPress={showCalc} />
        </View>
      </View>

      <StatusBar style="light" translucent />
    </View>
  );
}