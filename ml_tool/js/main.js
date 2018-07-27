function i(string) 
{
    return parseInt(string)
}

function set(id,value)
{       
    $(id).html(value)
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
          console.log(r)

          hero.setAttack(r["0"].ITEM_PHYSICAL_ATK);
          hero.setAttackSpeed(r["0"].ITEM_ATK_SPEED_PER);
          hero.setCdr(r["0"].ITEM_CD_REDUCTION);
          hero.setCritChance(r["0"].ITEM_CRIT_CHANCE);
          hero.setCritReduction(r["0"].ITEM_CRIT_REDUCTION);
          hero.setHp(r["0"].ITEM_HP);
          hero.setHpRegen(r["0"].ITEM_HP_REGEN);
          hero.setLifesteal(r["0"].ITEM_LIFESTEAL);
          hero.setMagicArmor(r["0"].ITEM_MAGIC_ARMOR);
          hero.setMagicPenFlat(r["0"].ITEM_MAGIC_PEN_FLAT);
          hero.setMagicPenPer(r["0"].ITEM_MAGIC_PEN_PER);
          hero.setMagicPower(r["0"].ITEM_MAGIC_POWER);
          hero.setMana(r["0"].ITEM_MANA);
          hero.setManaRegen(r["0"].ITEM_MANA_REGEN);
          hero.setMoveSpeed(r["0"].ITEM_MOVE_SPEED_FLAT);
          hero.setMoveSpeedPer(r["0"].ITEM_MOVE_SPEED_PER);
          hero.setArmor(r["0"].ITEM_PHYSICAL_ARMOR);
          hero.setPhysicalPen(r["0"].ITEM_PHYSICAL_PEN_PER);
          hero.setSpellVamp(r["0"].ITEM_SPELL_LIFESTEAL);
          hero.setResilience(r["0"].RESILIENCE);

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
          hero.setAttackGrowth(hero.getAttackGrowth(),lvl);
          hero.setAttackSpeedGrowth(hero.getAttackSpeedGrowth(),lvl);
          hero.setArmorGrowth(hero.getArmorGrowth(),lvl);
          hero.setMagicArmorGrowth(hero.getMagicArmorGrowth(),lvl);
          hero.setHpGrowth(hero.getHpGrowth(),lvl);
          hero.setHpRegenGrowth(hero.getHpRegenGrowth(),lvl);
          hero.setManaRegenGrowth(hero.getManaRegenGrowth(),lvl);
          hero.setManaGrowth(hero.getManaGrowth(),lvl);
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
          set('#move_speed',hero.getMoveSpeed())
          set('#cooldown_reduction',hero.getCdr())
          set('#attack_speed',parseFloat(hero.getAttackSpeed()))
          set('#crit_chance',hero.getCritChance())
          set('#attack',hero.getAttack())
          set('#crit_reduction',hero.getCritReduction())
          set('#resilience',hero.getResilience())
}

function getChampionStat(id,level,slot1 = 95, slot2 = 95, slot3 = 95, slot4 = 95, slot5 = 95, slot6 = 95) 
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
          add_level(hero,hero.getHeroLevel())

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

   if( level == '' ) { level = 0 }

   getChampionStat(id,level,slot1,slot2,slot3,slot4,slot5,slot6)

});











