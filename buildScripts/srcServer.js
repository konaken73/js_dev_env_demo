console.log("we start");
/*var express = require('express');
var path = require('path');
var open = require('open');
var port = 3000;
var app = express();
*/
//ES6 syntax

import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));


console.log("we are in the middle");
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'../src/index.html'));
});


console.log("we are before listener");
app.listen(port,function(err){
	if(err){
		console.log(err+"erreur");
	}else{
		console.log("we try to open port");
		open('http://localhost:'+port);
	}
});
