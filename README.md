---

# Projeto Campo Minado - React Native

Este é um projeto de campo minado criado com **React Native**, usando a CLI oficial da [@react-native-community](https://github.com/react-native-community/cli).

## Pré-requisitos

> **Nota**: Antes de começar, certifique-se de que você completou as etapas de configuração do ambiente React Native, conforme descrito na [documentação oficial](https://reactnative.dev/docs/environment-setup). Isso inclui a instalação do Node.js, Java JDK, Android Studio (para Android) ou Xcode (para iOS).

## Passo 1: Inicie o Metro Server

O Metro é o **bundler** JavaScript que é executado com o React Native para carregar e agrupar os arquivos do seu aplicativo. Para iniciá-lo, siga os passos abaixo:

1. Abra um terminal na pasta raiz do seu projeto.
2. Execute o comando:

```bash
# Usando npm
npm start

# OU usando Yarn
yarn start
```

Isso abrirá a interface do **Metro Bundler** no terminal.

## Passo 2: Inicie o Aplicativo

Com o Metro Bundler rodando em um terminal, abra outro terminal na raiz do seu projeto e execute o comando adequado para o seu ambiente de desenvolvimento:

### Para Android:

```bash
# Usando npm
npm run android

# OU usando Yarn
yarn android
```

### Para iOS:

```bash
# Usando npm
npm run ios

# OU usando Yarn
yarn ios
```

Se tudo estiver configurado corretamente, o aplicativo será iniciado em um emulador Android ou no simulador iOS.

---

## Sobre o Jogo

O jogo Campo Minado é um clássico, onde o objetivo é encontrar e marcar todas as minas escondidas no tabuleiro sem acionar nenhuma delas. Este projeto foi desenvolvido com **React Native** para criar uma experiência de jogo interativa e divertida para dispositivos móveis.

### Funcionalidades do Jogo

- **Modos de Jogo**: O jogador pode escolher o nível de dificuldade, alterando o tamanho do tabuleiro e o número de minas.
- **Visual Atraente**: O layout foi projetado para ser simples e funcional, com gráficos limpos e responsivos.
- **Marcação de Minas**: O jogador pode marcar os campos que acredita conterem minas.
- **Reiniciar Jogo**: Ao perder ou vencer, o jogador pode rapidamente iniciar uma nova partida.

### Capturas de Tela

Aqui estão algumas capturas de tela do jogo em ação:

#### Tela Inicial

![Tela Inicial](https://github.com/user-attachments/assets/7be8d893-b6aa-4e81-b8b2-fdc59a868440)

---

#### Menu

![Menu](https://github.com/user-attachments/assets/9f03d206-a091-4bc7-8f8d-910886db529e)

---

#### Jogo

![Jogo](https://github.com/user-attachments/assets/e6d49f5a-2218-4925-b0c5-fbbd92aed012)

---

## Como Jogar

1. **Inicie o jogo**: Escolha a dificuldade desejada e comece o jogo.
2. **Clique nos campos**: Tente revelar todos os campos sem tocar em uma mina.
3. **Marque as minas**: Use a funcionalidade de marcação para sinalizar onde você acha que as minas estão escondidas.

Divirta-se jogando!

---

## Recursos Adicionais

- [Documentação Oficial do React Native](https://reactnative.dev/docs/getting-started)
- [Guia de Integração](https://reactnative.dev/docs/integration-with-existing-apps) - para integrar este projeto em um app existente.
- [Repositório GitHub do React Native](https://github.com/facebook/react-native)

--- 

Sinta-se à vontade para adaptar ou expandir este README de acordo com as necessidades do seu projeto!
