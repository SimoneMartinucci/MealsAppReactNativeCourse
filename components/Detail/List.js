import { Text, View, StyleSheet } from "react-native"

export default function List({ list }) {
    return list.map((value) => (
        <View style={styles.listItem} key={value}>
            <Text style={styles.itemText}>{value}</Text>
        </View>
    )
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 8,
        marginHorizontal: 12,
        backgroundColor: '#e2b497'
    },
    itemText: {
        color: '#351401',
        textAlign: 'center'
    }
})