- frontend の起動方法
  - docker-compose up を実行すれば起動できる
    - docker-compose.yml で以下となっているため
      - command: sh -c "cd frontend && npm run dev"
- [環境構築参考サイト](https://zenn.dev/tasuya/articles/da033574b85e6d)

  - 構築手順
    - Dockerfile と docker-compose.yml を作成
    - docker-compose run --rm app npm install create-next-app
    - docker-compose run --rm app npx create-next-app プロジェクト名 --ts

- CSS フレームワーク npm を使用する
- [twin.macro 導入](https://qiita.com/oedkty/items/b911b7f3949cd1562fb7)

- ローカル起動時とデプロイ起動時で API をリクエストする際の URL を可変的に変える

  - https://zenn.dev/aktriver/articles/2022-04-nextjs-env
    - package.json の以下の部分で変更してる
      - "start": "APP_ENV=production next start"
        - yarn start コマンドで起動すると env/env.production.js が読み込まれる
          - env.production.js に本番用の URL を書いておけば OK
            - yarn dev コマンドで起動する際は local が入るので、env.local.js が読み込まれる
              - https://zenn.dev/aktriver/articles/2022-04-nextjs-env

- backend
  - docker-compose up を実行すれば起動できる
    - docker-compose.yml で以下となっているため
      - command: uvicorn app.api.server:app --reload --workers 1 --host 0.0.0.0 --port 8000
- http://localhost:8000/docs
- [環境構築参考サイト](https://nmomos.com/tips/2021/01/23/fastapi-docker-2/)
- https://qiita.com/satto_sann/items/fcd3832a1fea2c607b85

- venv 環境の作り方
- python3 -m venv fastapi-env
- source fastapi-env/bin/activate

- DB マイグレートのやり方
  - コンテナの中に入る
    - docker exec -it backend /bin/sh
    - 初回マイグレート
      - alembic revision -m "create_first_tables"
    - ２回目以降のマイグレートはマイグレートして出来上がったファイルを修正して以下のコマンドを実施
    - alembic upgrade head
    - exit
  - DB の中身を確認
    - docker-compose exec db psql -h localhost -U postgres --dbname=postgres
    - \d hedgehogs
    - table 一覧
      - \dt

pip3 install -r requirements.txt が失敗する場合、以下をインストールすると解決する
brew install postgresql
brew install libpq
https://superuser-com.translate.goog/questions/296873/install-libpq-dev-on-mac-os?_x_tr_sl=en&_x_tr_tl=ja&_x_tr_hl=ja&_x_tr_pto=sc
