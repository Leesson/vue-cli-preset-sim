const resolve = require('resolve');

resolve('@vue/cli-service/generator/template/public/index.html', { basedir: __dirname }, function (err, res) {
    if (err) console.error(err);
    else console.log(res);
});

module.exports = (api, options) => {
    api.extendPackage({
        dependencies: {
            "@vue/cli-service": "^4.5.7"
        },
    });
    api.render('./template', options);
};
