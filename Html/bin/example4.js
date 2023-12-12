parent=document.querySelector("body");
const text=document.createElement("h2");
text.textContent="Hi EveryOne";
parent.appendChild(text);

const text2=document.createElement("h2");
text2.textContent="I'm Using javascript Now'";
parent.appendChild(text2);

const image=document.createElement("img");
image.src="/home/administrator/eclipse-workspace/Html/bulbon.jpg";
parent.append(image);

const b1=document.createElement("button");
b1.textContent="button1";
b1.id="b1";
b1.style="color:red";
parent.appendChild(b1);

const b2=document.createElement("button");
b2.textContent="button2";
b2.id="b2";
b2.style="color:red";
parent.appendChild(b2);
b2.onclick=function(){chah2();}
const b3=document.createElement("button");
b3.textContent="button3";
b3.id="b3";
b3.name="btn";
b3.style="color:red";
parent.appendChild(b3);
b3.onclick=function(){chah2();}
const b4=document.createElement("button");
b4.textContent="button4";
b4.id="b4";
b4.name="btn";
b4.style="color:red";
parent.appendChild(b4);
b4.onclick=function(){newtext();}
b1.onclick=function()
{
	chah2();
	const bttn=document.getElementsByName("btn");
    for(let x=0;x<val.length;x++)
	{
		bttn[x].disabled='disabled';
	}
   b1.textContent='Im done';
}


function chah2(){
	const val=document.getElementsByTagName("h2");
	for(let x=0;x<val.length;x++)
	{
		val[x].textContent='Done';
	}
	b3.textContent='Im done';
}

function newtext()
{
	const tag=document.createElement("h2");
	tag.innerHTML="New Tag created";
	parent=document.querySelector("body");
	parent.appendChild(tag);
}




