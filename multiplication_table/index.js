document.write("<table>");   
for (var x = 1; x <= 9; x++)  {  
    document.write("<tr>");  
    for (var y = 1; y <= x; y++)  {  
        document.write("<th>"+ x +"*"+ y +"="+ y*x + "</th>");  
    }  
}  
document.write("</table>");
