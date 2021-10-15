import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Platform,
  StyleSheet,
} from 'react-native';

import colors from '../styles/colors';

function AddTaskForm({onSubmit}) {
  const [description, setDescription] = useState('');
  const [newDescription, setNewDescription] = useState(''); // Novo campo adicionado

  // useEffect(() => {
  //   openRealm();

  //   // Return a cleanup callback to close the realm to prevent memory leaks
  //   return closeRealm;
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  const handleSubmit = () => {
    onSubmit(description, newDescription);
    setDescription('');
    setNewDescription('');
  };

  const setTextFields = text => {
    console.log('text');
    console.log(text + 'NEW');
    setDescription(text);
    setNewDescription(text + 'NEW');
  };

  return (
    <View style={styles.form}>
      <TextInput
        value={description}
        placeholder="Enter new task description"
        onChangeText={e => setTextFields(e)}
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.textInput}
      />
      <Pressable onPress={handleSubmit} style={styles.submit}>
        <Text style={styles.icon}>＋</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    height: 50,
    marginBottom: 20,
    flexDirection: 'row',
    ...Platform.select({
      ios: {
        shadowColor: colors.black,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.7,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  textInput: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 0,
    borderRadius: 5,
    backgroundColor: colors.white,
    fontSize: 17,
  },
  submit: {
    height: '100%',
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    borderRadius: 5,
    backgroundColor: colors.purple,
  },
  icon: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default AddTaskForm;
