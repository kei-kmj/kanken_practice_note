# 漢検練習帳
漢検練習帳は漢検準1級/1級合格を目指す人向けの学習アプリです。
4択クイズ形式で学習できます。
<img width="422" alt="2023-01-11" src="https://user-images.githubusercontent.com/82737807/211732680-06d8c322-e5ec-43dd-bfd4-47080dee073c.png">


# 仕様
- ユーザー登録不要です。
- 4択クイズ形式で漢検準1級/1級の学習ができます。
- 問題の級と分野を選択すると、問題がランダムで10問出題されます。
-  `☑復習する`にチェックを入れた問題だけを繰り返し練習できます。

# 開発環境
- Debian 11.5
- WSL2
- Ruby 3.1.1
- Rails 7.0.4
- Node 16.14.2
- React 18.2.0
- Vite 3.2.5

# 環境構築
1. リポジトリのクローン   
`$ git clone https://github.com/kei-kmj/kanken_practice_note.git`
2. 依存パッケージインストール・開発サーバ起動   
`$ bin/setup`  
別タブで$ npm run dev`
