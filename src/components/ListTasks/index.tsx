// import React
import { View, Text, TouchableOpacity, Image } from "react-native"

// import Interfaces
import { TasksType } from "../../interfaces/TasksType"

// import Styles
import { styles } from './styles'

interface Props {
    tasks: TasksType,
    onHandleChecked: (id: number) => void
}

export const ListTasks = ({ tasks, onHandleChecked }: Props) => {
    const handleChecked = (id: number) => {
        onHandleChecked(id)
    }

    return (
        <View style={styles.container}>
            <View style={styles.listTask}>
                <View style={styles.listTaksItems}>
                    <TouchableOpacity
                        style={{
                            width: 18,
                            height: 18,
                            borderRadius: 9,
                            borderWidth: 2,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderColor: tasks.checked ? '#5E60CE' : '#4EA8DE',
                            backgroundColor: tasks.checked ? '#5E60CE' : 'transparent',
                        }}
                        activeOpacity={0.7}
                        onPress={() => handleChecked(tasks.id)}
                    >
                        {tasks.checked &&
                            <Image
                                resizeMode="contain"
                                style={{
                                    width: 8,
                                    height: 5,
                                }}
                                source={require('../../assets/check.png')}
                            />
                        }
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 14,
                        maxWidth: 230,
                        marginLeft: 11,
                        marginRight: 15,
                        color: tasks.checked ? '#808080' : '#F2F2F2',
                        textDecorationLine: tasks.checked ? 'line-through' : undefined,
                    }}>
                        {tasks.item}
                    </Text>
                    <TouchableOpacity>
                        <Image
                            resizeMode="contain"
                            style={{
                                width: 13,
                                height: 14,
                                marginRight: 5
                            }}
                            source={require('../../assets/trash.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

