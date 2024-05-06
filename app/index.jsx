import { Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView, } from 'react-native-safe-area-context';

import CustomButton from '../components/CustomButton';
import { images } from '../constants';
import { useGlobalContext } from '../context/GlobalProviders';

export default Home = () => {
    const [isLoading, isLoggedIn] = useGlobalContext()

    console.log(isLoading, isLoggedIn)

    // if (!isLoading && isLoggedIn) return <Redirect href='/home' />

    return (
        <SafeAreaView className='bg-primary h-full'>
            <ScrollView contentContainerStyle={{ height: "100%" }}>
                <View className='h-full w-full justify-center items-center px-4'>
                    <Image source={images.logo} className='w-[130px] h-[84px]' resizeMode='contain' />
                    <Image source={images.cards} className='max-w-[380px] w-full h-[300px]' resizeMode='contain' />
                    <View className='relative mt-5'>
                        <Text className='text-4xl text-white text-center font-bold'>Discover Endless Possibilities with <Text className='text-secondary-200'>Aora</Text></Text>
                        <Image source={images.path} className='w- [136px] h-[15px] absolute -bottom-2 -right-8' resizeMode='contain' />
                    </View>
                    <Text className='text-sm font-pregular text-gray-100 mt-7 text-center'>Where creativity meets innovation: embark on a journey of limitless exploration with aora</Text>
                    <CustomButton
                        title="Continiue with Email"
                        handlePress={() => router.push('/sign-in')}
                        containerStyles='w-full mt-7'
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
    );
}