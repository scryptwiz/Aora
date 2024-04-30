import '../style.config';

import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { s } from "react-native-wind";

export default Home = () => {
    return (
        <View style={s`flex-1 items-center justify-center bg-primary`}>
            <Text style={s`text-3xl`}>Aora!</Text>
            <StatusBar style="auto" />
            <Link href="/profile" style={s`text-blue-500`}>Go to profile</Link>
        </View>
    );
}