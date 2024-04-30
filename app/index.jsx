import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default Home = () => {

    return (
        <View className="flex-1 items-center justify-center bg-primary">
            <Text className="text-3xl font-pblack">Aora!</Text>
            <StatusBar style="auto" />
            <Link href="/profile" className='text-blue-500'>Go to profile</Link>
        </View>
    );
}