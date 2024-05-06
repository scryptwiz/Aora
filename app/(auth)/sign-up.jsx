import React, { useState } from 'react'
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { Link, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import CustomButton from '../../components/CustomButton'
import FormField from '../../components/FormField'
import { images } from '../../constants'
import { createUser } from '../../lib/appWrite'

const SignUp = () => {
    const [form, setForm] = useState({ username: '', email: '', password: '' })
    const [submitting, setSubmitting] = useState(false)

    const submit = async () => {
        if (!form.username || !form.email || !form.password) {
            return Alert.alert('Error', 'Fill in all the fields')
        }
        setSubmitting(true)
        try {
            const signupUser = await createUser(form.username, form.email, form.password)
            if (signupUser) {
                router.replace('/home')
            }
        } catch (error) {
            Alert.alert('Error', error.message)
        } finally {
            setSubmitting(false)
        }
    }
    return (
        <SafeAreaView className="bg-primary h-full">
            <ScrollView>
                <View className="w-full justify-center min-h-[83vh] px-4 my-6">
                    <Image source={images.logo} resizeMode='contain' className='w-[115px] h-[35px]' />

                    <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign up</Text>

                    <FormField
                        title="Username"
                        value={form.username}
                        handleChangeText={(e) => setForm({ ...form, username: e })}
                        otherStyles="mt-7"
                    />
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
                    <CustomButton handlePress={submit} title="Sign up" containerStyles="mt-7" isLoading={submitting} />
                    <View className="justify-center pt-5 flex-row gap-2 items-center">
                        <Text className="text-lg text-gray-100 font-pregular">Have an account already? <TouchableOpacity><Link href="/sign-in" className="text-secondary font-psemibold text-lg">Sign in</Link></TouchableOpacity></Text>
                    </View>
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView >
    )
}

export default SignUp