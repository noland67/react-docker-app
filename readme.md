# React + Docker 開発環境

このリポジトリは、Windows/Mac 共通で動作する React 開発・本番環境を Docker を用いて構築するテンプレートです。Git Bash での開発も可能です。

---

## 🔧 開発環境の特徴

- React アプリ（`create-react-app`）をベースに構築
- ESLint / Prettier を導入済み
- ホットリロード対応済み
- Docker 開発・本番用設定ファイル分離（`Dockerfile` / `Dockerfile.prod`）
- Node_modules のボリューム除外設定あり（`.dockerignore`）
- 本番用 Nginx サーバーによる配信設定済み

---

## 🐳 Docker を使用した開発環境の起動

### 前提
- Docker Desktop がインストール済みであること
- Git Bash またはターミナルから実行

### 起動手順

# 作業ディレクトリへ移動
cd ~/react-docker-app

# ビルド & 起動
docker compose up --build

# ターミナルで停止
Ctrl + C

# コンテナの停止と削除
docker compose down

---

### 今後の改善案
- TypeScript 対応
- React Router や Zustand などの統合
- テストライブラリ（Jest / React Testing Library）追加