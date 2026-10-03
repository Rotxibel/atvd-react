import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

import { getPersonagens } from './services/hp';
import styles from './style';

export default function App() {
  const [personagens, setPersonagens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pesquisa, setPesquisa] = useState('');
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  useEffect(() => {
    carregarPersonagens();
  }, []);

  const carregarPersonagens = async () => {
    setLoading(true);

    const dados = await getPersonagens();

    setPersonagens(dados);

    setLoading(false);
  };

  const personagensFiltrados = personagens.filter((p) =>
    p.name?.toLowerCase().includes(pesquisa.toLowerCase())
  );

  const getStatusColor = (alive) => {
    if (alive) {
      return '#2ecc71';
    }

    return '#e74c3c';
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => setPersonagemSelecionado(item)}
      activeOpacity={0.7}
    >
      {item.image ? (
        <Image
          source={{ uri: item.image }}
          style={styles.cardImage}
        />
      ) : (
        <View style={styles.semImagem}>
          <Text>Sem imagem</Text>
        </View>
      )}

      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>
          {item.name}
        </Text>

        <Text style={styles.cardSubtitle}>
          Casa: {item.house || 'Não informada'}
        </Text>

        <Text style={styles.cardSubtitle}>
          Ator: {item.actor || 'Não informado'}
        </Text>

        <View style={styles.statusContainer}>
          <View
            style={[
              styles.statusIndicator,
              {
                backgroundColor: getStatusColor(item.alive),
              },
            ]}
          />

          <Text style={styles.statusText}>
            {item.alive ? 'Vivo' : 'Morto'}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.headerTitle}>
        Catalogo Harry Potter
      </Text>

      <TextInput
        style={styles.inputPesquisa}
        placeholder="Pesquisar personagem..."
        placeholderTextColor="#888"
        value={pesquisa}
        onChangeText={setPesquisa}
      />

      <View style={styles.contadorContainer}>
        <Text style={styles.contadorText}>
          Personagens exibidos: {personagensFiltrados.length}
        </Text>
      </View>

      {loading ? (
        <ActivityIndicator
          size="large"
          color="#740001"
          style={styles.loading}
        />
      ) : (
        <FlatList
          data={personagensFiltrados}
          keyExtractor={(item, index) =>
            item.id?.toString() || index.toString()
          }
          renderItem={renderItem}
          contentContainerStyle={styles.listContainer}
        />
      )}

      {personagemSelecionado && (
        <View style={styles.detalhesContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>

            {personagemSelecionado.image && (
              <Image
                source={{ uri: personagemSelecionado.image }}
                style={styles.detalhesImage}
              />
            )}

            <Text style={styles.detalhesNome}>
              {personagemSelecionado.name}
            </Text>

            <View style={styles.badgeStatus}>
              <Text style={styles.badgeText}>
                {personagemSelecionado.alive ? 'Vivo' : 'Morto'}
              </Text>
            </View>

            <View style={styles.detalhesInfoArea}>

              <Text style={styles.detalhesText}>
                <Text style={styles.bold}>Ator: </Text>
                {personagemSelecionado.actor || 'Não informado'}
              </Text>

              <Text style={styles.detalhesText}>
                <Text style={styles.bold}>Casa: </Text>
                {personagemSelecionado.house || 'Não informada'}
              </Text>

              <Text style={styles.detalhesText}>
                <Text style={styles.bold}>Espécie: </Text>
                {personagemSelecionado.species || 'Não informada'}
              </Text>

              <Text style={styles.detalhesText}>
                <Text style={styles.bold}>Genero: </Text>
                {personagemSelecionado.gender || 'Não informado'}
              </Text>

              <Text style={styles.detalhesText}>
                <Text style={styles.bold}>Nascimento: </Text>
                {personagemSelecionado.dateOfBirth || 'Não informado'}
              </Text>

              <Text style={styles.detalhesText}>
                <Text style={styles.bold}>Ancestralidade: </Text>
                {personagemSelecionado.ancestry || 'Não informada'}
              </Text>

              <Text style={styles.detalhesText}>
                <Text style={styles.bold}>Olhos: </Text>
                {personagemSelecionado.eyeColour || 'Não informado'}
              </Text>

              <Text style={styles.detalhesText}>
                <Text style={styles.bold}>Cabelo: </Text>
                {personagemSelecionado.hairColour || 'Não informado'}
              </Text>

              <Text style={styles.detalhesText}>
                <Text style={styles.bold}>Patrono: </Text>
                {personagemSelecionado.patronus || 'Não informado'}
              </Text>

            </View>

            <TouchableOpacity
              style={styles.btnLimpar}
              onPress={() => setPersonagemSelecionado(null)}
            >
              <Text style={styles.btnLimparText}>
                Fechar detalhes
              </Text>
            </TouchableOpacity>

          </ScrollView>
        </View>
      )}

    </View>
  );
}