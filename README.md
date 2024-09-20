# レビュー投稿機能の実装

## こだわりポイント
* コメントだけでなく、星の評価機能実装　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
* 投稿ができなかった際にエラー表示

### 開発期間
ハッカソンキックオフから開発を始め、1週間ほど
### 使用技術
* React


### チーム開発で利用したツール
* zoom　　　　　　　　　　　　　　　　　　　　　　
* slack　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
* discord　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
* Github　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
* git

### 実行方法
API側のリポジトリをクローン("https://github.com/nepp-tumsat/hachathon_2024_09_API")
以下のコマンドを実行
* docker-compose build
* docker-compose run \
  --entrypoint "poetry init \
    --name demo-app \
    --dependency fastapi \
    --dependency uvicorn[standard]" \
* demo-app
* docker-compose run --entrypoint "poetry install --no-root" demo-app
* docker-compose build --no-cache
* docker-compose up -d 
* docker-compose exec demo-app poetry add sqlalchemy aiomysql
* docker-compose exec demo-app poetry run python -m api.migrate_db

http://localhost:8000/docs　
に接続してFastAPIを立ち上げる<br>
フロント側のフォルダでnpm startを実行
