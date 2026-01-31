# デプロイメントガイド - Tomo Portfolio Site

## Vercelデプロイメント

### 初回セットアップ

1. **GitHubリポジトリと連携**
   ```bash
   # Vercel CLIをインストール（オプション）
   npm i -g vercel
   
   # Vercelにログイン
   vercel login
   ```

2. **Vercelダッシュボードでの設定**
   - [vercel.com](https://vercel.com)にアクセス
   - 「New Project」をクリック
   - GitHubリポジトリを選択
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`

### 自動デプロイ設定

#### ブランチ戦略
```
main ブランチ → 本番環境 (production)
develop ブランチ → 開発環境 (preview)
feature/* ブランチ → プレビュー環境 (preview)
```

#### vercel.json設定
```json
{
  "buildCommand": "next build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["iad1"],
  "functions": {
    "src/app/**/*.tsx": {
      "maxDuration": 10
    }
  },
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### 環境変数

現在は環境変数不要ですが、将来的に必要になる場合：

```bash
# .env.local (開発環境)
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Vercel環境変数（本番環境）
NEXT_PUBLIC_SITE_URL=https://tomo-portfolio.vercel.app
```

### カスタムドメイン設定

1. **Vercelダッシュボード**
   - Project Settings → Domains
   - カスタムドメインを追加

2. **DNS設定**
   ```
   Type: CNAME
   Name: www (または @)
   Value: cname.vercel-dns.com
   ```

## パフォーマンス最適化

### 画像最適化
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: ['images.unsplash.com'], // Unsplash画像用
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig
```

### 静的生成設定
```typescript
// app/page.tsx
export const revalidate = false // 完全静的
// または
export const revalidate = 3600 // 1時間ごとに再生成
```

### Bundle Analyzer
```bash
# バンドルサイズを分析
npm install --save-dev @next/bundle-analyzer

# package.jsonに追加
"analyze": "ANALYZE=true next build"

# 実行
npm run analyze
```

## モニタリング

### Vercel Analytics
```typescript
// app/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Web Vitals
```typescript
// app/layout.tsx
import { SpeedInsights } from '@vercel/speed-insights/next'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
```

### Lighthouse CI
```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.12.x
          lhci autorun
```

## セキュリティ

### セキュリティヘッダー
```javascript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}
```

### 依存関係の監査
```bash
# セキュリティ監査
npm audit

# 脆弱性の修正
npm audit fix

# Dependabotの設定（GitHub）
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
```

## バックアップ・復旧

### コード管理
- GitHubでのソースコード管理
- ブランチ保護ルール設定
- 定期的なバックアップ

### 画像・アセット
- Vercelでの自動バックアップ
- 重要な画像は別途クラウドストレージに保存

### データベース
現在はデータベース不使用ですが、将来的に必要な場合：
- 定期的なダンプ作成
- 複数環境でのバックアップ

## トラブルシューティング

### よくある問題

1. **デプロイエラー**
   ```bash
   # ローカルでビルドテスト
   npm run build
   
   # 依存関係の確認
   npm ci
   ```

2. **画像が表示されない**
   - next.config.jsのdomains設定確認
   - 画像パスの確認
   - Vercelの関数タイムアウト確認

3. **パフォーマンス問題**
   - Lighthouse スコア確認
   - バンドルサイズ分析
   - 画像最適化の確認

### デバッグ方法
```bash
# Vercel CLI でローカルテスト
vercel dev

# 本番環境のログ確認
vercel logs

# 関数の詳細確認
vercel inspect [deployment-url]
```

## メンテナンス

### 定期メンテナンス
- 依存関係の更新（月次）
- セキュリティパッチの適用
- パフォーマンス監視
- 画像の最適化

### 更新手順
```bash
# 依存関係の更新確認
npm outdated

# 安全な更新
npm update

# メジャーバージョン更新（慎重に）
npm install package@latest
```

### 監視項目
- Core Web Vitals
- エラー率
- レスポンス時間
- 可用性

## 引き継ぎ情報

### 重要なアカウント
- Vercel アカウント
- GitHub リポジトリ
- ドメイン管理（該当する場合）

### 連絡先
- 技術的な問題: [技術サポート連絡先]
- デザイン変更: [デザイン担当者連絡先]
- 緊急時対応: [緊急連絡先]

### ドキュメント
- 設計書: `/docs/design.md`
- 開発ガイド: `/docs/development.md`
- このデプロイメントガイド: `/docs/deployment.md`