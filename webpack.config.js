module.exports = { // eslint-disable-line no-undef
    entry: './src/index.ts',
    module: {
        rules: [
            {test: /\.ts$/, use: 'babel-loader'},
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts'],
    },
    mode: 'development',
    watchOptions: {
        poll: 1000, // Check for changes every second
    },
    output: {
        filename: 'main.js',
    }
};
