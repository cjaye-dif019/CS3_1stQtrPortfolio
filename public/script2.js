//NG3

    let sure = window.confirm("Sure of your numbers?")
    if (sure) 
    {
        let totalRequired = (Number(numberperday) * 365) * (Number(maxAge) - Number(age));

        document.write("You will need " + totalRequired + " to last until the ripe old age of " + maxAge + ".")

        alert(`You will need ${totalRequired} to last you until the ripe old age of ${maxAge} .`);

        console.log("You will need "+ totalRequired + " to last you until the ripe old age of " + maxAge + ".");
    }
    else
    {
        window.alert("Please click run again.")
    }