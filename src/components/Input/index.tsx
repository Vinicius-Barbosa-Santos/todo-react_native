// import React
import { useState } from "react"
import { TextInput, TouchableOpacity, View, Image, Alert } from "react-native"

// import Styles
import { styles } from './styles'

interface Props {
    onHandleAddTask: (item: string) => void
}

export const Input = ({ onHandleAddTask }: Props) => {
    const [tasks, setTasks] = useState('')

    const handleAddTask = (tasks: string) => {
        if (!tasks) return Alert.alert('Preencha o campo!')
        onHandleAddTask(tasks)
        setTasks('')
    }

    return (
        <View style={styles.taskInput}>
            <TextInput
                style={styles.input}
                value={tasks}
                onChangeText={(e) => setTasks(e)}
                placeholder="Adicione uma nova tarefa"
                placeholderTextColor={'#808080'}
            />
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.taskButton}
                onPress={() => handleAddTask(tasks)}
            >
                <Image
                    resizeMode="contain"
                    style={{ width: 16, height: 16 }}
                    source={require('../../assets/plus.png')}
                />
            </TouchableOpacity>
        </View>
    )
}