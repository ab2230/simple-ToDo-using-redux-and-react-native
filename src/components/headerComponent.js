import { StyleSheet, Text, TextInput, TouchableOpacity, View , Alert} from 'react-native'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/taskSlice';

export default function HeaderComponent() {
    const dispatch = useDispatch();
    const [toDo,setToDo] = useState('')
    const onSubmit = () => {
        if(toDo.trim().length == 0 ){
            Alert.alert('Please enter a Value');
            return;
        }
        dispatch(
            addTask({
                task:toDo
            })
        )
        setToDo('')
    }

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo List</Text>
      <TextInput style={styles.textInput} onChangeText={(text)=>setToDo(text)} placeholder='add task' value={toDo}/>
      <TouchableOpacity style={styles.addButton} onPress={onSubmit}>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    header:{
        margin:25,
        alignItems: 'center',
        padding:5
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        alignItems:'center'

    },
    textInput:{
        borderColor:'lightblue',
        borderWidth:1,
        width:'85%',
        alignItems:'center',
        margin:5
    },
    addButton:{
        backgroundColor:'lightblue',
        width:'85%',
        alignItems:'center',
        margin:5,
        padding:5
    },
    addText:{
        fontSize:15,
        fontWeight:'bold',
        color:'#160b3b'
    }
})