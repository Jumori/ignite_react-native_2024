import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  headerContainer: {
    backgroundColor: '#0D0D0D',
    height: 173,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
    // zIndex: 30
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    paddingHorizontal: 24,
    paddingBottom: 24
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 42,
    marginTop: -25
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabs: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20
  },
  tab: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  createdText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#4EA8DE'
  },
  completedText: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#8284FA'
  },
  counter: {
    height: 25,
    width: 25,
    borderRadius: 999,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  counterText: {
    fontWeight: 'bold',
    fontSize: 12,
    color: '#D9D9D9'
  },
  emptyList: {
    borderTopWidth: 1,
    borderTopColor: '#808080',
    paddingVertical: 48,
    paddingHorizontal: 20
  },
  emptyListImage: {
    marginHorizontal: 'auto',
    marginBottom: 16
  },
  emptyListText: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center'
  },
  emptyListTextHighlight: {
    fontWeight: 'bold'
  }
})
