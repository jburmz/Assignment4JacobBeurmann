var Graph = {};

//Cell Objects can be created with a first and last name
Graph.Cell = function(firstName, lastName)
{
	this.FirstName = firstName;
	this.LastName = lastName;
}

//Cell Objects can have character names appended to them
Graph.Cell.prototype.SetCharacter = function(characterName)
{
	this.CharacterName = characterName;
}

//This Method returns the FirstName, LastName, and CharacterName of the Cell Object
Graph.Cell.prototype.GetData = function()
{
	return this.FirstName + " " + this.LastName + " - Character: " +this.CharacterName;
}

//Creating Several Objects
Graph.Tyrion = new Graph.Cell("Peter", "Dinklage");
Graph.Tyrion.SetCharacter("Tyrion Lannister");

Graph.Robb = new Graph.Cell("Richard", "Madden");
Graph.Robb.SetCharacter("Robbert Stark");

Graph.Arya = new Graph.Cell("Maisie", "Williams");
Graph.Arya.SetCharacter("Arya Stark");

Graph.Jaqen = new Graph.Cell("Tom", "Wlaschiha");
Graph.Jaqen.SetCharacter("Jaqen H'ghar");

Graph.Tywin = new Graph.Cell("Charles", "Dance");
Graph.Tywin.SetCharacter("Tywin Lannister");

Graph.Ned = new Graph.Cell("Sean", "Bean");
Graph.Ned.SetCharacter("Ned Stark");

Graph.Varys = new Graph.Cell("Conleth", "Hill");
Graph.Varys.SetCharacter("Varys");

Graph.Littlefinger = new Graph.Cell("Aiden", "Gillen");
Graph.Littlefinger.SetCharacter("Littlefinger");

Graph.Jorah = new Graph.Cell("Lain", "Glen");
Graph.Jorah.SetCharacter("Jorah Mormont");

Graph.Jon = new Graph.Cell("Kit", "Harington");
Graph.Jon.SetCharacter("Jon Snow");


//Adding the objects created above to an array
var cells = [ Graph.Tyrion, Graph.Robb, Graph.Arya, Graph.Jaqen, Graph.Tywin, Graph.Ned, Graph.Varys, Graph.Littlefinger, Graph.Jorah, Graph.Jon ];

//Run the init function on load
window.onload = init;
	function init()
	{
		var panels = document.getElementsByClassName("panel");
		
		//For each panel, set the innerHTML to the GetData output of each Cell object in the array
		for(var x = 0; x < panels.length; x++)
		{
			panels[x].innerHTML = cells[x].GetData();
		}
		
	}



