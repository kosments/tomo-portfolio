# Tomo Portfolio Site

カナダでのアウトドアライフスタイルを表現するポートフォリオサイト

## 概要

このプロジェクトは、カナダの雄大な自然の中でのアウトドアライフを写真とストーリーで表現するミニマルでモダンなポートフォリオサイトです。

### 特徴

- 📸 **写真主役のデザイン**: 美しい自然風景を大胆に配置
- 🎨 **ミニマルUI**: テキストは最小限、視覚的インパクト重視
- ⚡ **高速表示**: Next.js SSGによる最適化
- 📱 **レスポンシブ**: 全デバイス対応
- ♿ **アクセシブル**: WCAG 2.1 AA準拠

## 技術スタック

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## セットアップ

### 前提条件

- Node.js 18.17以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone <repository-url>
cd tomo-portfolio

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてサイトを確認できます。

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# 本番ビルド
npm run build

# 本番サーバー起動（ビルド後）
npm start

# リンター実行
npm run lint

# 型チェック
npm run type-check
```

## プロジェクト構造

```
src/
├── app/                 # Next.js App Router
├── components/          # Reactコンポーネント
│   ├── sections/        # ページセクション
│   ├── ui/             # 再利用可能UI
│   └── layout/         # レイアウト
├── lib/                # ユーティリティ
├── data/               # 静的データ
└── types/              # TypeScript型定義

public/
└── images/             # 画像ファイル

docs/                   # ドキュメント
├── design.md          # 設計書
├── development.md     # 開発ガイド
└── deployment.md      # デプロイガイド
```

## サイト構成

- **Hero**: フルスクリーン背景画像とタイトル
- **About**: 自己紹介とプロフィール
- **Gallery**: 写真ギャラリー（実装予定）
- **Life in Canada**: カナダでの生活（実装予定）
- **Activities**: アクティビティ・スキル（実装予定）
- **Contact**: 連絡先・SNS（実装予定）

## カスタマイズ

### 画像の変更

1. `public/images/` に画像を配置
2. `src/data/` でデータを更新
3. コンポーネントで画像パスを変更

### コンテンツの編集

- **基本情報**: `src/lib/constants.ts`
- **写真データ**: `src/data/photos.ts`
- **アクティビティ**: `src/data/activities.ts`

### スタイルの調整

- **カラーパレット**: `tailwind.config.ts`
- **グローバルスタイル**: `src/app/globals.css`
- **アニメーション**: `src/lib/constants.ts`

## デプロイ

### Vercel（推奨）

1. GitHubリポジトリをVercelに接続
2. 自動デプロイが設定されます
3. カスタムドメインを設定（オプション）

詳細は [docs/deployment.md](docs/deployment.md) を参照してください。

## パフォーマンス

### Core Web Vitals目標

- **LCP**: < 2.5s
- **FID**: < 100ms  
- **CLS**: < 0.1

### 最適化機能

- 画像の自動最適化（WebP/AVIF）
- 静的生成（SSG）
- コードスプリッティング
- レイジーローディング

## 貢献

1. フォークしてブランチを作成
2. 変更を実装
3. テストを実行
4. プルリクエストを作成

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## サポート

- **技術的な問題**: GitHub Issues
- **デザイン相談**: [連絡先]
- **緊急時**: [緊急連絡先]

## 参考資料

- [設計書](docs/design.md)
- [開発ガイド](docs/development.md)
- [デプロイガイド](docs/deployment.md)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)