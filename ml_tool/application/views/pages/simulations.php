<div class="container" >

	 <span class="label label-primary">Patch Version : 1.2.89.304.2</span>

    <ul class="nav nav-tabs">
      <li class="active"><a data-toggle="tab" href="#home">CHAMPION</a></li>
     <!--  <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
      <li><a data-toggle="tab" href="#menu2">Menu 2</a></li> -->
    </ul>

    <div class="tab-content">

    <div id="home" class="tab-pane fade in active">
    <br>
    <div class="row">
		<div class="col-md-6">

                  <select class="form-control" id="hero" name="hero" required>
                        <option value="" disabled selected>Select your champion</option>
                           <?php foreach ($hero as $row) :?>
                              <option  value="<?=$row['ID'];?>" data-image="<?=$row['HERO_PHOTO'];?>"> &nbsp; &nbsp; <b> <?=$row['HERO_NAME'];?> </b></option>
                           <?php endforeach;?>
                      </select>
                    <p>
                     <select class="form-control" id="level" name="level" required>
                        <option value="" disabled selected>Select your champion level</option>
                           <?php $x = 0; while ( $x <= 14) {;?>
                            <option value="<?=$x;?>"> CHAMPION LEVEL : <?=$x + 1;?> </option>
                           <?php $x++; };?>
                      </select>
                    <p>

                  <!--  <h3><b> <span class="glyphicon glyphicon-subscript"></span> ITEM </b></h3>  -->
                  <hr>
                  <center> ITEM </center>

                   <?php $x = 1; while ( $x <= 6) {;?>

                    <p>
                     <select class="slot form-control" id="slot<?=$x;?>" name="slot<?=$x;?>" required>
                        <option value="95" disabled selected>Select item slot <?=$x;?> </option>
                           <?php foreach ($item as $row) :?>
                              <option  value="<?=$row['ID'];?>" data-image="<?=$row['ITEM_PHOTO'];?>"> ITEM <?=$x;?> : <?=$row['ITEM_NAME'];?> </option>
                           <?php endforeach;?>
                      </select>
                    <p>

            <?php $x++; };?>
    
		</div>

    <div class="col-md-6">
        
        <hr>

        <center>EMBLEM</center>

    </div>
	</div>

  <div class="row">
      <div class="col-md-12">
      <hr>

        <center>CHAMPION ATTRIBUTES</center>
        <p></p>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>ATTRIBUTES</th>
              <th>VALUE</th>
              <th>ATTRIBUTES</th>
              <th>VALUE</th>
              <th>ATTRIBUTES</th>
              <th>VALUE</th>
              <th>ATTRIBUTES</th>
              <th>VALUE</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td>ATTACK</td>
              <td><span id="attack">0</span></td>
              <td>HP</td>
              <td><span id="hp">0</span></td>
              <td>MANA</td>
              <td><span id="mana">0</span></td>
              <td>ARMOR</td>
              <td><span id="armor">0</span></td>
            </tr>

            <tr>
              <td>PHYSICAL PEN</td>
              <td><span id="physical_pen">0</span></td>
              <td>LIFESTEAL</td>
              <td><span id="lifesteal">0</span></td>
              <td>HP REGEN</td>
              <td><span id="hp_regen">0</span></td>       
              <td>MANA REGEN</td>
              <td><span id="mana_regen">0</span></td>
            </tr>

            <tr>
              <td>MAGIC POWER</td>
              <td><span id="magic_power">0</span></td>
              <td>MAGIC RESISTANCE</td>
              <td><span id="magic_resistance">0</span></td>
              <td>MAGIC PEN</td>
              <td><span id="magic_pen">0</span></td>
              <td>SPELL VAMP</td>
              <td><span id="spell_vamp">0</span></td>
            </tr>

            <tr>
              <td>MOVEMENT SPEED</td>
              <td><span id="move_speed">0</span></td>
              <td>COOLDOWN REDUCTION</td>
              <td><span id="cooldown_reduction">0</span></td>
              <td>ATTACK SPEED</td>
              <td><span id="attack_speed">0</span></td>
              <td>CRIT CHANCE</td>
              <td><span id="crit_chance">0</span></td>
            </tr>

            <tr>
              <td>CRIT REDUCTION</td>
              <td><span id="crit_reduction">0</span></td>
              <td>RESILIENCE</td>
              <td><span id="resilience">0</span></td>
              <td>RESERVED</td>
              <td><span id="crit_reduction">0</span></td>
              <td>RESERVED</td>
              <td><span id="resilience">0</span></td>
            </tr>
           
          </tbody>
        </table>
      </div>
  </div>

</div>

 <div id="menu1" class="tab-pane fade">
    <h3>Menu 1</h3>
    <p>Some content in menu 1.</p>
  </div>

  <div id="menu2" class="tab-pane fade">
    <h3>Menu 2</h3>
    <p>Some content in menu 2.</p>
  </div>

</div>
<hr>

        <div class="fb-comments" data-href="http://localhost/ci_boilerplate/home/item.html" data-width="100%" data-numposts="5"></div>
</div>


