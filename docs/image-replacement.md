# 画像差し替えガイド

## 概要

現在のサイトはPicsum.photosのプレースホルダー画像を使用しています。
実際の撮影写真に差し替える際の手順を説明します。

## 現在の画像構成

### 1. Heroセクション
- **ファイル**: `src/components/sections/Hero.tsx`
- **現在のURL**: `https://picsum.photos/1920/1080?random=hero`
- **推奨サイズ**: 1920×1080px (16:9)
- **用途**: フルスクリーン背景画像

### 2. Aboutセクション（プロフィール）
- **ファイル**: `src/components/sections/About.tsx`
- **現在のURL**: `https://picsum.photos/600/750?random=profile`
- **推奨サイズ**: 600×750px (4:5)
- **用途**: プロフィール写真

### 3. Life in Canadaセクション
- **ファイル**: `src/components/sections/LifeInCanada.tsx`
- **現在のURL**: `https://picsum.photos/1600/900?random=canada`
- **推奨サイズ**: 1600×900px (16:9)
- **用途**: カナダ生活の様子

### 4. Galleryセクション
- **ファイル**: `src/data/photos.ts`
- **現在のURL**: `https://picsum.photos/[width]/[height]?random=[1-9]`
- **推奨サイズ**: 1600×900px または 1200×1600px
- **用途**: ポートフォリオ写真（9枚）

## 画像差し替え方法

### オプション1: ローカル画像を使用（推奨）

1. **画像をpublic/images/に配置**
   ```
   public/images/
   ├── hero-background.jpg        # Hero背景
   ├── profile-photo.jpg          # プロフィール写真
   ├── life-in-canada.jpg         # Life in Canada
   └── gallery/                   # ギャラリー写真
       ├── photo-01.jpg
       ├── photo-02.jpg
       └── ...
   ```

2. **コンポーネントのsrcを変更**
   ```typescript
   // Hero.tsx
   src="/images/hero-background.jpg"
   
   // About.tsx  
   src="/images/profile-photo.jpg"
   
   // LifeInCanada.tsx
   src="/images/life-in-canada.jpg"
   ```

3. **Galleryデータを更新**
   ```typescript
   // src/data/photos.ts
   export const photos: Photo[] = [
     {
       id: '1',
       src: '/images/gallery/photo-01.jpg',
       title: '実際の写真タイトル',
       location: '撮影場所',
       category: 'Landscape',
       alt: '写真の説明'
     },
     // ...
   ]
   ```

### オプション2: 外部URLを使用

1. **画像をクラウドストレージにアップロード**
   - Vercel Blob Storage
   - AWS S3
   - Cloudinary
   - その他CDN

2. **next.config.tsにドメインを追加**
   ```typescript
   images: {
     remotePatterns: [
       {
         protocol: 'https',
         hostname: 'your-domain.com',
         port: '',
         pathname: '/**',
       },
     ],
   }
   ```

3. **URLを更新**

## 画像最適化のベストプラクティス

### 1. ファイル形式
- **推奨**: WebP形式（軽量・高品質）
- **代替**: JPEG形式（互換性重視）
- **避ける**: PNG形式（写真には不適）

### 2. ファイルサイズ
- **Hero背景**: 500KB以下
- **プロフィール**: 200KB以下
- **Gallery**: 300KB以下/枚

### 3. 解像度
- **Hero**: 1920×1080px（最低）
- **プロフィール**: 600×750px（最低）
- **Gallery**: 1600×900px（推奨）

### 4. 画像圧縮ツール
- **オンライン**: TinyPNG, Squoosh
- **CLI**: ImageOptim, Sharp
- **自動**: Vercel自動最適化

## 実装例

### ローカル画像の実装例

```typescript
// Hero.tsx
<Image
  src="/images/hero-background.jpg"
  alt="カナダの美しい山岳風景"
  fill
  className="object-cover opacity-80"
  priority
  sizes="100vw"
/>

// About.tsx
<Image
  src="/images/profile-photo.jpg"
  alt="Tomoのプロフィール写真"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

### Galleryデータの実装例

```typescript
export const photos: Photo[] = [
  {
    id: '1',
    src: '/images/gallery/mountain-sunrise.jpg',
    title: 'Mountain Sunrise',
    location: 'Banff National Park',
    category: 'Landscape',
    alt: 'バンフ国立公園の山々に昇る朝日'
  },
  {
    id: '2',
    src: '/images/gallery/forest-hiking.jpg',
    title: 'Forest Hiking',
    location: 'Whistler, BC',
    category: 'Activity',
    alt: 'ウィスラーの森でのハイキング'
  },
  // ... 追加の写真
]
```

## 注意事項

### 1. 著作権
- 自分で撮影した写真のみ使用
- 他者の写真を使用する場合は適切な許可を取得

### 2. プライバシー
- 人物が写っている場合は肖像権に注意
- 位置情報（EXIF）の削除を推奨

### 3. パフォーマンス
- 画像サイズの最適化
- 遅延読み込み（lazy loading）の活用
- WebP形式の使用

### 4. アクセシビリティ
- 適切なalt属性の設定
- 画像の説明文を日本語で記載

## トラブルシューティング

### 画像が表示されない場合

1. **ファイルパスの確認**
   ```bash
   # ファイルが存在するか確認
   ls public/images/hero-background.jpg
   ```

2. **next.config.tsの確認**
   - 外部URLの場合はremotePatternsに追加

3. **開発サーバーの再起動**
   ```bash
   npm run dev
   ```

4. **ブラウザキャッシュのクリア**
   - Ctrl+F5 (Windows) / Cmd+Shift+R (Mac)

### ビルドエラーの場合

1. **画像ファイルの確認**
   - ファイル形式の確認
   - ファイルサイズの確認

2. **型定義の確認**
   - Photo interfaceとの整合性

3. **ビルドログの確認**
   ```bash
   npm run build
   ```

## 完了後の確認項目

- [ ] 全ての画像が正しく表示される
- [ ] モバイルでも適切に表示される
- [ ] 画像の読み込み速度が適切
- [ ] alt属性が適切に設定されている
- [ ] 画像ファイルサイズが最適化されている
- [ ] ビルドエラーが発生しない
- [ ] Lighthouseスコアが良好

## サポート

画像差し替えで問題が発生した場合は、以下を確認してください：

1. このドキュメントの手順に従っているか
2. ファイルパスが正しいか
3. 画像ファイルが破損していないか
4. next.config.tsの設定が正しいか

技術的な問題については、GitHubのIssuesで報告してください。