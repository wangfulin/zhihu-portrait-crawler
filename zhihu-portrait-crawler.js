'use strict';

var request = require('request');
var fs = require('fs');
var mkdirp = require('mkdirp');
var Portrait = require('./portrait');

/**
* 下载图片到本地
*/
function download(portrait){
	request(portrait.uri)
		.pipe(fs.createWriteStream(portrait.name))
		.on('close',function(){
			console.log('download: '+ portrait.name +' success');
		});
}

/**
* 找到所有头像的uri
*/
function downloadPortraits(uri, dir, size){
	var pattern = new RegExp(/<img.+?src="?(https:\/\/pic\d\.zhimg.com\/\S+.(jpg|gif|bmp|bnp|png))"?.+?(alt="((\S|\s)+?)")?.+?>/g);

	// 获取uri的内容
	request.get(uri, function(error, response, body){
		if(!error && response.statusCode === 200){
			// 下载所有用户头像到指定的文件夹
			mkdirp(dir + '/' + size + '/', function(err){
				var match,num=0;
				while( (match = pattern.exec(body)) != null){
					var picType = match[1].split('.')[(match[1].split('.').length-1)];
					var portrait = new Portrait(match[1].replace(/_\w\w?\./,'_' + size + '.'), dir + '/' + size + '/' + (match[4]?match[4]:(num++)) + '.' + picType);
					download(portrait);
				}
			});
		}
	});
}

/**
* @param uri:想要抓去的页面的uri
* @param dir:图片存储地址
* @param size:抓取什么尺寸的图片，参数只能为(b(原图),xl,l,m,xs,s)
*/
function crawler(uri, dir, size){
	downloadPortraits(uri, dir, size);
}

module.exports = crawler;
