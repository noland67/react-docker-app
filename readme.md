# React + Docker 開発環境

このリポジトリは、Windows/Mac 共通で動作する React 開発・本番環境を Docker を用いて構築したポートフォリオです。Windows / Git Bash での開発は、 React の強みである HMR が機能しません。Windowns / WSL2 ではうまく動作するらしいですが、おそらく個人的な理由で WSL のフリーズが頻発するので、Windows では Docker を諦めて npm で進めました。

---

## 🔧 開発環境の特徴

- React アプリ（`create-react-app`）をベースに構築
- ESLint / Prettier を導入済み
- ホットリロード対応済み (Windows: npm, Mac: Docker)
- Docker 開発・本番用設定ファイル分離（`Dockerfile` / `Dockerfile.prod`）
- Node_modules のボリューム除外設定あり（`.dockerignore`）
- 本番用 Nginx サーバーによる配信設定済み

---

## 使用した開発環境

(Windowsの場合)
npm start
Ctrl + c

(Macの場合)
docker compose up (初回だけ--build)
Ctrl + c
docker compose down

---

## 今後の改善案

- TypeScript 対応
- React Router や Zustand などの統合
- テストライブラリ（Jest / React Testing Library）追加

---

## サイトの活用

- https://icons8.jp/
