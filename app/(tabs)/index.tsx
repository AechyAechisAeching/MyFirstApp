 import { useThemeColor } from '@/hooks/use-theme-color';
import { useState } from "react";
import { Alert } from 'react-native';



// Don't forget the not used components (use these for later statements)
// import React, { useState } from "react";
//  import { useThemeColor } from '@/hooks/use-theme-color';
//  import { StyleSheet, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { IconSymbol } from '@/components/ui/icon-symbol';


  interface TodoItem {
    id: string;
    text: string;
    completed: boolean;
    createdAt: Date;
  }
  // Storing all TODO items and stating the input field
export default function HomeScreen() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputText, setInputText] = useState('');


  // Theme colours
  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const tintColor = useThemeColor({}, 'tint');

  // If the user sends a chore but the field is empty
  // you get error
  const addTodo = () => {
    if (inputText.trim() == '') {
      Alert.alert('Error', 'Field is empty!');
      return;
    }
  }





}
