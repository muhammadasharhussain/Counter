var btn = document.querySelector('button')
var text = document.querySelector(".resultText")
var ans = 0;
var reset = document.querySelector(".rst")

btn.addEventListener("click", function(){
ans++;
var span = document.createElement("span");
	span.appendChild(document.createTextNode(ans));
text.appendChild(span);
    text.textContent = ans;

});
reset.addEventListener("click",function(){
	ans=0;
	text.textContent = ans;
})