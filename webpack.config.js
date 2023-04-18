const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // при пересборках папка dist будет очищаться
        libraryTarget: "umd" // позволяет пользователям использовать как require, так и обычный импорт для наших компонентов
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    externals: {
        // указываем при создании пакетов, какие модули исключить из бандла
        react: 'react'
    },
    module: {
        // лоундеры
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: ['ts-loader'],
                exclude: /node-modules/
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            }
        ],

    }
}