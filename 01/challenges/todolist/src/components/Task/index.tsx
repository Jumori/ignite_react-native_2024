import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { styles } from './styles'

type Props = {
  name: string
  checked: boolean
  onRemove: () => void
  onToggle: () => void
}

export function Task({ name, checked, onRemove, onToggle }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={checked ? styles.checked : styles.check}
        onPress={onToggle}
      >
        {checked && <Feather name="check" size={12} color="#F2F2F2" />}
      </TouchableOpacity>

      <Text style={checked ? styles.strikeName : styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Feather name="trash-2" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}
