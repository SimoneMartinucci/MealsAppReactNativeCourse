import { View, Pressable, Text, StyleSheet, Platform } from 'react-native'

export default function CategoryGridItem({ title, color, onPress }) {
    return (
        <View style={[styles.gridItem, { backgroundColor: color }]}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => pressed ? [styles.buttonStyle, styles.buttonStylePressed] : styles.buttonStyle}
                onPress={onPress}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.textStyle}>
                        {title}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    buttonStyle: {
        flex: 1,
    },
    buttonStylePressed: {
        opacity: 0.5
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        textAlign: 'center'
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        padding: 16,

    }
})