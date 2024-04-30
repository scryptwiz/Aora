import { Slot, Stack } from 'expo-router'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    )
}

export default RootLayout