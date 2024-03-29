import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#8257e5'
  },

  toBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
  }
});

export default styles;
