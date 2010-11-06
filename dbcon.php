<?php
$mysql_access=mysql_connect('localhost', 'root', '123') or die(mysql_error());
mysql_select_db('fxpro',$mysql_access) or die(mysql_error());
?>
