import { component, register } from 'riot'
import { Router, Route } from '@riotjs/route'
import App from './app.riot'
import Hello from './hello.riot'
import Goodbye from './goodbye.riot'

// グローバルコンポーネントとして登録
register('my-router', Router);
register('my-route', Route);
register('my-hello', Hello);
register('my-goodbye', Goodbye);

// グローバルに登録せずに直接コンポーネントを生成＆マウント
component(App)(document.getElementById('app'));
