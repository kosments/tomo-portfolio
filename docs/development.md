# 開発ガイド - Tomo Portfolio Site

## セットアップ

### 前提条件
- Node.js 18.17以上
- npm または yarn
- Git

### 初期セットアップ
```bash
# リポジトリをクローン
git clone <repository-url>
cd tomo-portfolio

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

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

## コンポーネント開発

### セクションコンポーネント
各セクションは独立したコンポーネントとして作成：

```typescript
// components/sections/Hero.tsx
interface HeroProps {
  title: string
  subtitle: string
  backgroundImage: string
}

export default function Hero({ title, subtitle, backgroundImage }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* コンポーネント実装 */}
    </section>
  )
}
```

### UIコンポーネント
再利用可能なUIコンポーネント：

```typescript
// components/ui/Section.tsx
interface SectionProps {
  id?: string
  className?: string
  children: React.ReactNode
}

export default function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  )
}
```

## スタイリング

### Tailwind CSS設定
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#2D5016',
        'sky-blue': '#87CEEB',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### カスタムスタイル
```css
/* globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  
  body {
    @apply font-sans text-gray-800;
  }
}

@layer components {
  .section-padding {
    @apply py-20 px-4;
  }
  
  .container-custom {
    @apply max-w-6xl mx-auto;
  }
}
```

## 画像管理

### 画像の配置
```
public/images/
├── hero/
│   └── canada-landscape.jpg
├── gallery/
│   ├── mountain-1.jpg
│   ├── lake-2.jpg
│   └── forest-3.jpg
└── activities/
    ├── hiking.jpg
    ├── skiing.jpg
    └── camping.jpg
```

### next/imageの使用
```typescript
import Image from 'next/image'

<Image
  src="/images/hero/canada-landscape.jpg"
  alt="カナダの美しい自然風景"
  width={1920}
  height={1080}
  priority
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

## アニメーション

### Framer Motion設定
```typescript
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

<motion.div {...fadeInUp}>
  <h2>セクションタイトル</h2>
</motion.div>
```

### スクロールアニメーション
```typescript
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const ref = useRef(null)
const isInView = useInView(ref, { once: true })

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
  transition={{ duration: 0.6 }}
>
  {/* コンテンツ */}
</motion.div>
```

## データ管理

### 写真データ
```typescript
// data/photos.ts
export const photos: Photo[] = [
  {
    id: '1',
    src: '/images/gallery/mountain-1.jpg',
    title: 'Rocky Mountains',
    location: 'Alberta, Canada',
    category: 'landscape',
    alt: 'ロッキー山脈の美しい景色'
  },
  // ...
]
```

### アクティビティデータ
```typescript
// data/activities.ts
export const activities: Activity[] = [
  {
    id: '1',
    title: 'ハイキング',
    description: 'カナダの美しい山々をハイキング',
    image: '/images/activities/hiking.jpg',
    skills: ['登山', '写真撮影', 'ナビゲーション']
  },
  // ...
]
```

## TypeScript型定義

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

export interface SocialLink {
  name: string
  url: string
  icon: string
}
```

## パフォーマンス最適化

### 画像最適化
- WebP形式を使用
- 適切なサイズでリサイズ
- lazy loading有効化
- blur placeholder使用

### コード最適化
- 動的インポート使用
- 不要なライブラリの削除
- バンドルサイズの監視

### SEO対策
```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: 'Tomo - Portfolio',
  description: 'カナダでのアウトドアライフスタイルを写真で表現するポートフォリオサイト',
  keywords: 'portfolio, canada, outdoor, photography, lifestyle',
  authors: [{ name: 'Tomo' }],
  openGraph: {
    title: 'Tomo - Portfolio',
    description: 'カナダでのアウトドアライフスタイルを写真で表現するポートフォリオサイト',
    images: ['/images/og-image.jpg'],
  },
}
```

## テスト

### 基本テスト
```bash
# コンポーネントテスト（将来実装）
npm run test

# E2Eテスト（将来実装）
npm run test:e2e
```

## デバッグ

### 開発ツール
- React Developer Tools
- Next.js DevTools
- Tailwind CSS IntelliSense

### パフォーマンス監視
- Lighthouse
- Web Vitals
- Vercel Analytics

## トラブルシューティング

### よくある問題

1. **画像が表示されない**
   - パスが正しいか確認
   - public/images/に配置されているか確認

2. **アニメーションが動作しない**
   - Framer Motionがインストールされているか確認
   - 初期値と終了値が設定されているか確認

3. **スタイルが適用されない**
   - Tailwindの設定が正しいか確認
   - クラス名のタイポがないか確認

### デバッグコマンド
```bash
# 依存関係の確認
npm list

# キャッシュクリア
npm run clean
rm -rf .next

# 型エラーの確認
npx tsc --noEmit
```