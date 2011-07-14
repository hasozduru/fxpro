<?php
// new revert (2 of 2)
include('dbcon.php');

$per_page=5;
$page=$_GET['page'];

$start=($page-1)*5;
$sql='select * from reviews limit '.$start.',5';
$rsd=mysql_query($sql);
?>
<?php
while ($row=mysql_fetch_object($rsd)) {
	$sql2='SELECT * FROM comments WHERE review_id='.$row->id;
	$rsd2=mysql_query($sql2);
	?>
	<div class='each_rec'><?php echo $row->review;?><br />
	<?php
	while($row2=mysql_fetch_object($rsd2)) {
		echo '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'.$row2->comment.'<br />';
	}
	echo '<a href="javascript:alert(\'To do\');">Add new comment</a>';
	?>
	</div>
	<?php
}
?>
