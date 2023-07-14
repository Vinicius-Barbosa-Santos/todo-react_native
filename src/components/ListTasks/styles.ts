import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 327,
        height: 'auto',
    },
    listTask: {
        height: 64,
        padding: 15,
        width: '100%',
        marginBottom: 8,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#262626',
    },
    listTaksItems: {
        width: '100%',
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    task: {
        fontSize: 14,
        maxWidth: 230,
        marginLeft: 11,
        marginRight: 15,
        color: '#F2F2F2',
    },
})