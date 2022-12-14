import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import Themes from '../assets/Themes';
import SearchedMotionsReflection from './SearchedMotionsReflection';
import { useState } from 'react';


export default function AddMotionSearch({ movement }) {
    const [text, setText] = useState("");
    return (
        <View style={styles.container}>
            <View style={styles.textBox}>
                <TextInput
                    style={styles.buttonText}
                    placeholder="search:"
                    onSubmitEditing={(event) => setText( event.nativeEvent.text
                    )}
                />
            </View>
            <View style={styles.searchedBox}>
                <SearchedMotionsReflection searched={text} movement={movement}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        backgroundColor: Themes.background
    },
    textBox: {
        height: '15.5%',
        width: '67%',
        borderWidth: 1,
        borderRadius: 1000,
        justifyContent: 'center',
        paddingLeft: 10,
        marginTop: '4%'
     },
     searchedBox: {
        height: '80%',
        width: '100%',
     }

});
