

function loadobject()
{
    var myselect = document.getElementById('fs');
var allinput = document.querySelectorAll("input,textarea");
var joutput = document.getElementById('output');
    console.log(allinput);

allinput[0].addEventListener("input",()=>{
        var a = allinput[0].value;
        joutput.innerHTML = a;
});

allinput[1].addEventListener("input",()=>{
        joutput.style.color = allinput[1].value;
});

allinput[2].addEventListener("input",()=>{
        joutput.style.backgroundColor = allinput[2].value;
});


var i = 10;
    for(i;i<=100;i++)
    {
        myselect.innerHTML+="<option>"+i+"</option>";
    }


myselect.addEventListener("change",()=>{
    joutput.style.fontSize=myselect.value+"px";
})



}

loadobject();


