import { StatusBar } from 'expo-status-bar';
import { Alert, Text, View } from 'react-native';
import { styles } from './styles';
import { Button } from './components/Button';
import { useState } from 'react';
import Calculator from './utils/calculator';

enum Operations {
  Sum = '+',
  Sub = '-',
  Multiplication = 'x',
  Division = '÷'
}

export default function App() {
  const [number, setNumber] = useState<number>(0);
  const [expressions, setExpressions] = useState<string>("");
  const [total, setTotal]= useState<number>(0);
  const [Comma, setComma] =  useState(false);

  const calculos = new Calculator();

  function calculate(operation: string) {
    setExpressions(state => {
      return state ? `${state} ${number} ${operation}` : `${number} ${operation}`;
    });

    switch(operation) {
      case Operations.Sum:
        setTotal(state => calculos.sum(state, number));
        break;

      case Operations.Sub:
        setTotal(state => calculos.sub(state, number));
        break;

      case Operations.Multiplication:
        setTotal(state => calculos.multiplication(state, number));
        break;

      case Operations.Division:
        setTotal(state => calculos.division(state, number));
        break;
    }

    setNumber(0);
  }

  function addNumber(x: number) {
    if (number < 999999999999) {
      if (number != 0) {
        setNumber(state => Number(`${state}${Comma ? '.'+x : x}`));
      } else {
        setNumber(x);
      }

      if (Comma) {
        setComma(false)
      }
    }
  }

  function decimalNumber() {
    setComma(true);
  }

  function clearAll() {
    setExpressions('');
    clearNumber();
  }

  function clearNumber() {
    setNumber(0);
    setTotal(0);
  }

  function deleteAddedLastNumber() {
    if (number > 0) {
      const stringNumber = number.toString();
      const lastNumber = stringNumber.length - 1;
      const newNumber = Number(stringNumber.slice(0, lastNumber));

      console.log(newNumber)
      setNumber(newNumber);
    }
  }

  function showCalculation() {
    clearAll();
    setNumber(total);
    setTotal(0);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.expressions}>{expressions}</Text>
        <View style={styles.resultContainer}>
          <Text style={styles.equalOperator}>=</Text>
          <Text style={styles.total}>{number}</Text>
        </View>
      </View>
      
      <View style={styles.main}>
        <View style={styles.row}>
          <Button title='CE' onPress={clearAll} type='function' />
          <Button title='C' onPress={clearNumber} type='function'/>
          <Button title='Del' onPress={deleteAddedLastNumber} type='function' />
          <Button title='÷' type='operation' onPress={() => calculate(Operations.Division)} />
        </View>
        
        <View style={styles.row}>
          <Button title='7' onPress={() => addNumber(7)} />
          <Button title='8' onPress={() => addNumber(8)} />
          <Button title='9' onPress={() => addNumber(9)} />
          <Button title='x' type='operation' onPress={() => calculate(Operations.Multiplication)} />
        </View>
        
        <View style={styles.row}>
          <Button title='4' onPress={() => addNumber(4)} />
          <Button title='5' onPress={() => addNumber(5)} />
          <Button title='6' onPress={() => addNumber(6)} />
          <Button title='-' type='operation' onPress={() => calculate(Operations.Sub)} />
        </View>
        
        <View style={styles.row}>
          <Button title='1' onPress={() => addNumber(1)} />
          <Button title='2' onPress={() => addNumber(2)} />
          <Button title='3' onPress={() => addNumber(3)} />
          <Button title='+' type='operation' onPress={() => calculate(Operations.Sum)} />
        </View>
        
        <View style={styles.row}>
          <Button title='|' />
          <Button title='0' onPress={() => addNumber(0)} />
          <Button title=',' onPress={decimalNumber} />
          <Button title='=' type='calculator' onPress={showCalculation} />
        </View>
      </View>

      <StatusBar style="light" translucent />
    </View>
  );
}