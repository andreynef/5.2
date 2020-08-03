const path = require('path');
const nodeExternals = require('webpack-node-externals');//удалить из сервера лишние модули из папки node-modules, тк эта папка и так будет установлена в проекте.
const NODE_ENV = process.env.NODE_ENV;
const GLOBAL_CSS_REGEXP = /\.global\.сss$/;


module.exports = {
    target: "node",
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.css$/,//было лесс
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]__[local]--[hash:base64:5]',
                                // exportOnlyLocals: true,//fix
                            },
                            onlyLocals: true,//чтобы лоадер не собирал глобальные стили на сервере. На сервере стили не нужны, главное только селекторы.
                        }
                    },
                'less-loader',
                ],
                exclude: GLOBAL_CSS_REGEXP,
            },
            {
                test: GLOBAL_CSS_REGEXP,
                use: ["сss-loader"]
            }
        ]
    },
    optimization: {
        minimize: false, //отключить минимизацию
    }
};

