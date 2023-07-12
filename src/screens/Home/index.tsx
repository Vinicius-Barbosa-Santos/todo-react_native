// import React
import { View } from "react-native"

// import Styles
import { styles } from './styles'

// import Components
import { Input } from "../../components/Input"
import { Header } from "../../components/Header"

export const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
            <Input />
        </View>
    )
}