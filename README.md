# 読書祭り

## こだわりポイント
* 動きのある背景を採用し、お祭り感を演出
* コメントだけでなく、星の評価機能実装　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
* 投稿ができなかった際にエラー表示

### 開発期間
ハッカソンキックオフから開発を始め、1週間ほど

### 使用技術
* React
* HTML

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
フロントのレポジトリに戻ってnpm startを実行

## 検証動画
### レビュー投稿画面

https://github.com/user-attachments/assets/9deab15b-6608-4f84-90d6-d6f255d1d644

### レビュー閲覧タイムライン

https://github.com/user-attachments/assets/6ce86bb3-d6c1-4101-989e-8c7b3652a60d


### 成果発表のスクリプト

https://www.canva.com/design/DAGQzDr0aAA/YDAewbXz_PcbodV1O1ZCFw/edit

### 反省点
* デザインが少し浅い→　デザインの勉強　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　
* コマンドの全体的な知識不足　　　　
* レビューを投稿しようとしても、エラーが出てしまう
* 投稿画面とタイムライン画面の間の遷移処理が作れなかった
