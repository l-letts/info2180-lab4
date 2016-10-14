window.onload = function() 
{
    document.getElementById("boundary1").onmouseover = start;
    
    
        var borders = document.querySelectorAll(".boundary"); 
    
    for (var i = 0; i <borders.length; i++)
        
        {
            borders[i].onmouseover=function()
            {
                console.log("hit");
                for (var j=0; j<borders.length; j++)
                    {
                        borders[j].className= "boundary youlose";
                    }
            }
        }
    }



    
    flag=false;
    
    var bound = document.querySelectorAll(".boundary");
    var end = document.querySelectorAll("#end");
    End.onmouseover = function()
    {
        if (Flag ===1 && Touchwall === 0)
            {
                Status.innerHTML = "Yup, You Win!!";
            }
    }
    
   