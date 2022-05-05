const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        mode: 'production',
        filename: 'bundle.js'
    }
};