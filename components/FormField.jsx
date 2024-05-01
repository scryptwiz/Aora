import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <View className='space-y-2'>
            <Text className={`text-base text-gray-100 font-pmedium ${otherStyles}`}>{title}</Text>

            <View className="w-full h-16 px-4 border-2 border-black-200 bg-black-100 rounded-2xl focus:border-secondary itens-center">
                <TextInput
                    className='flex-1 text-white font-psemibold text-base'
                    placeholder={placeholder}
                    value={value}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                />
            </View>
        </View>
    )
}

export default FormField