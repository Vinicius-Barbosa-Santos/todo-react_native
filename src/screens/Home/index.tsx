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
    const [tasks, setTasks] = useState<TasksType[]>([
        {
            id: 1,
            checked: false,
            item: 'Integer urna interdum massa libero auctor neque turpis turpis semper.'
        },
        {
            id: 2,
            checked: false,
            item: 'Integer urna interdum massa libero auctor neque turpis turpis semper.'
        },
        {
            id: 3,
            checked: false,
            item: 'Integer urna interdum massa libero auctor neque turpis turpis semper.'
        },
    ])

    const handleAddTask = (item: string) => {
        const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1
        const newList = { id, checked: false, item }
        const listTasks = [...tasks, newList]
        setTasks(listTasks)
    }

    const handleChecked = (id: number) => {
        const listTasks = tasks.map((task) => task.id === id ? { ...task, checked: !task.checked } : task)
        setTasks(listTasks)
    }

    const handleDelete = (id: number) => {
        const listTasks = tasks.filter((task) => task.id !== id)
        setTasks(listTasks)
    }

    return (
        <View style={styles.container}>
            <Header />
            <Input
                onHandleAddTask={handleAddTask}
            />
            <Content
                tasks={tasks}
                onHandleChecked={handleChecked}
                onHandleDelete={handleDelete}
            />
        </View>
    )
}