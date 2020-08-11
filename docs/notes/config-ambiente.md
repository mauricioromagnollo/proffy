<kbd>[&larr; README](../../README.md)</kbd>

<h1 align=center>Configuração de Ambiente</h1>

<!-- * Aulas de preparando o ambiente: Passar pra doc;
https://www.notion.so/Configurando-Ambiente-NLW-98a471ad3cb6448284b8ceed31c45767 -->

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
