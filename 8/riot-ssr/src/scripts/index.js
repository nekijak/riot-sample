import { fragments } from '@riotjs/ssr';
import register from '@riotjs/ssr/register';
import express from 'express';

// 拡張子.riotを登録
register();

// Express Server
const app = express();
app.listen(4500);

// Router and SSR
const ssr = (file, obj) => {
  try {
    // Riotファイルをロード
    const tag = require(`./${ file || 'home' }.riot`).default;
    // レンダリング実施
    return fragments(tag.name, tag, { "params": obj });
  } catch (ex) {
    // エラーが発生した場合はエラーページへ
    return file !== 'notfound' ? ssr('notfound', ex) : {};
  }
};

// favicon.icoは無視
app.get('/favicon.ico', (req, res) => res.status(404).send(''));
// 全てのURLにマッチ
app.get('/*', (req, res) => {
  // 最初のパスはRiotファイル名とする
  let [ file, ...params ] = req.params['0'].split('/');

  // レンダリングを実施し、HTMLとCSSを取得
  const { html = '', css = ''} = ssr(file, params);
  // レンダリング結果を返す
  res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${ file || "Riot App" }</title>
  <style>${ css }</style>
</head>
<body>
${ html }
</body>
</html>`);
});
