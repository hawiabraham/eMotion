import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Themes from '../assets/Themes';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Emotion from '../components/Emotion';
import FeelingContext from '../components/FeelingContext';
import React, { useContext } from 'react';
import { ColorPicker } from 'react-native-color-picker';



export default function ColorSelection({ route }) {
    const { feeling } = route.params;
    const navigator = useNavigation();
    const context = useContext(FeelingContext);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.picker}>
                <ColorPicker
                    onColorSelected={color => {
                        context.updateColorMapping(feeling, color)
                        alert(`Color selected: ${color}`)
                    }}
                    style={{flex: 1}}
                />
            </View>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: Themes.background,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    picker: {
        height: 250,
        width: 250,
    }
});