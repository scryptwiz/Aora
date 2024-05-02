import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { icons } from '../constants'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className='space-y-2'>
            <Text className={`text-base text-gray-100 font-pmedium ${otherStyles}`}>{title}</Text>

            <View className="w-full h-16 px-4 border-2 border-black-200 bg-black-100 rounded-2xl focus:border-secondary itens-center flex-row items-center">
                <TextInput
                    className='flex-1 text-white font-psemibold text-base'
                    placeholder={placeholder}
                    value={value}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                />
                {title === "Password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)} className="h-full items-center justify-center">
                        <Image source={!showPassword ? icons.eye : icons.eyeHide} className='w-6 h-6' resizeMode='contain' />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField