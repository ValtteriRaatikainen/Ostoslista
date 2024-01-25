import React, { useState } from 'react';
import { StyleSheet, View,Button, Text, TextInput, FlatList} from 'react-native';

export default function App() {

  const [item, setItem] = useState('');
  const [data, setData] = useState([]);

  const handleAdd = () => {
    setData([...data, { key: item }]);
    setItem('');
  }

  const handleClear = () => {
    setData([]);
    setItem('');
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={item => setItem(item)} value={item}/>
      <View style={styles.buttonContainer}>
        <Button title='Add' onPress={handleAdd}></Button>
        <Button title='Clear' onPress={handleClear}></Button>
      </View>
      <Text>Shopping list: </Text>
      <FlatList data={data} renderItem={({item}) => <Text>{item.key}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 300,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
});