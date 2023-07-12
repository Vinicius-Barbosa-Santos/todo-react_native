// import React
import { SafeAreaView, Text } from "react-native"

// import Styles
import { styles } from './styles'

export const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.homeColor}>Olá</Text>
        </SafeAreaView>
    )
}