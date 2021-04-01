# node_example

## セットアップ
node.jsのパッケージからライブラリをインストールします。

```
$ yarn install
```

### client
ブラウザで行うサービスを開発します。HTML・CSS・JavaScript(TypeScript)を用います。  
UIを作ったり、APIサーバーに対してデータの送受信を行います。

### sever
APIサーバ上で行う処理を開発します。Node.js(TypeScript)を用います。  
リクエストに応じてレスポンスを返したり、DBを操作するなどの処理を行います。



## サーバー起動
#### クライアント
```
$ yarn dev:client
```
→ http://localhost:3000 にクライアントのサーバーが起動し、アプリが表示されます。

サーバーの停止

ターミナル上で `control + C`


#### サーバー (API + DB)
```
$ yarn dev:server
```

http://localhost:5000 にバックエンドのサーバーが起動し、APIが動きます。

サーバーの停止

```
$ yarn down
```
