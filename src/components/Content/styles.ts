import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: 32,
        alignItems: "center",
        justifyContent: 'center',
    },
    taskContent: {
        width: "100%",
        maxWidth: 327,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    taskCreatedContent: {
        flexDirection: 'row',
    },
    numberBorder: {
        width: 25,
        height: 19,
        marginLeft: 9,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333333'
    },
    number: {
        fontSize: 12,
        color: '#D9D9D9',
        fontWeight: 'bold'
    },
    taskCreated: {
        fontSize: 14,
        color: '#4EA8DE',
        fontWeight: "bold",
    },
    finishTaskContent: {
        flexDirection: 'row',
    },
    finishTask: {
        fontSize: 14,
        color: '#8284FA',
        fontWeight: "bold",
    },
    taskIsEmpthy: {
        marginTop: 20,
    },
    line: {
        height: 2,
        width: 327,
        backgroundColor: '#333333'
    },
    taskIsEmpthyContent: {
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    taskEmpthyImage: {
        width: 56,
        height: 56,
        marginVertical: 16
    },
    taskEmpthyTextBold: {
        fontSize: 14,
        color: '#808080',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    taskEmpthyText: {
        fontSize: 14,
        color: '#808080',
        textAlign: 'center',
    }
})