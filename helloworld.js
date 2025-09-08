console.log('hello world')
app.config.optionMergeStrategies. = (parent, child, vm) => {
    return child
}


app.config.performance = app.config.performance || {};

this._init = function (options) {
    if (options && options.el) {
        this.$mount(options.el);
    }
}