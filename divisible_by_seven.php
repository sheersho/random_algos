<html>
<head>
<title>Online PHP Script Execution</title>
</head>
<body>
<?php
 
 
    $newArray = [];
    $count = 0;
    $n = 53*10;
  
    for($i=0;$i<$n;++$i)
        {
            if( $i%7==0) 
                {
                   if($count==53)
                     break;
                   else
                     array_push($newArray, $i);
                     
                   $count = $count + 1;
                               
                }
        
        }
          
        
   print_r($newArray);
      

  

    

  
?>
</body>
</html>
