import React, { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import FormField from '../../components/FormField'
import { images } from '../../constants'

const SignIn = () => {
    const [form, setForm] = useState({ email: '', password: '' })
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center h-full px-4 my-6">
                    <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />

                    <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign in</Text>

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn