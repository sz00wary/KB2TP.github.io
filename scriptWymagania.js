let isHC = false;
let zbior = document.getElementsByTagName('li');
let poledziewku = document.getElementById('dice');
let dzwiek = new Audio('dice-roll.mp3')
 
function cssSwitch()
{    
    if (isHC)
    {
        document.querySelector("#arkusz").outerHTML = '<link rel="stylesheet" href="style.css" id="arkusz">';
        document.getElementById('cs').style = 'width: 150px';
    }
    else
    {
        document.querySelector("#arkusz").outerHTML = '<link rel="stylesheet" href="stylehc.css" id="arkusz">';
        document.getElementById('cs').style = 'width: 310px';
    }
    isHC = !isHC;
}

window.onload = function() 
{
    document.getElementById('cs').addEventListener('click', cssSwitch);
    zbior[1].innerHTML = "Zew Cthulhu";
    zbior[2].innerHTML = "Warhammer"; 
};

poledziewku.addEventListener('mouseover', function()
{
    dzwiek.play();
}
)