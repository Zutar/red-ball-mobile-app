import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import styles from './SpeedShotStyles';
import {
    BarChart
} from "react-native-chart-kit";

const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#ffffff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `#d50000`,
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

function SpeedShot() {
    return (
        <View style={styles.statsBlock}>
            <View style={styles.statsHeader}>
                <Text style={styles.statsTitle}>Броски</Text>
            </View>
            <View>
                <BarChart
                    data={data}
                    width={screenWidth}
                    height={200}
                    chartConfig={chartConfig}
                    verticalLabelRotation={0}
                />
            </View>
        </View>
    );
}

export default SpeedShot;
