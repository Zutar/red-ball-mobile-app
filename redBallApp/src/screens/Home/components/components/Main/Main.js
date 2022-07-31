import React from 'react';
import {Text, View} from 'react-native';
import styles from './MainStyles';

function Main() {
    return (
            <View style={styles.mainBlock}>
                <View style={styles.mainHeader}>
                    <Text style={styles.mainTitle}>Статистика</Text>
                    <Text style={styles.mainLastUpdatedTime}>Обновлено 7 минут назад</Text>
                </View>
                <View style={styles.mainBall}>
                    <View style={styles.ball}>
                        <Text style={styles.ballText}>Подключено</Text>
                        <Text style={styles.ballSubText}>15 бросков</Text>
                    </View>
                </View>
                <View style={styles.mainInfo}>
                    <Text style={styles.mainInfoTitle}>Последний бросок</Text>
                    <Text style={styles.mainInfoText}>50 оборотов</Text>
                    <Text style={styles.mainInfoText}>5 секунд</Text>
                    <Text style={styles.mainInfoText}>15 км/час</Text>
                </View>
            </View>
    );
}

export default Main;
