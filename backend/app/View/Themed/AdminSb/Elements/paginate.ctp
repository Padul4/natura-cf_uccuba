<p><?php echo $this->Paginator->counter('Total registros: {:count}');?></p>

<ul class="pagination">
<?php 
	if($this->Paginator->counter('{:pages}') > 1){ 
		echo $this -> Paginator -> prev('‹‹', array('tag' => 'li'), null, array('tag' => 'li','class' => 'disabled','disabledTag' => 'a'));
		echo $this -> Paginator -> numbers(array(
										'separator' => '', 
										'class'=>'',
										'currentTag' => 'a',
										'currentClass' => 'active',
										'tag' => 'li'));
		echo $this -> Paginator -> next('››', array('tag' => 'li'), null, array('tag' => 'li','class' => 'disabled','disabledTag' => 'a'));
	}
?>
</ul>


