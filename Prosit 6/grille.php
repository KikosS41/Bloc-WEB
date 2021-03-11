<?php

echo '<table>';
for ($i=1; $i<=$NbrLigne; $i++) {
   echo '<tr>';
   for ($j=1; $j<=$NbrCol; $j++) {
         echo '<td>';
         echo $affichage;
         echo '</td>';
   }
   echo '</tr>';
   $j=1;
}
echo '</table>';
?>