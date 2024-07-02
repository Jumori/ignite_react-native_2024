import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text, FlatList } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { styles } from './styles'
import LogoImg from '../../assets/logo.svg'
import ClipboardImg from '../../assets/clipboard.svg'
import { Task } from '../../components/Task'

export function Home() {
  const [tasks, setTasks] = useState<{ name: string; checked: boolean }[]>([])
  const [taskName, setTaskName] = useState('')

  function handleAddTask() {
    setTasks(prevState => [
      ...prevState,
      { name: taskName.trim(), checked: false }
    ])
    setTaskName('')
  }

  function handleRemoveTask({ name }: { name: string; checked: boolean }) {
    setTasks(prevState => prevState.filter(task => task.name !== name))
  }

  function handleToggleTask({ name }: { name: string; checked: boolean }) {
    setTasks(prevState =>
      prevState.map(task => {
        if (task.name !== name) {
          return task
        }

        return {
          ...task,
          checked: !task.checked
        }
      })
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LogoImg width={110} height={32} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
            value={taskName}
            onChangeText={setTaskName}
          />

          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Feather name="plus-circle" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

        <View style={styles.tabs}>
          <View style={styles.tab}>
            <Text style={styles.createdText}>Criadas</Text>

            <View style={styles.counter}>
              <Text style={styles.counterText}>{tasks.length}</Text>
            </View>
          </View>

          <View style={styles.tab}>
            <Text style={styles.completedText}>Concluídas</Text>

            <View style={styles.counter}>
              <Text style={styles.counterText}>
                {tasks.filter(task => task.checked).length}
              </Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <Task
              key={item.name}
              name={item.name}
              checked={item.checked}
              onRemove={() => handleRemoveTask(item)}
              onToggle={() => handleToggleTask(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <ClipboardImg
                width={56}
                height={56}
                style={styles.emptyListImage}
              />

              <Text style={styles.emptyListText}>
                <Text style={styles.emptyListTextHighlight}>
                  Você ainda não tem tarefas cadastradas {'\n'}
                </Text>
                Cria tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}
