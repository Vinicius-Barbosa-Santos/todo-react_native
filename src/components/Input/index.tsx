// import React
import { useState } from "react"
import { TextInput, TouchableOpacity, View, Image } from "react-native"

// import Styles
import { styles } from './styles'

export const Input = () => {
    const [tasks, setTasks] = useState('')

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