var startValue = 0;
var gameStatus = true;

window.onload = function () {
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

End.onmouseover = function()
      {
          
          if(Flag === 1 && TouchWall === 0)
          {
              Status.innerHTML = "You Win!";
          }
      } 

Start.addEventListener("click",function(){
          
          //Reset wall color
          for (var i = 0; i < document.querySelectorAll('.boundary').length; i++)
              {
                  document.querySelectorAll('.boundary')[i].style.backgroundColor = "#eeeeee";   
              }  
          //Reset Flags and message
          TouchWall = 0;
          Status.innerHTML = "Move your mouse over the \"S\" to begin.";
        
        
           MazeLeft = maze.offsetLeft;  
           document.getElementById('maze').onmousemove = function()
          {
            Checker(event);  
          }
    
      });


    
var startButton = document.getElementById("start");

    startButton.addEventListener('click', function()
    {
        //alert('Game reset!');
        document.getElementById("status").innerHTML = "Game reset!";
        gameStatus = true;
        for (var i = 0; i < boundaries.length; i++) 
        {
        boundaries[i].setAttribute('class','boundary');
        }
    });
   
  