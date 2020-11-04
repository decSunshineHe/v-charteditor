export let limit = {
    //防抖
    debounce: function (func, wait) {
        let timer;
        return function () {
            let context = this;
            let args = arguments;
            if (timer) clearTimeout(timer);

            timer = setTimeout(() => {
                func.apply(context, args)
            }, wait)
        }
    }
};
