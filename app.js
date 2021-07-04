//Main APP FILE
const yargs = require('yargs');
const commands = require('./commands');
//command is used to take the input from the CLI. *rem the args[] from JAVA. something like that.
let command = yargs.argv._[0];
let title = yargs.argv.title;
let body = yargs.argv.body;

//creting the commands: add, remove, list, read
if(command ==="add"){
	if(title && body){
		commands.add(title,body);
	}
	
}else if(command ==="remove"){
	if(title){ //if the title exists then execute the remove command.
		commands.remove(title);
	}
	
}else if(command==="list"){
	commands.list();
}else if(command ==="read"){
	if(title){
		commands.read(title);
	}
}else{
	console.log("Command doesn't exist");

}