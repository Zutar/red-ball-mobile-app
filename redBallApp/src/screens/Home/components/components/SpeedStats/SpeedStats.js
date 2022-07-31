import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import styles from './SpeedStatsStyles';
import {
    LineChart
} from "react-native-chart-kit";

const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `#0072b5`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false
};

const data = {
    labels: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь"],
    datasets: [
        {
            data: [15, 22, 25, 23, 15, 20]
        }
    ]
};

const screenWidth = Dimensions.get("window").width;

function SpeedStats() {
    return (
        <View style={styles.statsBlock}>
            <View style={styles.statsHeader}>
                <Text style={styles.statsTitle}>Скорость мяча</Text>
            </View>
            <View>
                <LineChart
                    data={data}
                    width={screenWidth - 50}
                    height={200}
                    verticalLabelRotation={0}
                    chartConfig={chartConfig}
                    bezier
                    yAxisSuffix="м/c"
                />
            </View>
        </View>
    );
}

export default SpeedStats;
