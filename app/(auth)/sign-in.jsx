import React, { useState } from 'react'
import { Alert, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'

import { Link, router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import CustomButton from '../../components/CustomButton'
import FormField from '../../components/FormField'
import { images } from '../../constants'
import { signIn } from '../../lib/appWrite'

const SignIn = () => {
    const [form, setForm] = useState({ email: '', password: '' })
    const [submitting, setSubmitting] = useState(false)

    const submit = async () => {
        if (!form.email || !form.password) {
            return Alert.alert('Error', 'Fill in all the fields')
        }
        setSubmitting(true)
        try {
            const signinUser = await signIn(form.email, form.password)
            if (signinUser) {
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

                    <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign in</Text>

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                        placeholder="Your e-mail"
                    />
                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                        placeholder="Your password"
                    />
                    <TouchableOpacity className="ml-auto my-7">
                        <Text className="text-gray-100 font-pregular text-lg">Forgot password</Text>
                    </TouchableOpacity>
                    <CustomButton handlePress={submit} title="Log In" isLoading={submitting} />
                    <View className="justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-gray-100 font-pregular">Don't have an account? <TouchableOpacity><Link href="/sign-up" className="text-secondary font-psemibold text-lg">Signup</Link></TouchableOpacity></Text>
                    </View>
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView >
    )
}

export default SignIn