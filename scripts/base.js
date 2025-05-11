// scripts/base.js

const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.protocol === 'file:';
const base = isLocal ? './' : '/pot-framework/';
document.write(`<base href="${base}">`);
