import React from 'react'
import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import { icons } from '../constants'

const SearchInput = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    return (
        <View className="w-full h-16 px-4 border-2 border-black-200 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
            <TextInput
                className='flex-1 text-white font-psemibold text-base'
                placeholder="Search"
                value={value}
                placeholderTextColor="#7b7b8b"
                onChangeText={handleChangeText}
            />
            <TouchableOpacity>
                <Image source={icons.search} className='w-5 h-5' resizeMode='contain' />
            </TouchableOpacity>
        </View>
    )
}

export default SearchInput