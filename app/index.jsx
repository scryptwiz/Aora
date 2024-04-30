import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default Home = () => {

    return (
        <View className="flex-1 items-center justify-center bg-primary">
            <Text className="text-3xl font-pblack text-secondary">Aora!</Text>
            <Link href="/home" className='text-blue-500 text-2xl'>Go to Home</Link>
            <StatusBar style="auto" />
        </View>
    );
}