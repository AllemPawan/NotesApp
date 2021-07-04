//commands file. I am creating this seperate file to handle all the CLI commands given to the application.
const fs = require('fs');

//Here i am using an arrow function.
//inside the 
const add=(title,body)=>{
	
	//reading the file to see if it exists and then take the information and store inside the NotesList array.
	let NotesList = [];
	try{	
		NotesList = JSON.parse(fs.readFileSync("Notes.json")); //parse strings into the JSON 
	}catch(e){
		//console.log(e);
	}
	//finding INDEX we use te findIndex(). It should have a callback function. If title doesn't exist then it returns -1
	let index = NotesList.findIndex((x)=> x.title===title);
	if(index===-1){
		NotesList.push({title,body});
		console.log("The note has been added");
	}else{
		console.log("The title already exists!");
	}
	
	fs.writeFileSync("Notes.json",JSON.stringify(NotesList)); //parse the JSON back to strings and write it to the file.
}
//REMOVE Command
const remove = (title)=>{
	//we create an empty list. Read the content of the Notes.json file, Find the index of that 'item', remove the item and  then rewrite the file.
	let NotesList = [];
	try{
		NotesList = JSON.parse(fs.readFileSync('./Notes.json'));
	}catch(e){
		//console.log(e);
	}
	let index = NotesList.findIndex((x)=>x.title === title);
	if(index === -1){
		console.log("Note not found");
	}else{
		//filter function to filter the title that we need to remove.
		const filteredList = NotesList.filter((x)=>x.title !== title);
		//console.log(filteredList);
		//now we need to write this filteredList to Notes.json
		fs.writeFileSync("Notes.json",JSON.stringify(filteredList));
		console.log("The title has been removed");
	}
}
//LIST Command
const list =()=>{
	let NotesList =[];
	try{
		NotesList = JSON.parse(fs.readFileSync('./Notes.json'));
	}catch(e){
		//console.log(e);
	}
	const Titles = NotesList.filter((x)=>x.title !== null);
	console.log("Your Notes: ");
	for(var i=0;i<NotesList.length;i++){
		console.log(NotesList[i].title);
	}
}
//printing the body of given Title
const read =(title)=>{
	let NotesList =[];
	try{
		NotesList = JSON.parse(fs.readFileSync('./Notes.json'));
	}catch(e){}
	//Now we need to find the index of the Title
	let index = NotesList.findIndex((x)=>x.title===title);
	if(index !==-1){
		console.log(NotesList[index].body);
	}
}
//exporting the commands we are creating
module.exports ={
	add:add,
	remove:remove,
	list:list,
	read:read
	
};