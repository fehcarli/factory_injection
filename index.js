import createCore from './src/core.js';

const core = createCore();

try {
    core.start();
    core.stop();
}catch(e){
    console.log('[index] Uncaught error!')
    console.log(e);
}