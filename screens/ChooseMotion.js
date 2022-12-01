import { TextInput, ImageBackground, StyleSheet, Text, Button, Image, View, SafeAreaView, TouchableOpacity, Dimensions, Pressable } from 'react-native';
import BasicSelection from '../components/BasicSelection';
import { useState } from 'react';
import { TabRouter, useNavigation } from '@react-navigation/native';
import Emotion from '../components/Emotion';
import SuggestedMotions from '../components/SuggestedMotions';
import FeelingContext from '../components/FeelingContext';
import React, { useContext } from 'react';
import Themes from '../assets/Themes';
import { MaterialIcons } from '@expo/vector-icons'; 
import SearchedMotions from '../components/SearchedMotions';

export default function ChooseMotion({ route }) {
    const context = useContext(FeelingContext);
    const navigator = useNavigation();
    const [guided, setGuided] = useState(true);
    const [text, setText] = useState("");

    function guidedOptions() {
        return (
            <View style={styles.optionsBox}>
                <Text style={styles.label}>
                    suggested motions:
                </Text>
                <View style={styles.suggestedBox}>
                    <SuggestedMotions currentFeelings={context.currentFeelings}/>
                </View>
            </View>
        )
    };

    function unguidedOptions() {
        return (
            <View style={styles.optionsBox}>
                <Text style={styles.label}>
                    search for motion:
                </Text>
                <View style={styles.textBox}>
                    <TextInput
                        style={styles.buttonText}
                        placeholder="search:"
                        onSubmitEditing={(event) => setText( event.nativeEvent.text
                        )}
                    />
                </View>
                <View style={styles.searchedBox}>
                    <SearchedMotions searched={text}/>
                </View>
            </View>
        )
    };

    let Options = guidedOptions;
    let guidedUnderline = 'underline';
    let unguidedUnderline = 'none';

    if (guided) {
        Options = guidedOptions;
        guidedUnderline = 'underline';
        unguidedUnderline = 'none';
    } else {
        Options = unguidedOptions;
        guidedUnderline= 'none';
        unguidedUnderline = 'underline';
    }

    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.backArrowBox}>
            <MaterialIcons name="keyboard-backspace" size={50} color="black" onPress={() => {
                context.updateMotion('', []);
                navigator.navigate('CurrentEmotion');
            }}/>
        </View>
        <Text style={styles.heading}>
            current eMotion
        </Text>
        <Pressable style={styles.emotionBox} onPress={() => {
            navigator.navigate('HowDoYouFeel');
            }}>
            <Emotion feelings={context.currentFeelings}/>
        </Pressable>
        <View style={styles.guideSelectBox}>
            <Text style={[styles.guideSelect, {textDecorationLine: guidedUnderline}]} onPress={() => setGuided(true)}>
                guided
            </Text>
            <Text style={[styles.guideSelect, {textDecorationLine: unguidedUnderline}]} onPress={() => setGuided(false)}>
                unguided
            </Text>
        </View>
        <Options/>
        
    </SafeAreaView>
    );
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
    backArrowBox: {
        height: 45,
        width: '100%',
        paddingHorizontal: 15,
        justifyContent: 'center'
    },
    guideSelectBox: {
        height: '8%',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        alignItems: 'center'
    },
    emotionBox: {
        height: 200,
        width: 200,
    },
    guideSelect: {
        fontSize: 25,
    },
    optionsBox: {
        height: '60%',
        width: '100%',
        alignItems: 'center'
    },
    suggestedBox: {
        height: '69%',
        width: '100%'
    },
    label: {
        fontSize: 20
    },
    textBox: {
        height: 40,
        width: 250,
        borderWidth: 1,
        borderRadius: 100,
        justifyContent: 'center',
        paddingLeft: 10,
        marginTop: 20
     },
     searchedBox: {
        height: '62%',
        width: '100%',
    },
    heading: {
        fontSize: 20
    }
});