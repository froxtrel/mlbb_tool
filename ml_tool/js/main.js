function i(string) 
{
    return parseInt(string)
}

function f(string) 
{
    return parseFloat(string)
}

function set(id,value)
{       
    $(id).html(value)
}


function add_emblem(hero,emblem_id) 
{
     $.ajax(
     {
      url: 'http://localhost/ml_tool/simulations/get_emblem_stats/' + emblem_id,
      method: 'POST',
      dataType: 'json',
      success: function (r) 
      {   
          console.log(r)
          console.log(hero.getEm_level());
        
      },
      error: function (err) 
      {
          return err
      }
  })
}

function add_item(hero,slot) 
{
     $.ajax(
     {
      url: 'http://localhost/ml_tool/simulations/get_item_base_stats/' + slot,
      method: 'POST',
      dataType: 'json',
      success: function (r) 
      {   
          // console.log(r)

          hero.setAttack((parseInt(hero.getAttack()) + parseInt(r["0"].ITEM_PHYSICAL_ATK)));
          hero.setAttackSpeed((parseFloat(hero.getAttackSpeed()) + parseFloat(r["0"].ITEM_ATK_SPEED_PER/100)));
          hero.setCdr((parseInt(hero.getCdr()) + parseInt(r["0"].ITEM_CD_REDUCTION)));
          hero.setCritChance((parseInt(hero.getCritChance()) + parseInt(r["0"].ITEM_CRIT_CHANCE)));
          hero.setCritReduction((parseInt(hero.getCritReduction()) + parseInt(r["0"].ITEM_CRIT_REDUCTION)));
          hero.setHp((parseInt(hero.getHp()) + parseInt(r["0"].ITEM_HP))); 
          hero.setHpRegen((parseInt(hero.getHpRegen()) + parseInt(r["0"].ITEM_HP_REGEN)));
          hero.setLifesteal((parseInt(hero.getLifesteal()) + parseInt(r["0"].ITEM_LIFESTEAL)));
          hero.setMagicArmor((parseInt(hero.getMagicResistance()) + parseInt(r["0"].ITEM_MAGIC_ARMOR)));
          hero.setMagicPenFlat((parseInt(hero.getMagicPenFlat()) + parseInt(r["0"].ITEM_MAGIC_PEN_FLAT)));
          hero.setMagicPenPer((parseInt(hero.getMagicPenPer()) + parseInt(r["0"].ITEM_MAGIC_PEN_PER)));
          hero.setMagicPower((parseInt(hero.getMagicPower()) + parseInt(r["0"].ITEM_MAGIC_POWER)));
          hero.setMana((parseInt(hero.getMana()) + parseInt(r["0"].ITEM_MANA)));
          hero.setManaRegen((parseInt(hero.getManaRegen()) + parseInt(r["0"].ITEM_MANA_REGEN)));
          hero.setMoveSpeed((parseInt(hero.getMoveSpeed()) + parseInt(r["0"].ITEM_MOVE_SPEED_FLAT)));
          hero.setMoveSpeedPer((parseInt(hero.getMoveSpeedPer()) + parseInt(r["0"].ITEM_MOVE_SPEED_PER)));
          hero.setArmor((parseInt(hero.getArmor()) + parseInt(r["0"].ITEM_PHYSICAL_ARMOR)));
          hero.setPhysicalPen((parseInt(hero.getPhysicalPen()) + parseInt(r["0"].ITEM_PHYSICAL_PEN_PER)));
          hero.setSpellVamp((parseInt(hero.getSpellVamp()) + parseInt(r["0"].ITEM_SPELL_LIFESTEAL)));
          hero.setResilience((parseInt(hero.getResilience()) + parseInt(r["0"].RESILIENCE)));

          show_stat(hero);

      },
      error: function (err) 
      {
          return err
      }
  })
}

function add_level(hero,lvl)
{
          hero.setAttackGrowth((i(hero.getAttack()) + i(hero.getAttackGrowth()) * i(lvl))); 
          hero.setAttackSpeedGrowth((parseFloat(hero.getAttackSpeed()/100) + parseFloat((i(hero.getAttackSpeedGrowth()) * i(lvl))/1000)));
          hero.setArmorGrowth((i(hero.getArmor()) + i(hero.getArmorGrowth()) * i(lvl)));
          hero.setMagicArmorGrowth((i(hero.getMagicResistance()) + (i(hero.getMagicArmorGrowth()) * i(lvl))));
          hero.setHpGrowth((i(hero.getHp()) + i(hero.getHpGrowth()) * i(lvl)));
          hero.setHpRegenGrowth((i(hero.getHpRegen()) + i(hero.getHpRegenGrowth()) * i(lvl)));
          hero.setManaRegenGrowth((i(hero.getManaRegen()) + i(hero.getManaRegenGrowth()) * i(lvl)));
          hero.setManaGrowth((i(hero.getMana()) + i(hero.getManaGrowth()) * i(lvl)));
}

function show_stat(hero)
{
          set('#hp',hero.getHp())
          set('#mana',hero.getMana())
          set('#armor',hero.getArmor())
          set('#physical_pen',hero.getPhysicalPen())
          set('#lifesteal',hero.getLifesteal())
          set('#hp_regen',hero.getHpRegen())
          set('#mana_regen',hero.getManaRegen())
          set('#magic_power',hero.getMagicPower())
          set('#magic_resistance',hero.getMagicResistance())
          set('#magic_pen',hero.getMagicPenFlat())
          set('#spell_vamp',hero.getSpellVamp())
          set('#move_speed',f(hero.getMoveSpeed() + (f(hero.getMoveSpeed() * (hero.getMoveSpeedPer()/100))))) 
          set('#cooldown_reduction',hero.getCdr())
          set('#attack_speed',f(hero.getAttackSpeed()))
          set('#crit_chance',hero.getCritChance())
          set('#attack',hero.getAttack())
          set('#crit_reduction',hero.getCritReduction())
          set('#resilience',hero.getResilience())
}

function getChampionStat(id,level,slot1 = 95, slot2 = 95, slot3 = 95, slot4 = 95, slot5 = 95, slot6 = 95 , emblem_id = 10 ,emblem_level = 0) 
{
  $.ajax(
  {
      url: 'http://localhost/ml_tool/simulations/get_hero_base_stats/' + id,
      method: 'get',
      dataType: 'json',
      success: function (r) 
      {   
          // console.log(r)
          const hero = new Champion(r["0"].HERO_HP,r["0"].HERO_MANA,
            r["0"].HERO_ARMOR,r["0"].HERO_HP_REGEN,r["0"].HERO_MANA_REGEN,
            r["0"].HERO_MAGIC_ARMOR,r["0"].HERO_MOVE_SPEED,
            r["0"].HERO_ATK_SPEED,r["0"].HERO_PHYSICAL_ATK)
       
          hero.setHeroGrowth(r["0"].HERO_PHYSICAL_ATK_GR,r["0"].HERO_HP_GR,
            r["0"].HERO_MANA_GR,r["0"].HERO_ATK_SPEED_GR,r["0"].HERO_HP_REGEN_GR,
            r["0"].HERO_MAGIC_ARMOR_GR,r["0"].HERO_MANA_REGEN_GR,
            r["0"].HERO_ARMOR_GR)

          hero.setHeroLevel(level)  
          hero.setEm_level(emblem_level);

          add_level(hero,hero.getHeroLevel())
          add_emblem(hero,emblem_id)
          add_item(hero,slot1)
          add_item(hero,slot2)
          add_item(hero,slot3)
          add_item(hero,slot4)
          add_item(hero,slot5)
          add_item(hero,slot6)

      },
      error: function (err) 
      {
          return err
      }
  })

}


$( "#hero,#level,.slot" ).change(function() {

   var id    = $( "#hero option:selected"  ).val()
   var level = $( "#level option:selected" ).val()
   var slot1 = $( "#slot1 option:selected" ).val()
   var slot2 = $( "#slot2 option:selected" ).val()
   var slot3 = $( "#slot3 option:selected" ).val()
   var slot4 = $( "#slot4 option:selected" ).val()
   var slot5 = $( "#slot5 option:selected" ).val()
   var slot6 = $( "#slot6 option:selected" ).val()
   var emblem_id = $( "#emblem option:selected" ).val()
   var emblem_level = $( "#em_level option:selected" ).val()

   if( level == '' ) { level = 0 }

   getChampionStat(id,level,slot1,slot2,slot3,slot4,slot5,slot6,emblem_id,emblem_level)

});











