JavaScript Remoting using Promise
=================================

A sample app using JavaScript Promise with JavaScript Remoting. This app also uses React & Redux.

Salesforce の [JavaScript Remoting](https://developer.salesforce.com/docs/atlas.ja-jp.206.0.pages.meta/pages/pages_js_remoting.htm) を Promise で書いたサンプルです。  
アプリは React & Redux で書かれています。

### Installation

```zsh
$ npm install -g gulp
$ npm install

# or you can use yarn
```

### Usage

First you need to copy `.env.sample` to `.env` and input your Salesforce org credentials.  
Then run following command.

(If you deploy to the org in which namespace is defined, then add `NAMESPACE=xxx` to `.env`)

`.env.sample` をコピーして `.env` を作り、Salesforce のユーザー名とパスワードを記載してください。  
(名前空間プリフィックスが定義済みの組織にデプロイする場合は `NAMESPACE=xxx` を `.env` に追加してください)


```zsh
# Build JS/CSS & Create StaticResource & Deploy
$ gulp

# Deploy only
$ gulp deploy

# watch changes in src/ and pkg/ directory, and deploy when updated
$ gulp watch
```

### License

MIT
