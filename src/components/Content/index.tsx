// import React
import { View, Text, Image } from "react-native"

// import Styles
import { styles } from "./styles"

// import Interfaces
import { TasksType } from "../../interfaces/TasksType"

// import Components
import { ListTasks } from "../ListTasks"

interface Props {
    tasks: TasksType[],
    onHandleChecked: (id: number) => void
    onHandleDelete: (id: number) => void
}

export const Content = ({
    tasks,
    onHandleChecked,
    onHandleDelete
}: Props) => {

    return (
        <View style={styles.container}>
            <View style={styles.taskContent}>
                <View style={styles.taskCreatedContent}>
                    <Text style={styles.taskCreated}>Criadas</Text>
                    <View style={styles.numberBorder}>
                        <Text style={styles.number}>0</Text>
                    </View>
                </View>
                <View style={styles.finishTaskContent}>
                    <Text style={styles.finishTask}>Concluídas</Text>
                    <View style={styles.numberBorder}>
                        <Text style={styles.number}>0</Text>
                    </View>
                </View>
            </View>

            {tasks.length === 0 &&
                <View style={styles.taskIsEmpthy}>
                    <View style={styles.line} />

                    <View style={styles.taskIsEmpthyContent}>
                        <Image
                            style={styles.taskEmpthyImage}
                            resizeMode="contain"
                            source={require('../../assets/clipboard.png')}
                        />

                        <Text style={styles.taskEmpthyTextBold}>Você ainda não tem tarefas cadastradas</Text>
                        <Text style={styles.taskEmpthyText}>Crie tarefas e organize seus itens a fazer</Text>
                    </View>
                </View>
            }

            {tasks.length >= 1 &&
                <View style={styles.taskIsEmpthy}>
                    {tasks.map((task) => (
                        <ListTasks
                            key={task.id}
                            tasks={task}
                            onHandleChecked={onHandleChecked}
                            onHandleDelete={onHandleDelete}
                        />
                    ))}
                </View>
            }
        </View>
    )
}
