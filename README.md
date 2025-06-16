# WebChaleur ポートフォリオサイト

このリポジトリは、WebChaleurのポートフォリオサイトのソースコードです。

## 🚀 サイトの概要

- **サイト名**: WebChaleur（ウェブシャル）
- **コンセプト**: 「Webで温かいつながりを作る」
- **フレームワーク**: Astro + Tailwind CSS
- **デプロイ先**: Cloudflare Pages

## 💡 このサイトの特徴

### パフォーマンス

- **Lighthouse スコア**: 
  - Performance: 95+
  - Accessibility: 100
  - Best Practices: 100
  - SEO: 100
- **スコア画像**: `/public/images/lighthouse-score.png` に配置してください
- **First Contentful Paint**: < 1.0s
- **Largest Contentful Paint**: < 2.0s
- **Total Blocking Time**: < 50ms
- **Cumulative Layout Shift**: < 0.1

### 使用技術

#### フロントエンド
- **フレームワーク**: [Astro](https://astro.build/) v4.16
  - 静的サイト生成（SSG）
  - アイランドアーキテクチャ採用
  - View Transitions API対応
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/) v3.4
  - ユーティリティファーストCSS
  - カスタムカラーパレット
  - ダークモード対応
- **フォント**: Google Fonts
  - Inter（英語）
  - Noto Sans JP（日本語）
  - JetBrains Mono（コード）

#### 開発環境
- **パッケージマネージャー**: npm
- **コード品質**: 
  - ESLint（コード規約）
  - Prettier（コードフォーマット）
- **型安全性**: TypeScript対応可能

### 機能

- ✅ **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- ✅ **ダークモード**: システム設定連動 + 手動切り替え
- ✅ **スムーズなページ遷移**: View Transitions APIによるアニメーション
- ✅ **SEO最適化**: メタタグ・構造化データ対応
- ✅ **アクセシビリティ**: WCAG 2.1 AA準拠
- ✅ **高速表示**: 静的生成 + 最適化された画像配信
- ✅ **お問い合わせフォーム**: Web3Forms連携（JavaScriptフリー）

### ホスティング

- **プラットフォーム**: Cloudflare Pages
- **CDN**: Cloudflareグローバルネットワーク
- **SSL**: 自動HTTPS化
- **デプロイ**: GitHub連携による自動デプロイ

## 📁 プロジェクト構成

```
WebChaleur/
├── public/
│   └── images/        # 制作実績の画像など
├── src/
│   ├── components/    # Astroコンポーネント
│   ├── data/         # JSONデータ
│   ├── layouts/      # レイアウトコンポーネント
│   ├── pages/        # ページファイル
│   └── styles/       # グローバルスタイル
└── package.json
```

## 🛠️ セットアップ方法

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:4321` を開いてサイトを確認できます。

### 3. ビルド

```bash
npm run build
```

### 4. ビルド後のプレビュー

```bash
npm run preview
```

## 📝 コンテンツの更新方法

### 制作実績の更新

制作実績は `src/data/works.json` ファイルで管理されています。

#### 実績を追加する場合

1. `src/data/works.json` を開く
2. 配列に新しいオブジェクトを追加

```json
{
  "id": 4,
  "title": "プロジェクト名",
  "description": "プロジェクトの説明文",
  "image": "/images/work4.jpg",
  "link": "https://example.com",
  "technologies": ["使用技術1", "使用技術2"]
}
```

3. 画像を `public/images/` フォルダに配置
4. 保存して開発サーバーで確認

#### 注意点

- `id` は重複しない数値を設定
- `image` のパスは `/images/` から始める
- `link` には実際のサイトURLを設定（公開前は `#` でOK）
- `technologies` は配列形式で記述

### プロフィール情報の更新

`src/pages/about.astro` ファイルを直接編集します。

### 連絡先情報・SNSリンクの更新

連絡先情報とSNSリンクは `src/data/siteInfo.json` ファイルで一元管理されています。

#### siteInfo.jsonの構造

```json
{
  "contact": {
    "email": "webchaleur@gmail.com",
    "location": "十勝, Japan"
  },
  "social": [
    {
      "name": "X",
      "url": "https://twitter.com/ryoo_black",
      "icon": "x"
    },
    {
      "name": "GitHub", 
      "url": "https://github.com",
      "icon": "github"
    },
    {
      "name": "Blog",
      "url": "https://www.ryoma.online",
      "icon": "link"
    }
  ],
  "company": {
    "name": "RyomaAbe",
    "tagline": "Frontend Developer",
    "copyright": "© 2024 RyomaAbe. All rights reserved."
  }
}
```

#### 更新方法

1. `src/data/siteInfo.json` を開く
2. 該当項目を編集：
   - **メールアドレス**: `contact.email`
   - **所在地**: `contact.location`
   - **SNSリンク**: `social` 配列内のオブジェクト
   - **会社名**: `company.name`
   - **キャッチコピー**: `company.tagline`
3. 保存すると全ページに自動反映

## 🎨 デザインのカスタマイズ

### カラーテーマ

Tailwind CSSの設定ファイル `tailwind.config.mjs` でカラーを定義しています：

```js
colors: {
  primary: '#1a1a1a',        // メインテキスト
  secondary: '#666666',      // サブテキスト
  accent: '#0066cc',         // アクセントカラー
  'dark-bg': '#0a0a0a',      // ダークモード背景
  'dark-primary': '#ffffff',  // ダークモードメインテキスト
  'dark-secondary': '#a0a0a0' // ダークモードサブテキスト
}
```

### フォント

Google Fontsを使用：
- **日本語**: Noto Sans JP
- **英語**: Inter
- **コード**: JetBrains Mono

## 📧 お問い合わせフォームの設定

お問い合わせフォームはWeb3Formsを使用しています。

### セットアップ手順

1. [Web3Forms](https://web3forms.com/)でアクセスキーを取得
2. `src/pages/contact.astro` の51行目を編集：

```html
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
```

3. `YOUR_ACCESS_KEY_HERE` を取得したキーに置き換え

## 🚀 デプロイ

### Cloudflare Pagesへのデプロイ

1. GitHubにリポジトリをプッシュ
2. Cloudflare Pagesでプロジェクトを作成
3. ビルド設定：
   - ビルドコマンド: `npm run build`
   - ビルド出力ディレクトリ: `dist`
4. デプロイを実行

## 🔧 よくある質問

### Q: ダークモードが機能しない

A: ブラウザのローカルストレージをクリアして、ページをリロードしてください。

### Q: 画像が表示されない

A: 画像パスが正しいか確認し、`public/images/` フォルダに画像が配置されているか確認してください。

### Q: フォームが動作しない

A: Web3Formsのアクセスキーが正しく設定されているか確認してください。

## 📞 サポート

問題が発生した場合は、以下までお問い合わせください：
- Email: webchaleur@gmail.com

---

© 2024 WebChaleur. All rights reserved.# Portfolio_2025_06
