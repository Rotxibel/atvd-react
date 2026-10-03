import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },

  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#740001',
    marginBottom: 15,
  },

  inputPesquisa: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    fontSize: 16,
  },

  contadorContainer: {
    padding: 12,
    alignItems: 'center',
  },

  contadorText: {
    fontSize: 15,
    color: '#555',
  },

  loading: {
    marginTop: 30,
  },

  listContainer: {
    padding: 15,
    paddingBottom: 30,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 12,
    padding: 10,
    elevation: 3,
  },

  cardImage: {
    width: 90,
    height: 110,
    borderRadius: 8,
    backgroundColor: '#ddd',
  },

  semImagem: {
    width: 90,
    height: 110,
    borderRadius: 8,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },

  cardTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 6,
  },

  cardSubtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 3,
  },

  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },

  statusIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },

  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  detalhesContainer: {
    position: 'absolute',
    top: 50,
    left: 15,
    right: 15,
    bottom: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 10,
    zIndex: 10,
  },

  detalhesImage: {
    width: 180,
    height: 220,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 15,
  },

  detalhesNome: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#740001',
    marginBottom: 15,
  },

  badgeStatus: {
    alignSelf: 'center',
    backgroundColor: '#740001',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20,
  },

  badgeText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  detalhesInfoArea: {
    marginTop: 5,
  },

  detalhesText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },

  bold: {
    fontWeight: 'bold',
    color: '#740001',
  },

  btnLimpar: {
    backgroundColor: '#740001',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },

  btnLimparText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;

