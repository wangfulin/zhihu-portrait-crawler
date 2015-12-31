'use strict';

var zhihu_portrait_crawler = require('./zhihu-portrait-crawler');

var uri = 'https://www.zhihu.com/roundtable/bestof2015';

zhihu_portrait_crawler(uri, 'portrait/', 'b');
zhihu_portrait_crawler(uri, 'portrait/', 'xl');
zhihu_portrait_crawler(uri, 'portrait/', 'l');
zhihu_portrait_crawler(uri, 'portrait/', 'm');
zhihu_portrait_crawler(uri, 'portrait/', 's');
zhihu_portrait_crawler(uri, 'portrait/', 'xs');
zhihu_portrait_crawler('http://www.zhihu.com/question/38947978', 'portrait1/', 'xs');
