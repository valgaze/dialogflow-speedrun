const path = require('path')
module.exports = {
        target: 'node', // in order to ignore built-in modules like path, fs, etc.
        entry: './webhook/intent_map.js',
        output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'bundle.js'
        }
}