<br>
<div class="container-fluid" >
	<div class="row">
		<div class="col-md-12">
			 <table data-sort-name="stargazers_count" data-sort-order="desc" data-toggle="table" class="table-striped">
                  <thead>
                    <tr>
                    	<?php foreach ($hero_column as $row):?>
                    		 	<th data-sortable="true"><?=str_replace('HERO','',str_replace('PHOTO',' ',str_replace('_', ' ', $row)));?></th> 
                    	<?php endforeach ;?>                 
                    </tr>
                    <tbody>
    
                    	<?php foreach ($hero as $row):
                    		if($row == "HERO_NAME")
                    			continue;
                    	?>
                    		<tr>
                    		<?php foreach ($hero_column as $key):?>
                    		 	<td>
                    		 		<?php 

                    		 			if($key == 'HERO_PHOTO') 
                    		 				echo "<img src=".$row[$key]." width='70px' height='70px' class='img-circle'><p><b>".$row['HERO_NAME']."</b></p>";                 		 	
                    		 			else                         		 			
                    		 				echo $row[$key];                   		 			

                    		 		?>                   		 			
                    		 	</td>
                    	    <?php endforeach ;?>  
                    	    </tr>
                    	<?php endforeach ;?>   

                    </tbody>
                  </thead>
                </table>
		</div>
	</div>
<hr>

        <div class="fb-comments" data-href="http://localhost/ci_boilerplate/home/item.html" data-width="100%" data-numposts="5"></div>
</div>


