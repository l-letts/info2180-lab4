"use struct";
var startValue = 0;

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

    var Flag = 0;
    var TouchWall = 0;
    var MazeLeft = 0;
    var PositionFlag = true;


End.onmouseover = function()
      {
          
          if(Flag === 1 && TouchWall === 0)
          {
              Status.innerHTML = "You Win!";
          }
      } 
      
document.getElementById("start").onmouseover = function()
 {
        Flag = 1;
    }


   
  