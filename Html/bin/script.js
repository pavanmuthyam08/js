function display()
{
	 butn=document.getElementById("b1");
	butn.textContent="Clicked";
	//search by name 
	const val=document.getElementsByName("bn");
	//the values should be stored in array we are itterarting the array now
	for(let x=0;x<val.length;x++)
	{
		val[x].disabled='disabled';
	}
	const her=document.getElementsByTagName('h1')
	for(let i=0;i<her.length;i++)
	{
		her[i].textContent='Done';
	}
}
//Here we are creating the New Tag in the HTML
function create()
{
	const tag=document.createElement("h2");
	tag.innerHTML="New Tag created";
	parent=document.querySelector("body");
	parent.appendChild(tag);
}
function createTitle()
{
	const tle=document.createElement("title");
	tle.innerHTML="Pavan";
	parent=document.querySelector("head");
	parent.appendChild(tle);
}
function deleteB()
{
	const parent=document.querySelector("body");
	const d=document.querySelector("h2");
	if(d)
	{
     parent.removeChild(d);
    }
}
document.getElementById("b5").onclick=function(){
	alert("We are used onclick method in js ");
}
function repace()
{
	const re=document.createElement("title");
	re.innerHTML="newTittle";
	parent=document.querySelector("head");
	parent.replaceChild(re,title);
}