import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import LinearGradient from 'react-native-linear-gradient';
import Main from './components/Main/Main';
import SpeedStats from './components/SpeedStats/SpeedStats';
import SpeedShot from './components/SpeedShot/SpeedShot';
import styles from "./HomeStyles";

function Home(props) {
    useEffect(() => {
        props.navigation.setOptions({
            headerTitle: () => (
                <MaterialCommunityIcons name={'battery-10'} size={20} color={'white'}/>
            ),
            headerRight: () => (
                <MaterialCommunityIcons name={'plus'} size={32} color={'white'}/>
            ),
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
            >
                <LinearGradient colors={['#0072b5', '#f5f5f5']} start={{x: 0, y: 0}} end={{x: 0, y: 0.2}}
                                style={styles.home}>
                    <Main/>
                    <SpeedStats/>
                    <SpeedShot/>
                </LinearGradient>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
