let dset = document.getElementsByClassName("die");
let q = document.getElementsByTagName("td");
let s = document.querySelectorAll("td.ev");
let d20 = dset[0];
let d20w = 0;
let n20 = 0;
let d20q = q[4];
let d20s = s[0];
let d12 = dset[1];
let d12w = 0;
let n12 = 0;
let d12q = q[7];
let d12s = s[1];
let d10 = dset[2];
let d10w = 0;
let n10 = 0;
let d10q = q[10];
let d10s = s[2];
let d8 = dset[3];
let d8w = 0;
let n8 = 0;
let d8q = q[13];
let d8s = s[3];
let d6 = dset[4];
let d6w = 0;
let n6 = 0;
let d6q = q[16];
let d6s = s[4];
let d4 = dset[5];
let d4w = 0;
let n4 = 0;
let d4q = q[19];
let d4s = s[5];
let dcust = dset[6];
let dcustw = 0;
let ncust = 0;
let dcustq = q[22];
let dcusts = s[6];
let diceendsum = 0;
let diceendsummodyf = 0;
let modyfikator = document.querySelector("#modyf");
let dowynikujs = document.querySelector("#dowyniku");

d20.addEventListener("click", function()
{
    n20 ++;
    d20w = d20w + Math.floor(Math.random() * 20) + 1;
    d20s.innerHTML = d20w;
    diceendsum = diceendsum + d20w;
    d20q.innerHTML =  n20 + " x D20";
})

d12.addEventListener("click", function()
{
    n12 ++;
    d12w = d12w + Math.floor(Math.random() * 12) + 1;
    d12s.innerHTML = d12w;
    diceendsum = diceendsum + d12w;
    d12q.innerHTML =  n12 + " x D12";
})

d10.addEventListener("click", function()
{
    n10 ++;
    d10w = d10w + Math.floor(Math.random() * 10) + 1;
    d10s.innerHTML = d10w;
    diceendsum = diceendsum + d10w;
    d10q.innerHTML =  n10 + " x D10";
})

d8.addEventListener("click", function()
{
    n8 ++;
    d8w = d8w + Math.floor(Math.random() * 8) + 1;
    d8s.innerHTML = d8w;
    diceendsum = diceendsum + d8w;
    d8q.innerHTML =  n8 + " x D8";
})

d6.addEventListener("click", function()
{
    n6 ++;
    d6w = d6w + Math.floor(Math.random() * 6) + 1;
    d6s.innerHTML = d6w;
    diceendsum = diceendsum + d6w;
    d6q.innerHTML =  n6 + " x D6";
})

d4.addEventListener("click", function()
{
    n4 ++;
    d4w = d4w + Math.floor(Math.random() * 4) + 1;
    d4s.innerHTML = d4w;
    diceendsum = diceendsum + d4w;
    d4q.innerHTML =  n4 + " x D4";
})

dcust.addEventListener("click", function()
{
    let cust = parseInt(prompt("Ile ścianek ma mieć Twoja gość? "));
    ncust ++;
    dcustw = dcustw + Math.floor(Math.random() * cust) + 1;
    dcusts.innerHTML = dcustw;
    diceendsum = diceendsum + dcustw;
    dcustq.innerHTML =  ncust + " sztk";
})

function showFullSum()
{
    diceendsummodyf = parseInt(modyfikator.value) + parseInt(diceendsum);
    dowynikujs.innerHTML = ("Wynik bez modyfikatora to " + diceendsum + ", a z modyfikatorem równa się " + diceendsummodyf + "<br>")
}

function resetDR()
{
    dowynikujs.innerHTML = "";
    d20s.innerHTML = "";
    d20q.innerHTML = "";
    d12s.innerHTML = "";
    d12q.innerHTML = "";
    d10s.innerHTML = "";
    d10q.innerHTML = "";
    d8s.innerHTML = "";
    d8q.innerHTML = "";
    d6s.innerHTML = "";
    d6q.innerHTML = "";
    d4s.innerHTML = "";
    d4q.innerHTML = "";
    dcusts.innerHTML = "";
    dcustq.innerHTML = "";
    modyfikator.value = 0;
}