exports.onCreateBabelConfig = ({actions}, options) => {
    actions.setBabelPlugin({
        name: 'babel-plugin-react-native-web'
    });


};
