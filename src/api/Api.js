import 'whatwg-fetch';

const Api = {
    getZhihuLatest() {
        fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D%22https%3A%2F%2Fnews-at.zhihu.com%2Fapi%2F4%2Fnews%2Flatest%22&format=json&diagnostics=true&callback=')
            .then(function(response) {
                return response.json()
            }).then(function(json) {
            console.log('parsed json', json)
            }).catch(function(ex) {
            console.log('parsing failed', ex)
            })
    }
};

export { Api };



