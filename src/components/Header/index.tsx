// import React
import { SafeAreaView, Image } from "react-native"

// import Styles
import { styles } from './styles'

export const Header = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image 
                resizeMode="contain"
                style={{ 
                    width: 110, 
                    height: 70 
                }}
                source={require('../../assets/logo.png')} 
            />
        </SafeAreaView>
    )
}