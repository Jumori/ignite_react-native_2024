import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#333333',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    padding: 12,
    gap: 10
  },
  check: {
    width: 18,
    height: 18,
    borderRadius: 999,
    borderColor: '#4EA8DE',
    borderWidth: 2
  },
  checked: {
    width: 18,
    height: 18,
    borderRadius: 999,
    borderColor: '#5E60CE',
    borderWidth: 2,
    backgroundColor: '#5E60CE',
    alignItems: 'center',
    justifyContent: 'center'
  },
  strikeName: {
    flex: 1,
    fontSize: 14,
    color: '#808080',
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid'
  },
  name: {
    flex: 1,
    fontSize: 14,
    color: '#F2F2F2'
  },
  button: {
    width: 32,
    height: 32,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
