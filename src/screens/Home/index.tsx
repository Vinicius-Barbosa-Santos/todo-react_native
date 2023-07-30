// import React
import { useState } from "react"
import { View } from "react-native"

// import Styles
import { styles } from './styles'

// import Components
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"
import { Content } from "../../components/Content"
import { TasksType } from "../../interfaces/TasksType"

export const Home = () => {
    const [tasks, setTasks] = useState<TasksType[]>([])
    const [tasksCreated, setTasksCreated] = useState<number>(0)
    const [tasksFinished, setTasksFinished] = useState<number>(0)

    const handleAddTask = (item: string) => {
        const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1
        const newList = { id, checked: false, item }
        const listTasks = [...tasks, newList]
        setTasks(listTasks)
        setTasksCreated(tasksCreated + 1)
    }

    const handleChecked = (id: number) => {
        const listTasks = tasks.map((task) => task.id === id ? { ...task, checked: !task.checked } : task)
        setTasks(listTasks)

        const filterListTasksIsTrue = listTasks.filter((tasks) => tasks.checked === true)
        setTasksFinished(filterListTasksIsTrue.length)
    }

    const handleDelete = (id: number) => {
        const listTasks = tasks.filter((task) => task.id !== id)
        setTasks(listTasks)
        setTasksCreated(tasksCreated - 1)

        const filterListTasksIsTrue = listTasks.filter((tasks) => tasks.checked === true)
        setTasksFinished(filterListTasksIsTrue.length)
    }

    return (
        <View style={styles.container}>
            <Header />
            <Input
                onHandleAddTask={handleAddTask}
            />
            <Content
                tasks={tasks}
                tasksCreated={tasksCreated}
                tasksFinished={tasksFinished}
                onHandleChecked={handleChecked}
                onHandleDelete={handleDelete}
            />
        </View>
    )
}