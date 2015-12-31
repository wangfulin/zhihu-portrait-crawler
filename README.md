## Installation
	
	$ npm install zhihu-portrait-crawler
	
## Example
	
	'use strict';

	var zhihu_portrait_crawler = require('./zhihu-portrait-crawler');

	var uri = 'https://www.zhihu.com/roundtable/bestof2015';

	zhihu_portrait_crawler(uri, 'portrait/', 'b');
	zhihu_portrait_crawler(uri, 'portrait/', 'xl');
	zhihu_portrait_crawler(uri, 'portrait/', 'l');
	zhihu_portrait_crawler(uri, 'portrait/', 'm');
	zhihu_portrait_crawler(uri, 'portrait/', 's');
	zhihu_portrait_crawler(uri, 'portrait/', 'xs');
	
## API
	
	zhihu_portrait_crawler(uri, dir, size);
	
#### uri:要爬头像的uri地址
	例如：https://www.zhihu.com/roundtable/bestof2015

### dir:存储图片的文件夹
	 例如：portrait
	
#### size:表示头像的尺寸类型
	
	1. b : 原图
	2. xl: 大小一般200px * 200px
	3. l : 大小一般100px * 100px
	4. m : 大小一般75px * 75px
	5. xs: 大小一般50px * 50px
	6. s : 大小一般25px * 25px