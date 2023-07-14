// import React
import { View, Text, TouchableOpacity, Image } from "react-native"

// import Interfaces
import { TasksType } from "../../interfaces/TasksType"

// import Styles
import { styles } from './styles'
import { useState } from "react"

interface Props {
    tasks: TasksType
}

export const ListTasks = ({ tasks }: Props) => {
    const [checkbox, setCheckbox] = useState<boolean>(false)

    const handleChecked = () => {
        setCheckbox(!checkbox)
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
                            borderColor: checkbox ? '#5E60CE' : '#4EA8DE',
                            backgroundColor: checkbox ? '#5E60CE' : 'transparent',
                        }}
                        activeOpacity={0.7}
                        onPress={handleChecked}
                    >
                        {checkbox &&
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
                    <Text style={styles.task}>{tasks.item}</Text>
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

