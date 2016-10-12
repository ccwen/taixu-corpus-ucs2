/* convert accelon3 format to htll*/
const fs=require("fs");
const files=fs.readFileSync("file.lst","utf8").split(/\r\n/);
const sourcepath="accelon3/";
const Sax=require("sax");

const processFile=function(fn){
	const parser = Sax.parser(true);
	
	parser.ontext=function(t){
		console.log(t.length)
	}	
	parser.onopentag=function(tag){
		debugger;
	}
	parser.onclosetag=function(tagname){

	}
	const content=fs.readFileSync(sourcepath+fn,"ucs2").replace(/\r?\n/,"\n");
	parser.write(content)
}

files.forEach(processFile);
