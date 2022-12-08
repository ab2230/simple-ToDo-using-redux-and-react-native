import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useSelector ,useDispatch } from 'react-redux'
import { deleteTask } from '../redux/taskSlice'

export default function ToDoComponent() {
    const dispatch = useDispatch();
    const toDos = useSelector((state) => state.tasks)
    const delTask = (id)=>{
        dispatch(
            deleteTask({
                id:id
            })
        )
    }
    const renderItem = ({item})=>{
        return(
            <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
                <TouchableOpacity onPress={() => delTask(item.id)}>
                  <Text style={styles.delete}><AntDesign name='delete' size={30}/></Text>
                </TouchableOpacity>
                
            </View>
        )
    }
   
    return (
        <View>
          <Text>ToDoComponent</Text>
          <FlatList 
          data={toDos}
          renderItem={renderItem}
          keyExtractor={(item)=>item.id}
          />
        </View>
      )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'lightblue',
        marginHorizontal:15,
        margin:10,
        padding:5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    delete:{
        
        color:'#a63939'
    }
})