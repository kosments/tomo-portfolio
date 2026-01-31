# Tomo Portfolio Site - 設計書

## 1. プロジェクト概要

### コンセプト
- **テーマ**: 広大な自然 × アクティビティ × ライフスタイル
- **アプローチ**: 写真主役のミニマルでモダンなSPA
- **ターゲット**: カナダでのアウトドアライフスタイルを表現

### キーワード
- Minimal
- Modern
- Outdoor
- Freedom
- Adventure

### UX方針
- 1ページSPAで迷わせない
- スクロール体験重視
- テキストは最小限、写真で語る
- 高速表示（SSG前提）

## 2. サイト構成（SPA）

```
/
├─ Hero（フルスクリーン背景画像）
├─ About（自己紹介セクション）
├─ Gallery（写真ギャラリー）
├─ Life in Canada（カナダでの生活）
├─ Activities（アクティビティ・スキル）
└─ Contact（連絡先・SNS）
```

### セクション詳細

#### Hero
- フルスクリーン背景画像（カナダの自然風景）
- シンプルなタイトルとサブタイトル
- スクロールダウンインジケーター

#### About
- 簡潔な自己紹介
- プロフィール写真
- 現在の活動・興味

#### Gallery
- 写真グリッドレイアウト
- カテゴリフィルタ（将来実装）
- ライトボックス表示

#### Life in Canada
- カナダでの生活の様子
- 写真とテキストの組み合わせ
- 季節ごとの活動

#### Activities
- アウトドアアクティビティ
- スキル・趣味
- 使用機材など

#### Contact
- SNSリンク
- メール連絡先
- フッター情報

## 3. デザインシステム

### レイアウト
- 写真はEdge-to-Edge
- セクション間は大胆な余白
- 横長写真（16:9）を基本
- レスポンシブデザイン

### カラーパレット
```css
/* Base Colors */
--color-black: #0E0E0E
--color-white: #FFFFFF

/* Accent Colors */
--color-forest-green: #2D5016
--color-sky-blue: #87CEEB

/* Text Colors */
--color-gray-600: #6B7280
--color-gray-700: #374151
--color-gray-800: #1F2937
```

### タイポグラフィ
- **Headline**: Inter / SF Pro Display
- **Body**: Inter
- **Caption**: 小さく・薄く

### アニメーション
- スクロールでFade / Slide In
- Heroは弱めのParallax
- Hover時に画像を軽くZoom
- 控えめなアニメーション（写真優先）

## 4. 技術スタック

### フロントエンド
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Rendering**: Static Site Generation (SSG)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React

### 画像管理
- `next/image`使用
- Lazy Loading
- Blur Placeholder有効化
- WebP形式推奨

### 依存関係
```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.0.0",
    "@types/react-dom": "^18.0.0",
    "eslint": "^8.0.0",
    "eslint-config-next": "^15.0.0",
    "tailwindcss": "^3.4.0",
    "typescript": "^5.0.0"
  }
}
```

## 5. コンテンツ管理

### 画像ソース
- **Unsplash**: Hero背景、セクション挿絵
- **個人写真**: Gallery、Activities
- **配置**: `/public/images/` ディレクトリ

### データ構造
```typescript
// types/index.ts
export interface Photo {
  id: string
  src: string
  title?: string
  location?: string
  category?: 'landscape' | 'activity' | 'lifestyle'
  alt: string
}

export interface Activity {
  id: string
  title: string
  description: string
  image: string
  skills?: string[]
}
```

### Unsplash利用要件
- **ライセンス**: Unsplash License（商用利用OK）
- **クレジット**: Footer にまとめて記載（任意）
- **検索クエリ例**:
  - canada wilderness
  - mountain landscape
  - forest fog
  - outdoor adventure

## 6. ディレクトリ構造

```
tomo-portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Gallery.tsx
│   │   │   ├── LifeInCanada.tsx
│   │   │   ├── Activities.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/
│   │   │   ├── Section.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── ThemeSwitcher.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── lib/
│   │   ├── utils.ts
│   │   └── constants.ts
│   ├── data/
│   │   ├── photos.ts
│   │   └── activities.ts
│   └── types/
│       └── index.ts
├── public/
│   └── images/
│       ├── hero/
│       ├── gallery/
│       └── activities/
├── docs/
│   ├── design.md
│   ├── development.md
│   └── deployment.md
└── .cursor/
    └── rules
```

## 7. パフォーマンス要件

### Core Web Vitals目標
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### 最適化戦略
- 画像の最適化（WebP、適切なサイズ）
- コードスプリッティング
- 静的生成（SSG）
- CDN配信（Vercel）

## 8. デプロイメント

### 環境
- **開発**: `npm run dev`
- **本番**: Vercel

### CI/CD
- GitHub連携
- 自動デプロイ（mainブランチ）
- プレビューデプロイ（PR）

### 環境変数
```
# 基本的に環境変数は不要
# 将来的にCMSやAPIを使用する場合に追加
```

## 9. 将来拡張（Optional）

### フェーズ2
- 写真カテゴリフィルタ
- ライトボックス機能
- 写真のExif情報表示

### フェーズ3
- 多言語対応（EN/JP）
- アナリティクス
- コンタクトフォーム

### フェーズ4
- CMS連携
- ブログ機能
- 動的コンテンツ

## 10. 開発フロー

### ブランチ戦略
- `main`: 本番環境
- `develop`: 開発環境
- `feature/*`: 機能開発

### コミット規約
```
feat: 新機能
fix: バグ修正
docs: ドキュメント
style: スタイル変更
refactor: リファクタリング
test: テスト
chore: その他
```

### レビュー要件
- コードレビュー必須
- デザインレビュー
- パフォーマンステスト