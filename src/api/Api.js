import 'whatwg-fetch';

const Api = {
    async getZhihuLatest() {
        try {
            let stories = await fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D%22https%3A%2F%2Fnews-at.zhihu.com%2Fapi%2F4%2Fnews%2Flatest%22&format=json&diagnostics=true&callback=',{
                mode:'cors'
            })
            .then(function(response) {
                return response.json()
            });
            return stories;
        } catch (err){
            console.log(err)
        }
        },
    async getZhihuNew(id) {
        try {
            let news = await fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20json%20where%20url%3D%22https%3A%2F%2Fnews-at.zhihu.com%2Fapi%2F4%2Fnews%2F' + id +'%22&format=json&diagnostics=true&callback=',{
                mode:'cors'
            })
                .then(function(response) {
                    return response.json()
                });
            return news;
        } catch (err){
            console.log(err)
        }

    }

};

export { Api };



