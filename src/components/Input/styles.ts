import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskInput: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    input: {
        width: 271,
        height: 54,
        padding: 10,
        borderRadius: 8,
        marginTop: -30,
        color: '#F2F2F2',
        backgroundColor: '#262626',
        placeholderTextColor: "red"
    },
    taskButton: {
        width: 52,
        height: 52,
        marginTop: -30,
        marginLeft: 4,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1E6F9F'
    }
})