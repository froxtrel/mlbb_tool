function i(string) 
{
    return parseInt(string)
}

function f(string) 
{
    return parseFloat(string)
}

function c(string)
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
          // console.log(r)

          hero.setEm_armor(f(r["0"].EMBLEM_ARMOR_GR) 
            * hero.getEm_level())

          hero.setEm_atk_speed(f(r["0"].EMBLEM_ATTACK_SPEED_GR) 
            * hero.getEm_level())

          hero.setEm_cdr(f(r["0"].EMBLEM_CDR_GR) 
            * hero.getEm_level())

          hero.setEm_crit_chance(f(r["0"].EMBLEM_CRIT_CHANCE_GR) 
            * hero.getEm_level())

          hero.setEm_hp(f(r["0"].EMBLEM_HP_GR) 
            * hero.getEm_level())

          hero.setEm_hp_regen(f(r["0"].EMBLEM_HP_REGEN_GR) 
            * hero.getEm_level())

          hero.setEm_lifesteal(f(r["0"].EMBLEM_LIFESTEAL_GR) 
            * hero.getEm_level())

          hero.setEm_magic_armor(f(r["0"].EMBLEM_MAGIC_ARMOR_GR) 
            * hero.getEm_level())

          hero.setEm_magic_pen_per(f(r["0"].EMBLEM_MAGIC_PEN_GR) 
            * hero.getEm_level())

          hero.setEm_magic_pen_flat(f(r["0"].EMBLEM_MAGIC_PEN_FLAT_GR) 
            * hero.getEm_level())

          hero.setEm_magic_power(f(r["0"].EMBLEM_MAGIC_POWER_GR) 
            * hero.getEm_level())

          hero.setEm_mana(f(r["0"].EMBLEM_MANA_GR) 
            * hero.getEm_level())

          hero.setEm_mana_regen(f(r["0"].EMBLEM_MANA_REGEN_GR) 
            * hero.getEm_level())

          hero.setEm_move_speed(f(r["0"].EMBLEM_MOVE_SPEED_GR) 
            * hero.getEm_level())

          hero.setEm_attack(f(r["0"].EMBLEM_PHYSICAL_ATTACK_GR) 
            * hero.getEm_level())

          hero.setEm_physical_pen(f(r["0"].EMBLEM_PHYSICAL_PEN_GR) 
            * hero.getEm_level())

          hero.setEm_physical_pen_flat(f(r["0"].EMBLEM_PHYSICAL_PEN_FLAT_GR) 
            * hero.getEm_level())

          hero.setEm_spell_vamp(f(r["0"].EMBLEM_SPELL_VAMP_GR) 
            * hero.getEm_level())

          show_stat(hero);
        
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

          hero.setAttack((parseInt(hero.getAttack()) 
            + parseInt(r["0"].ITEM_PHYSICAL_ATK)))

          hero.setAttackSpeed((parseFloat(hero.getAttackSpeed()) 
            + parseFloat(r["0"].ITEM_ATK_SPEED_PER/100)))

          hero.setCdr((parseInt(hero.getCdr()) 
            + parseInt(r["0"].ITEM_CD_REDUCTION)))

          hero.setCritChance((parseInt(hero.getCritChance()) 
            + parseInt(r["0"].ITEM_CRIT_CHANCE)))

          hero.setCritReduction((parseInt(hero.getCritReduction()) 
            + parseInt(r["0"].ITEM_CRIT_REDUCTION)))

          hero.setHp((parseInt(hero.getHp()) 
            + parseInt(r["0"].ITEM_HP)))

          hero.setHpRegen((parseInt(hero.getHpRegen()) 
            + parseInt(r["0"].ITEM_HP_REGEN)))

          hero.setLifesteal((parseInt(hero.getLifesteal()) 
            + parseInt(r["0"].ITEM_LIFESTEAL)))

          hero.setMagicArmor((parseInt(hero.getMagicResistance()) 
            + parseInt(r["0"].ITEM_MAGIC_ARMOR)))

          hero.setMagicPenFlat((parseInt(hero.getMagicPenFlat()) 
            + parseInt(r["0"].ITEM_MAGIC_PEN_FLAT)))

          hero.setMagicPenPer((parseInt(hero.getMagicPenPer()) 
            + parseInt(r["0"].ITEM_MAGIC_PEN_PER)))

          hero.setMagicPower((parseInt(hero.getMagicPower()) 
            + parseInt(r["0"].ITEM_MAGIC_POWER)))

          hero.setMana((parseInt(hero.getMana()) 
            + parseInt(r["0"].ITEM_MANA)))

          hero.setManaRegen((parseInt(hero.getManaRegen()) 
            + parseInt(r["0"].ITEM_MANA_REGEN)))

          hero.setMoveSpeed((parseInt(hero.getMoveSpeed()) 
            + parseInt(r["0"].ITEM_MOVE_SPEED_FLAT)))

          hero.setMoveSpeedPer((parseInt(hero.getMoveSpeedPer()) 
            + parseInt(r["0"].ITEM_MOVE_SPEED_PER)))

          hero.setArmor((parseInt(hero.getArmor()) 
            + parseInt(r["0"].ITEM_PHYSICAL_ARMOR)))

          hero.setPhysicalPen((parseInt(hero.getPhysicalPen())
            + parseInt(r["0"].ITEM_PHYSICAL_PEN_PER)))

          hero.setSpellVamp((parseInt(hero.getSpellVamp()) 
            + parseInt(r["0"].ITEM_SPELL_LIFESTEAL)))

          hero.setResilience((parseInt(hero.getResilience()) 
            + parseInt(r["0"].RESILIENCE)))

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
          hero.setAttackGrowth((i(hero.getAttack()) 
            + i(hero.getAttackGrowth()) * i(lvl)))

          hero.setAttackSpeedGrowth((parseFloat(hero.getAttackSpeed()/100) 
            + parseFloat((i(hero.getAttackSpeedGrowth()) 
              * i(lvl))/1000)))

          hero.setArmorGrowth((i(hero.getArmor()) 
            + i(hero.getArmorGrowth()) 
              * i(lvl)))

          hero.setMagicArmorGrowth((i(hero.getMagicResistance()) 
            + (i(hero.getMagicArmorGrowth()) 
              * i(lvl))))

          hero.setHpGrowth((i(hero.getHp()) 
            + i(hero.getHpGrowth()) 
              * i(lvl)))

          hero.setHpRegenGrowth((i(hero.getHpRegen()) 
            + i(hero.getHpRegenGrowth()) 
              * i(lvl)))

          hero.setManaRegenGrowth((i(hero.getManaRegen()) 
            + i(hero.getManaRegenGrowth()) 
              * i(lvl)))

          hero.setManaGrowth((i(hero.getMana()) 
            + i(hero.getManaGrowth()) 
              * i(lvl)))

}

function show_stat(hero)
{
          set('#hp',c(hero.getHp() 
            + hero.getEm_hp()))

          set('#mana',c(hero.getMana() 
            + hero.getEm_mana()))

          set('#armor',c(hero.getArmor() 
            + hero.getEm_armor()))

          set('#physical_pen',c(hero.getPhysicalPen() 
            + hero.getEm_physical_pen()))

          set('#lifesteal',c(hero.getLifesteal() 
            + hero.getEm_lifesteal()))

          set('#hp_regen',c(hero.getHpRegen() 
            + hero.getEm_hp_regen()))

          set('#mana_regen',c(hero.getManaRegen() 
            + hero.getEm_mana_regen())) 

          set('#magic_power',c(hero.getMagicPower() 
            + hero.getEm_magic_power()))

          set('#magic_resistance',c(hero.getMagicResistance() 
            + hero.getEm_magic_armor()))

          set('#magic_pen',c(hero.getMagicPenFlat() 
            + hero.getEm_magic_pen_per()))

          set('#spell_vamp',c(hero.getSpellVamp() 
            + hero.getEm_spell_vamp()))

          set('#move_speed',f(hero.getMoveSpeed() 
            + (f(hero.getMoveSpeed() 
              * ((hero.getMoveSpeedPer()/100) 
                + (hero.getEm_move_speed()/100)))))) 

          set('#cooldown_reduction',c(hero.getCdr() 
            + hero.getEm_cdr()))

          set('#attack_speed',f(hero.getAttackSpeed() 
            + f(hero.getEm_atk_speed()
              /100)))

          set('#crit_chance',c(hero.getCritChance() 
            + hero.getEm_crit_chance()))

          set('#attack',c(hero.getAttack() 
            + hero.getEm_attack()))

          set('#crit_reduction',c(hero.getCritReduction()))
          set('#resilience',c(hero.getResilience()))
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
          const hero = new Champion(r["0"].HERO_HP,
            r["0"].HERO_MANA,
            r["0"].HERO_ARMOR,
            r["0"].HERO_HP_REGEN,
            r["0"].HERO_MANA_REGEN,
            r["0"].HERO_MAGIC_ARMOR,
            r["0"].HERO_MOVE_SPEED,
            r["0"].HERO_ATK_SPEED,
            r["0"].HERO_PHYSICAL_ATK)
       
          hero.setHeroGrowth(r["0"].HERO_PHYSICAL_ATK_GR,
            r["0"].HERO_HP_GR,
            r["0"].HERO_MANA_GR,
            r["0"].HERO_ATK_SPEED_GR,
            r["0"].HERO_HP_REGEN_GR,
            r["0"].HERO_MAGIC_ARMOR_GR,
            r["0"].HERO_MANA_REGEN_GR,
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











