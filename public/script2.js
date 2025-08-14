//NG3

function result() 
{
    let age = Number(document.getElementById("age").value);
    let maxAge  = Number(document.getElementById("maxAge").value);
    let NumPerday = Number(document.getElementById("numPerday").value);

    let totalRequired = (Number(NumPerday) * 365) * (Number(maxAge) - Number(age));

    document.getElementById("resultHere").innerHTML = `<b> You will need ${totalRequired} to last you until the ripe old age of ${maxAge}.</b>`;
}