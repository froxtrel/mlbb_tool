<div class="container" >

	 <span class="label label-primary">Patch Version : 1.2.89.304.2</span>
   <br><br>
   <div class="alert alert-warning">
     <strong>TODO :</strong> Add talent slot
   </div>

    <ul class="nav nav-tabs">
      <li class="active"><a data-toggle="tab" href="#home">YOU</a></li>
     <!--  <li><a data-toggle="tab" href="#menu1">Menu 1</a></li>
      <li><a data-toggle="tab" href="#menu2">Menu 2</a></li> -->
    </ul>

    <div class="tab-content">

    <div id="home" class="tab-pane fade in active">
    <br>
    <div class="row">
		<div class="col-md-6">

        <hr>

        <center>CHAMPION</center><p></p>

       <!--  <div class="radio">
          <label><input type="radio" name="hero_type" value="*" checked> ALL </label> &nbsp;
          <label><input type="radio" name="hero_type" value="" > Assasin </label> &nbsp;
          <label><input type="radio" name="hero_type" value="" > Tank </label> &nbsp;
          <label><input type="radio" name="hero_type" value="" > Fighter </label> &nbsp;
          <label><input type="radio" name="hero_type" value="" > Mage </label> &nbsp;
          <label><input type="radio" name="hero_type" value="" > Marksmen </label> &nbsp;
          <label><input type="radio" name="hero_type" value="" > Support </label> &nbsp;
        </div>
 -->
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

          <!-- <div class="radio">
            <label><input type="radio" name="item_type" value="*" checked> ALL </label> &nbsp;
            <label><input type="radio" name="item_type" value="ATTACK" > Attack </label> &nbsp;
            <label><input type="radio" name="item_type" value="MAGIC" > Magic </label> &nbsp;
            <label><input type="radio" name="item_type" value="DEFENSE" > Defense </label> &nbsp;
            <label><input type="radio" name="item_type" value="MOVEMENT" > Movement </label> &nbsp;
            <label><input type="radio" name="item_type" value="JUNGLE" > Jungle </label> &nbsp;
            <label><input type="radio" name="item_type" value="BASIC" > Basic </label> &nbsp;
          </div> -->

            <?php $x = 1; while ( $x <= 6) {;?>

                    <p>
                     <select  class="slot form-control" id="slot<?=$x;?>" name="slot<?=$x;?>" required>
                        <option value="95" disabled selected>Select item slot <?=$x;?> </option>
                           <?php foreach ($item as $row) :?>
                              <option value="<?=$row['ID'];?>" data-image="<?=$row['ITEM_PHOTO'];?>"> ITEM <?=$x;?> : <?=$row['ITEM_NAME'];?> </option>
                           <?php endforeach;?>
                      </select>
                    <p>

            <?php $x++; };?>

                    <p>
                     <select  class="slot form-control" id="potion" name="potion" required>
                        <option value="95" disabled selected>Select potion </option>
                           <?php foreach ($potion as $row) :?>
                              <option value="<?=$row['ID'];?>" data-image="<?=$row['ITEM_PHOTO'];?>"> POTION : <?=$row['ITEM_NAME'];?> </option>
                           <?php endforeach;?>
                      </select>
                    <p>

        <b>  <span class="glyphicon glyphicon-bitcoin"></span> &nbsp; TOTAL COST : <span id="cost">0</span> GOLD </b>
    
		</div>

    <div class="col-md-6">
        
        <hr>

        <center>EMBLEM</center><p></p>

                  <select class=" slot form-control" id="emblem" name="emblem" required>
                        <option value="10" disabled selected>Select your emblem </option>
                           <?php foreach ($emblem as $row) :?>
                              <option value="<?=$row['ID'];?>" data-image="<?=$row['EMBLEM_PHOTO'];?>"> &nbsp; &nbsp; <b> <?=$row['EMBLEM_NAME'];?> </b></option>
                           <?php endforeach;?>
                      </select>
                    <p>
                     <select class=" slot form-control" id="em_level" name="em_level" required>
                        <option value="0" disabled selected>Select your emblem level</option>
                           <?php $x = 0; while ( $x <= 60) {;?>
                            <option value="<?=$x;?>"> EMBLEM LEVEL : <?=$x;?> </option>
                           <?php $x++; };?>
                      </select>
                    <p>

         <hr>

        <center>TALENT </center>
        <center><p><small>[DEFAULT 3 POINT FOR EACH TALENT SELECTED ]</small></p></center>

        <div class="row" style="text-align:center;">
          <center><small class="label label-info"> TIER 1 </small> </center><p></p>
            <div class="col-md-4">
              <p id="talent_name_t1"></p>
                   <label><input type="radio" id="talent_id_1" name="talent_tier_1" ></label> &nbsp;
            </div>

            <div class="col-md-4">
              <p id="talent_name_t2"></p>
                  <label><input type="radio" id="talent_id_2" name="talent_tier_1" ></label> &nbsp;
            </div>

            <div class="col-md-4">
              <p id="talent_name_t3"></p>
                 <label><input type="radio" id="talent_id_3" name="talent_tier_1"  ></label> &nbsp;
            </div>

        </div>

        <br>

        <div class="row" style="text-align:center;">
          <center><small class="label label-info"> TIER 2 </small> </center><p></p>
            <div class="col-md-4">
              <p id="talent_name_t4"></p>
                  <label><input type="radio" id="talent_id_4" name="talent_tier_2" ></label> &nbsp;
            </div>

            <div class="col-md-4">
              <p id="talent_name_t5"></p>
                 <label><input type="radio" id="talent_id_5" name="talent_tier_2" ></label> &nbsp;
            </div>

            <div class="col-md-4">
              <p id="talent_name_t6"></p>
                <label><input type="radio" id="talent_id_6" name="talent_tier_2" ></label> &nbsp;
            </div>

        </div>


    </div>
	</div>  

  <div class="row">
          <div class="col-md-12">
      <hr>

        <center>CHAMPION ATTRIBUTES</center>
        <p></p>
        <table data-sort-name="stargazers_count" data-sort-order="desc" data-toggle="table" class="table-striped">
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


