<div align=center>

![](./layout/background/doc-background.png)

<!-- (Montagem no Photoshop) Print Screen do Projeto: Web, Mobile e Tablet -->

![BADGE_LICENSE] ![BADGE_TYPESCRIPT] ![BADGE_WEB_REACT] ![BADGE_MOBILE_REACT_NATIVE] ![BADGE_SERVER_NODEJS] ![BADGE_OPEN_SOURCE] ![BADGE_NODE_VERSION] ![BADGE_NPM_VERSION] ![BADGE_OPEN_ISSUES] ![BADGE_CLOSED_ISSUES] ![BADGE_STARS] ![BADGE_FORKS]

<h3>

Projeto Open Source desenvolvido na #NextLevelWeek da [Rocketseat], utilizando **TypeScript**, **React**, **React Native** e **Node**. 

</h3>

<!-- ### 🌐 <kbd>http://website.com</kbd> <br> 📥 <kbd>http://download.com</kbd>  -->

</div>

<!-- ## **:movie_camera: PREVIEW**

... [.GIF] Utilizando o projeto -->

## **:rocket: OBJETIVO**

O objetivo do projeto é criar uma plataforma de estudos, onde conseguimos conectar alunos e professores para realizarem aulas online.

## **:heavy_check_mark: REQUISÍTOS**

- ### **Funcionais**
  - O professor poderá criar uma aula;
  - O aluno poderá criar uma conexão com o professor;
  - O aluno poderá avaliar o professor através de um sistema de Likes e Deslikes;
  - Deverá ser possível listar as aulas filtrando por: matéria, dia da semana e horário;
  - A interface do usuário deve mostrar o total de conexões que foram realizadas;

- ### **Não-Funcionais**
  - O sistema deverá se comunicar com o banco de dados SQLite;
  - O sistema deverá ser implementado na linguagem JavaScript com o TypeScript (Web: React, Mobile: React Native e Server: Node);
  - O sistema Web deverá ser responsivo, adaptando sua interface para Mobile, Tablets/iPads e Desktop;

<!-- - ### **Regras de Negócio**

...

## **:walking: JORNADA DO USUÁRIO**

...  -->

## **:computer: TECNOLOGIAS**

### **Website ([React] + [TypeScript])**

- **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**

  \* Veja o arquivo <kbd>[package.json](./sources/web/package.json)</kbd>

### **Server ([NodeJS] + [TypeScript])**

- **[Express]**
- **[DotEnv]**
- **[Knex]**

  \* Veja o arquivo <kbd>[package.json](./sources/server/package.json)</kbd>

### **Utilitários**

- **Protótipo:** **[Figma](https://www.figma.com/)** | **<kbd>[Protótipo(Web)](https://www.figma.com/file/GHGS126t7WYjnPZdRKChJF/?viewer=1&node-id=)</kbd>** | **<kbd>[Protótipo(Mobile)](https://www.figma.com/file/e33KvgUpFdunXxJjHnK7CG/?viewer=1&node-id=)</kbd>** |
- **Editor:** **[Visual Studio Code](https://code.visualstudio.com/)** &rarr; Extensions: **<kbd>[VSCode_Plugin_SQLite]</kbd>**
- **Markdown:** **[StackEdit](https://stackedit.io/)**
- **Commit Conventional:** **[Commitlint]**
- **Teste de API:** **[Insomnia](https://insomnia.rest/)**
- **Fontes:** **[Google Fonts - Archivo](https://fonts.google.com/specimen/Archivo?query=archivo) | [Google Fonts - Poppins](https://fonts.google.com/specimen/Poppins?query=Poppins)**
- **Emojis:** **[Emojipedia](https://emojipedia.org/) | [Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
- **Wireframe Editor:** **[Whimsical](https://whimsical.com/)**
- **Anotações/Checklist:** **[Notion](https://www.notion.so/)**

### **:wrench: CONFIGURAÇÃO DO AMBIENTE**

**Instalando o [NodeJS]**

Você pode instalar o Node de algumas formas diferentes:

- Baixando no site do <kbd>[NodeJS](https://nodejs.org/en/download/)</kbd>;

Se estiver utilizando o **Linux**, você pode optar por instalar o Node através do gerenciador de versões [asdf] para facilitar o processo de mudança de versão do Node, quando for necessário. 

```sh
$ cd ~
$ git clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.7.5
$ echo -e '\n. $HOME/.asdf/asdf.sh' >> ~/.bashrc
$ echo -e '\n. $HOME/.asdf/completions/asdf.bash' >> ~/.bashrc

# Se tiver utilizando o zsh:
$ echo -e '\n. $HOME/.asdf/asdf.sh' >> ~/.zshrc
$ echo -e '\n. $HOME/.asdf/completions/asdf.bash' >> ~/.zshrc
```

Reinicie o terminal e agora digite os comandos para instalar o Node:

```sh
$ asdf plugin-add nodejs https://github.com/asdf-vm/asdf-nodejs.git
$ bash ~/.asdf/plugins/nodejs/bin/import-release-team-keyring
$ asdf install nodejs 12.18.0
$ asdf global nodejs 12.18.0
```

Verificando a sua instalação do Node:

```sh
$ node -v
# v12.18.0

$ npm -v
# 6.14.4
```

**Instalando o [Yarn]**

Se estiver utilizando o **Linux**, você pode optar por instalar o Yarn através do [asdf]:

```sh
$ asdf plugin-add yarn
$ asdf install yarn 1.22.4
$ asdf global yarn 1.22.4 
```

Verificando a sua instalação do Yarn:

```sh
$ yarn -v
# 1.22.4
```

**Instalando as dependências do React e do Expo de forma global:**

```sh
$ npm install create-react-app -g
$ npm install -g expo-cli 
```

## **:memo: ETAPAS DE DESENVOLVIMENTO**

<!-- ### **Modelagem dos Dados** -->


### **Arquitetura do Repositório**

O projeto inteiro foi armazenado neste repositório (monorepo) em 3 diretórios diferentes:

- **`./sources/server`** &rarr; Diretório do **back-end** sendo uma API REST desenvolvida utilizando [TypeScript] + [NodeJS].
- **`./sources/web`** &rarr; Diretório do **front-end** web, desenvolvido utilizando [TypeScript] + [React].
- **`./sources/mobile`** &rarr; Diretório do **mobile** desenvolvido utilizando [TypeScript] + [React Native][ReactNative].

### **Desenvolvimento do projeto Web**

**Criando o Projeto com React e TypeScript:**

```sh
$ yarn create react-app web --template typescript
```

**Instalando as dependências do React:**

```sh
$ yarn add react-router-dom
$ yarn add -D @types/react-router-dom
``` 

### **Desenvolvimento do Server**

**Iniciando o arquivo `package.json` do server:**

```sh
$ yarn init -y
```

**Instalando as dependências do Server NodeJS:**

```sh
$ yarn add express dotenv knex sqlite3 cors
$ yarn add -D typescript ts-node-dev @types/express @types/dotenv @types/cors
```

**Adicionando o arquivo de configurações do TypeScript:**

```sh
$ yarn tsc --init
``` 

<!-- ### **Desenvolvimento do projeto Mobile** 
...
-->

## **:wine_glass: COMO UTILIZAR**

### **Utilizando o Web**

```sh
# Abrindo o diretório Web no terminal:
$ cd ./sources/web

# Instalando as dependências do package.json:
$ yarn

# Iniciando o projeto utilizando o script 'start' do package.json:
$ yarn start
``` 

> O projeto será aberto no `http://localhost:3000`;

### **Utilizando o Server**

Você precisa renomear o arquivo `.env-example` para `.env` e inserir as informações que condizem com o seu **host**:

```sh
$ cd ./sources/server
$ mv .env-example .env
```

```sh
# Abrindo o diretório do Server no terminal:
$ cd ./sources/server

# Instalando as dependências contidas no package.json:
$ yarn

# Iniciando o Server utilizando o script 'start' do package.json:
$ yarn start

# Instanciando as tabelas do banco de dados:
$ yarn knex:migrate

# Voltando a última alteração feita na tabela:
$ yarn knex:migrate:rollback
```

<!-- ### Utilizando o Mobile

Instale o aplicativo <kbd>[Expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)</kbd> no seu smartphone.

```sh
# Abrindo o terminal no diretório do mobile:
$ cd ./sources/mobile

# Executando o mobile no modo de desenvolvimento:
$ npm run start
```

Agora, abra o aplicativo do expo e no modo **LAN** faça o scan do QRCode.

> Se tiver algum problema para executar o aplicativo nesse modo, tente desabilitar o firewall da sua máquina.

Se tiver algum problema com as fontes, utilize o comando:
```sh
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto
```

**\* Lembre de inserir no arquivo `.env` o IP exato que foi gerado pelo seu mobile após utilizar o comando `npm run start`.** -->

## **:octocat: COMO CONTRIBUIR**
  
  - Verifique as **[Issues](https://github.com/x0n4d0/proffy/issues)** que estão abertas e se já não existe alguma com a sua feature;
  - Abra uma **Issue** com o nome e descrição da sua feature e assine com o seu usuário informando que irá fazê-la;
  - Faça um **[fork](https://help.github.com/pt/github/getting-started-with-github/fork-a-repo)** do repositório;
  - Instale as dependências do [Commitlint] utilizando o comando: `yarn` ou `npm install` na raíz do repositório;
  - Entre no sua página do GitHub e faça um **clone** do seu **fork**;
  - Crie uma *branch* com o nome da sua feature: `git chechout -b feat/minhaFeature`;
  - Faça as alterações necessárias no código ou na documentação;
  - Instale as dependências do *commitlint* na raíz do projeto para a verificação dos commits: `npm install` ou `yarn`;
  - Faça o *commit* das suas alterações seguindo as [convenções de commit](https://www.conventionalcommits.org/pt-br/v1.0.0-beta.4/), adicione na descrição o id da sua Issue em parênteses e lembre de fechar a sua Issue com o id no rodapé do commit:

  ```
    <tipo>(escopo opcional): <descrição> (#x)

    [corpo do commit]

    Close #x
  ```
  Exemplo:
  ```sh
    feat: adicionado componente para tal coisa (#52)

    Foi adicionado um componente para tal coisa com o objetivo de melhorar tal coisa, deixando o projeto de tal maneira.

    Close #52
  ```
  - Faça um *push* para a sua *branch*: `git push origin feat/minhaFeature`;
  - Agora é só abrir um *pull request* no repositório que você fez o *fork* e assim que acontecer o *merge* sua Issue será fechada e suas alterações irão fazer parte do projeto;
  - Depois que o *merge* da sua pull request for feito, você pode deletar a sua *branch*.

  \* **Obrigado por contribuir!** ❤️ :facepunch: :blush:

## **:star2: AGRADECIMENTOS**

<div align=center>

<table style="width:100%">
  <tr align=center>
    <th><strong>Next Level Week</strong></th>
    <th><strong>Rocketseat</strong></th>
    <th><strong>diego3g</strong></th>
    <th><strong>maykbrito</strong></th>
  </tr>
  <tr align=center>
    <td>
      <a href="https://nextlevelweek.com/">
        <img width="200" src="https://user-images.githubusercontent.com/38081852/89586607-714d6880-d816-11ea-9d9a-607db54674ab.png">
      </a>
    </td>
    <td>
      <a href="https://rocketseat.com.br/">
        <img width="200" height="180" src="https://user-images.githubusercontent.com/38081852/83981650-1e2e6680-a8f6-11ea-9f42-6df8fe809e4b.png">
      </a>
    </td>
    <td>
      <a href="https://github.com/diego3g">
        <img width="200" height="180" src="https://user-images.githubusercontent.com/38081852/83981712-b7f61380-a8f6-11ea-9099-bd3677e97e39.jpg">
      </a>
    </td>
    <td>
      <a href="https://github.com/maykbrito">
        <img width="200" height="180" src="https://user-images.githubusercontent.com/38081852/83981753-1de29b00-a8f7-11ea-93cf-23d2ff65fa5c.png">
      </a>
    </td>
  </tr>
</table>

</div>

<!-- ## **🤝 COLABORADORES**

... -->

## **:books: REFERÊNCIAS**

- **[React + TypeScript Cheat Sheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet)**
- **[ReactJS](https://reactjs.org/docs/getting-started.html) | [ReactJS pt-BR](https://pt-br.reactjs.org/docs/getting-started.html)**
- **[TypeScript](https://www.typescriptlang.org/docs/home.html)**
- **[dotenv & Typescript](https://blog.morizyun.com/javascript/library-typescript-dotenv-environment-variable.html)**
- **[Next Level Week - Configurando o Ambiente](https://www.notion.so/Configurando-Ambiente-NLW-98a471ad3cb6448284b8ceed31c45767)**

## **:page_with_curl: LICENÇA**

Esse repositório está licenciado pela **MIT LICENSE**. Para mais informações detalhadas, leia o arquivo [LICENSE](./LICENSE) contido nesse repositório. 

<h3 align="center">
Feito com ❤️ por <a href="https://www.linkedin.com/in/mauricioromagnoli/">Maurício Romagnoli</a>
<br><br>
<a href="https://www.alura.com.br/">
  <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%237519C1">
</a>
</h3>

<!-- Links -->

[Rocketseat]: https://rocketseat.com.br/
[React]: https://reactjs.org/
[TypeScript]: https://www.typescriptlang.org/
[NodeJS]: https://nodejs.org/en/
[Yarn]: https://yarnpkg.com/
[ReactNative]: https://reactnative.dev/
[Express]: https://expressjs.com/
[DotEnv]: https://github.com/motdotla/dotenv
[Knex]: http://knexjs.org/
[Commitlint]: https://github.com/conventional-changelog/commitlint
[VSCode_Plugin_SQLite]: https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite
[asdf]: https://github.com/asdf-vm/asdf

<!-- Badges -->

[BADGE_LICENSE]: https://img.shields.io/github/license/x0n4d0/proffy
[BADGE_TYPESCRIPT]: https://badges.frapsoft.com/typescript/code/typescript.png?v=101
[BADGE_WEB_REACT]: https://img.shields.io/badge/web-react-blue
[BADGE_MOBILE_REACT_NATIVE]: https://img.shields.io/badge/mobile-react%20native-blueviolet
[BADGE_SERVER_NODEJS]: https://img.shields.io/badge/server-nodejs-important
[BADGE_OPEN_SOURCE]: https://badges.frapsoft.com/os/v1/open-source.png?v=103
[BADGE_NODE_VERSION]: https://img.shields.io/badge/node-12.18.0-green
[BADGE_NPM_VERSION]: https://img.shields.io/badge/npm-6.14.4-red
[BADGE_OPEN_ISSUES]: https://img.shields.io/github/issues/x0n4d0/proffy?color=green
[BADGE_CLOSED_ISSUES]: https://img.shields.io/github/issues-closed/x0n4d0/proffy?color=red
[BADGE_STARS]: https://img.shields.io/github/stars/x0n4d0/proffy?style=social
[BADGE_FORKS]: https://img.shields.io/github/forks/x0n4d0/proffy?style=social
