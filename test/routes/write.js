// require core module `file system`
var fs = require( 'fs' );

// exports 1 method for other modules or files to use
module.exports = {
	write : function( filename, data ){
		// write to file synchronizely
		fs.writeFileSync( filename, data );
	},
	list : function(){
		var dir = './public/message';
		var files = fs.readdirSync(dir);
		console.log(files);
		return files;
	},
	del : function(filename){
		var ans = fs.unlinkSync('./public/message/'+ filename, function (err) {
			if (err) return  err;
			return 'successfully deleted';
		});	  
		return ans;
	},
	open : function(filename){
		var dir = './public/message/'+ filename; 
		var ans = fs.readFileSync(dir,'utf-8', function (err,data) {
			if (err) return  err;
			return data;
		});
		return ans;     
	},

};
