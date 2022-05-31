AzureCLI インストール
https://docs.microsoft.com/ja-jp/learn/modules/deploy-run-container-app-service/1-introduction

app service を作成

- az login

  - Container Registry 作成
    - az acr create --name skillup --resource-group study-fukuju-react_group --sku basic --admin-enabled true
  - ビルド
    - cd frontend
      - az acr build --file Dockerfile --registry skillup --image frontend .
    - cd backend
      - az acr build --file Dockerfile --registry skillup --image backend .

- github アクションズを使えば build からデプロイまで自動でできる
  - Azure DevOps でも可能
    - azure ci/cd でググれば出てくる
