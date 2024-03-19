module.exports = {
    // 다른 설정...
    
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // .next 폴더 내의 main.js 파일을 web.js로 변경합니다.
    config.output.filename = isServer ? 'server.js' : 'web.js';
    
    // 다른 설정...
    
    return config;
    },
    };