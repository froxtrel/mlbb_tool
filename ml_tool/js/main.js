function i(string) 
{
    return parseInt(string)
}

function set(id,value,level,growth)
{      
    if(id == '#attack_speed') 
    {
         var added_stat =  parseFloat(i(growth) * i(level)/1000)
         added_stat = parseFloat(added_stat + value)
         $(id).html(added_stat.toFixed(2))
    } 
    else 
    {
         var added_stat = i(value) + (i(growth) * i(level))
         $(id).html(added_stat)
    }

}

function getChampionStat(id,level) 
{

  $.ajax(
  {
      url: 'http://localhost/ml_tool/simulations/get_hero_base_stats/' + id,
      method: 'get',
      dataType: 'json',
      success: function (r) 
      {   
        console.log(r)

          const hero = new Champion(r["0"].HERO_HP,r["0"].HERO_MANA,
            r["0"].HERO_ARMOR,r["0"].HERO_HP_REGEN,r["0"].HERO_MANA_REGEN,
            r["0"].HERO_MAGIC_ARMOR,r["0"].HERO_MOVE_SPEED,
            r["0"].HERO_ATK_SPEED,r["0"].HERO_PHYSICAL_ATK)
       
          hero.setHeroGrowth(r["0"].HERO_PHYSICAL_ATK_GR,r["0"].HERO_HP_GR,
            r["0"].HERO_MANA_GR,r["0"].HERO_ATK_SPEED_GR,r["0"].HERO_HP_REGEN_GR,
            r["0"].HERO_MAGIC_ARMOR_GR,r["0"].HERO_MANA_REGEN_GR,
            r["0"].HERO_ARMOR_GR)

          hero.setHeroLevel(level)

          set('#hp',hero.getHp(),hero.getHeroLevel(),hero.getHpGrowth())
          set('#mana',hero.getMana(),hero.getHeroLevel(),hero.getManaGrowth())
          set('#armor',hero.getArmor(),hero.getHeroLevel(),hero.getArmorGrowth())
          set('#physical_pen',hero.getPhysicalPen(),hero.getHeroLevel(),0)
          set('#lifesteal',hero.getLifesteal(),hero.getHeroLevel(),0)
          set('#hp_regen',hero.getHpRegen(),hero.getHeroLevel(),hero.getHpRegenGrowth())
          set('#mana_regen',hero.getManaRegen(),hero.getHeroLevel(),hero.getManaRegenGrowth())
          set('#magic_power',hero.getMagicPower(),hero.getHeroLevel(),0)
          set('#magic_resistance',hero.getMagicResistance(),hero.getHeroLevel(),hero.getMagicArmorGrowth())
          set('#magic_pen',hero.getMagicPen(),hero.getHeroLevel(),0)
          set('#spell_vamp',hero.getSpellVamp(),hero.getHeroLevel(),0)
          set('#move_speed',hero.getMoveSpeed(),hero.getHeroLevel(),0)
          set('#cooldown_reduction',hero.getCdr(),hero.getHeroLevel(),0)
          set('#attack_speed',parseFloat(hero.getAttackSpeed()/100),hero.getHeroLevel(),hero.getAttackSpeedGrowth())
          set('#crit_chance',hero.getCritChance(),hero.getHeroLevel(),0)
          set('#attack',hero.getAttack(),hero.getHeroLevel(),hero.getAttackGrowth())

      },
      error: function (err) 
      {
          return err
      }
  })

}


$( "#hero,#level" ).change(function() {

   var id    = $( "#hero option:selected" ).val();
   var level = $( "#level option:selected" ).val();

   if(level == '') {
      level = 1
   }

   getChampionStat(id,level);

});






