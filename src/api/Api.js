// import 'whatwg-fetch';
import fetchJsonp from 'fetch-jsonp';


const Api = {
    getZhihuLatest() {
        fetchJsonp('https://news-at.zhihu.com/api/4/news/latest')
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



