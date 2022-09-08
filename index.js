const express = require('express')
const app = express()
// 设置跨域
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    // 千万不要网%%￥￥￥###
    // 千万不要网
    // 千万不要网
    next();
})

// 引入路由模块
const chartOne = require('./router/one')
const chartTwo = require('./router/two')
const chartthree = require('./router/three')
const chartFour = require('./router/four')
const chinaMap = require('./router/chinaMap')
    // 使用中间件来配置路由
app.use('/one', chartOne)
app.use('/two', chartTwo)
app.use('/three', chartthree)
app.use('/four', chartFour)
app.use('/chinamap', chinaMap)


app.use((err, res, req, next) => {
    res.send('Error:' + err.message)
})

app.listen(8000, () => {
    console.log('server running at http://127.0.0.1:8000');
})