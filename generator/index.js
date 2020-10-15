module.exports = (api, options) => {
    api.extendPackage({
        dependencies: {
            "@vue/cli-service": "^4.5.7"
        },
    });
    api.render('./template', options);
};
