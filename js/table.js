/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-16 13:40:56
 * @version $Id$
 */

document.getElementById("c2").addEventListener("click", function(){
	var time = new Date();
	t = time.getFullYear() + "-" + (time.getMonth()+1) + "-" + time.getDate();
    document.getElementById("c2").innerHTML = t;
});


document.getElementById("c1").addEventListener("click", function(){
    document.getElementById("c1").style.backgroundColor = 'red';
});

document.getElementById('c6').addEventListener("click", function(){
	document.getElementById("c6").
});