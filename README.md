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
```
$ yarn dev
```

http://localhost:3000 にクライアントのサーバーが起動し、アプリが表示されます。

http://localhost:5000 にバックエンドのサーバーが起動し、APIが動きます。
