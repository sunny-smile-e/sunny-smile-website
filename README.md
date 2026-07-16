# Sunny Smile株式会社 ホームページ

シンプルなHTML/CSS/JSのみで作成した6ページ構成のホームページです。
サーバー不要で、`index.html` をブラウザで開くだけで表示できます。

現在のバージョン：**v3.0**（更新履歴は [CHANGELOG.md](./CHANGELOG.md) を参照）

## ファイル構成

```
index.html            … トップページ
company.html          … 会社概要
service.html          … 事業内容
sustainability.html   … SDGs・サステナビリティ
news.html             … お知らせ
contact.html          … お問い合わせ
css/style.css         … 共通デザイン（配色・レイアウト・アニメーション）
js/script.js          … メニュー開閉／スクロールアニメーションの動作
images/logo.png       … ロゴ画像
images/hero-collage.jpg … トップページのメイン画像
CHANGELOG.md           … 更新履歴（バージョン管理）
```

## 現在の設定内容

- 会社名：Sunny Smile株式会社
- 所在地：東京都中央区日本橋室町1-11-12　日本橋水野ビル7階
- 電話番号：080-1246-8873
- メールアドレス：sunny-smile@dc4.so-net.ne.jp
- 代表者：代表取締役　高木 良樹
- 設立：2018年12月25日
- ロゴ：`images/logo.png`（ヘッダーに表示）

## 写真の反映状況（写真1〜7）

| 番号 | ページ | 掲載箇所 | 状態 |
|---|---|---|---|
| 写真1 | company.html（会社概要） | 経営理念 | 反映済み（`images/philosophy.jpg`） |
| 写真2 | company.html（会社概要） | 代表メッセージ | 反映済み（`images/representative.jpg`） |
| 写真3 | company.html（会社概要） | アクセス | 反映済み（`images/access.jpg`） |
| 写真4 | service.html（事業内容） | 電力コンサルティング | 反映済み（`images/service-power.jpg`） |
| 写真5 | service.html（事業内容） | 省エネ・断熱・空調 | 反映済み（`images/service-energy.jpg`） |
| 写真6 | sustainability.html（サステナビリティ） | 取り組みイメージ | 反映済み（`images/sustainability.jpg`） |
| 写真7 | contact.html（お問い合わせ） | オフィス写真 | 反映済み（`images/contact-office.jpg`） |

TOPページのメイン写真（`images/hero-collage.jpg`）も新しい画像に差し替え済みです。

## お知らせページについて

`news.html` に3件の記事を掲載しています（新しい順）。
1. 2026年4月10日掲載：「高圧・特別高圧の電気料金メニューが見直されました（2026年4月～）」
2. 2025年6月1日施行「職場の熱中症予防対策の義務化」について
3. 2024年4月1日施行「省エネ法改正による大規模建築物の省エネ基準引き上げ」について

追加でお知らせを掲載したい場合は、内容（タイトル・日付・本文）をお送りいただければ記事として追加します。

## お問い合わせページについて

入力フォームは設置しておらず、左側の連絡先カード（電話・メール・所在地）のみを表示しています。電話番号・メールアドレスはタップ／クリックすると、そのまま電話発信・メール作成画面が開きます。

## 配色・デザインを変更する

`css/style.css` の一番上にある `:root { ... }` の中で色を一括管理しています。

```css
--color-navy: #0b2942;    /* メインカラー（濃紺） */
--color-accent: #2bd6a4;  /* 省エネ・グリーンの差し色 */
--color-blue: #3b82c4;    /* 電力・ブルーの差し色 */
```

## 公開方法・更新方法

GitHub Pages（`https://sunny-smile-e.github.io/sunny-smile-website/`）で公開中です。
更新したファイルをGitHubリポジトリの同じ場所にアップロード（上書き）すると、1分ほどで自動反映されます。
