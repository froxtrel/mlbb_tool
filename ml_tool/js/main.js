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
    return Math.ceil(string)
}

function set(id, value)
{
    $(id).html(value)
}

function add_buff(hero, buff_id)
{
    $.ajax(
    {
        url: 'http://localhost/ml_tool/simulations/' + buff_id,
        method: 'POST',
        dataType: 'json',
        success: function(r)
        {
            // console.log(r)
            show_stat(hero);

        },
        error: function(err)
        {
            return err
        }
    })
}

function add_potion(hero, potion_id ,role)
{
    $.ajax(
    {
        url: 'http://localhost/ml_tool/simulations/get_item_base_stats/' + potion_id,
        method: 'POST',
        dataType: 'json',
        success: function(r)
        {
            // console.log(r)

            hero.setAttack(i(hero.getAttack()) + i(r["0"].ITEM_PHYSICAL_ATK))
            hero.setLifesteal(i(hero.getLifesteal()) + i(r["0"].ITEM_LIFESTEAL))
            hero.setMagicPower(i(hero.getMagicPower()) + i(r["0"].ITEM_MAGIC_POWER))
            hero.setCdr(i(hero.getCdr()) + i(r["0"].ITEM_CD_REDUCTION))
            hero.setHp(i(hero.getHp()) + i(r["0"].ITEM_HP))
            hero.setResilience(i(hero.getResilience()) + i(r["0"].RESILIENCE))
            hero.setTotal_cost(i(r["0"].ITEM_PRICE) + i(hero.getTotal_cost()))

            show_stat(hero , role );

        },
        error: function(err)
        {
            return err
        }
    })
}


function add_emblem(hero, emblem_id , role)
{
    $.ajax(
    {
        url: 'http://localhost/ml_tool/simulations/get_emblem_stats/' + emblem_id,
        method: 'POST',
        dataType: 'json',
        success: function(r)
        {
            // console.log(r)

            hero.setEm_armor(f(r["0"].EMBLEM_ARMOR_GR) * hero.getEm_level())
            hero.setEm_atk_speed(f(r["0"].EMBLEM_ATTACK_SPEED_GR) * hero.getEm_level())
            hero.setEm_cdr(f(r["0"].EMBLEM_CDR_GR) * hero.getEm_level())
            hero.setEm_crit_chance(f(r["0"].EMBLEM_CRIT_CHANCE_GR) * hero.getEm_level())
            hero.setEm_hp(f(f(r["0"].EMBLEM_HP_GR) * hero.getEm_level()) + 1)
            hero.setEm_hp_regen(f(r["0"].EMBLEM_HP_REGEN_GR) * hero.getEm_level())
            hero.setEm_lifesteal(f(r["0"].EMBLEM_LIFESTEAL_GR) * hero.getEm_level())
            hero.setEm_magic_armor(f(r["0"].EMBLEM_MAGIC_ARMOR_GR) * hero.getEm_level())
            hero.setEm_magic_pen_per(f(r["0"].EMBLEM_MAGIC_PEN_GR) * hero.getEm_level())
            hero.setEm_magic_pen_flat(f(r["0"].EMBLEM_MAGIC_PEN_FLAT_GR) * hero.getEm_level())
            hero.setEm_magic_power(f(r["0"].EMBLEM_MAGIC_POWER_GR) * hero.getEm_level())
            hero.setEm_mana(f(r["0"].EMBLEM_MANA_GR) * hero.getEm_level())
            hero.setEm_mana_regen(f(r["0"].EMBLEM_MANA_REGEN_GR) * hero.getEm_level())
            hero.setEm_move_speed_per(f(( r["0"].EMBLEM_MOVE_SPEED_GR) * hero.getEm_level()/100))
            hero.setEm_attack(f(r["0"].EMBLEM_PHYSICAL_ATTACK_GR) * hero.getEm_level())
            hero.setEm_physical_pen(f(r["0"].EMBLEM_PHYSICAL_PEN_GR) * hero.getEm_level())
            hero.setEm_physical_pen_flat(f(r["0"].EMBLEM_PHYSICAL_PEN_FLAT_GR) * hero.getEm_level())
            hero.setEm_spell_vamp(f(r["0"].EMBLEM_SPELL_VAMP_GR) * hero.getEm_level())

            show_stat(hero,role);

        },
        error: function(err)
        {
            return err
        }
    })
}


function add_item(hero, slot,role)
{
    $.ajax(
    {
        url: 'http://localhost/ml_tool/simulations/get_item_base_stats/' + slot,
        method: 'POST',
        dataType: 'json',
        success: function(r)
        {
            // console.log(r)

            hero.setAttack((parseInt(hero.getAttack()) + parseInt(r["0"].ITEM_PHYSICAL_ATK)))
            hero.setAttackSpeed((parseFloat(hero.getAttackSpeed()) + parseFloat(r["0"].ITEM_ATK_SPEED_PER / 100)))
            hero.setCdr((parseInt(hero.getCdr()) + parseInt(r["0"].ITEM_CD_REDUCTION)))
            hero.setCritChance((parseInt(hero.getCritChance()) + parseInt(r["0"].ITEM_CRIT_CHANCE)))
            hero.setCritReduction((parseInt(hero.getCritReduction()) + parseInt(r["0"].ITEM_CRIT_REDUCTION)))
            hero.setHp((parseInt(hero.getHp()) + parseInt(r["0"].ITEM_HP)))
            hero.setHpRegen((parseInt(hero.getHpRegen()) + parseInt(r["0"].ITEM_HP_REGEN)))
            hero.setLifesteal((parseInt(hero.getLifesteal()) + parseInt(r["0"].ITEM_LIFESTEAL)))
            hero.setMagicArmor((parseInt(hero.getMagicResistance()) + parseInt(r["0"].ITEM_MAGIC_ARMOR)))
            hero.setMagicPenFlat((parseInt(hero.getMagicPenFlat()) + parseInt(r["0"].ITEM_MAGIC_PEN_FLAT)))
            hero.setMagicPenPer((parseInt(hero.getMagicPenPer()) + parseInt(r["0"].ITEM_MAGIC_PEN_PER)))
            hero.setMagicPower((parseInt(hero.getMagicPower()) + parseInt(r["0"].ITEM_MAGIC_POWER)))
            hero.setMana((parseInt(hero.getMana()) + parseInt(r["0"].ITEM_MANA)))
            hero.setManaRegen((parseInt(hero.getManaRegen()) + parseInt(r["0"].ITEM_MANA_REGEN)))
            hero.setMoveSpeed((parseInt(hero.getMoveSpeed()) + parseInt(r["0"].ITEM_MOVE_SPEED_FLAT)))
            hero.setMoveSpeedPer((parseInt(hero.getMoveSpeedPer()) + parseInt(r["0"].ITEM_MOVE_SPEED_PER)))
            hero.setArmor((parseInt(hero.getArmor()) + parseInt(r["0"].ITEM_PHYSICAL_ARMOR)))
            hero.setPhysicalPen((parseInt(hero.getPhysicalPen()) + parseInt(r["0"].ITEM_PHYSICAL_PEN_PER)))
            hero.setSpellVamp((parseInt(hero.getSpellVamp()) + parseInt(r["0"].ITEM_SPELL_LIFESTEAL)))
            hero.setResilience((parseInt(hero.getResilience()) + parseInt(r["0"].RESILIENCE)))
            hero.setTotal_cost(i(r["0"].ITEM_PRICE) + i(hero.getTotal_cost()))

            hero.setItem_added_physical_attack( i(hero.getItem_added_physical_attack()) + i(r["0"].ITEM_PHYSICAL_ATK))
            hero.setItem_added_magic_attack( i(hero.getItem_added_magic_attack()) + i(r["0"].ITEM_MAGIC_POWER))
            hero.setItem_added_cdr((i(hero.getCdr()) + i(r["0"].ITEM_CD_REDUCTION)))

            show_stat(hero,role);

        },
        error: function(err)
        {
            return err
        }
    })
}

function add_level(hero, lvl)
{               
          hero.setAttackGrowth(f(f(hero.getAttack()) + f(hero.getAttackGrowth()) * f(lvl)) + f(0.5))
          hero.setAttackSpeedGrowth(f(f(hero.getAttackSpeed() / 100) + f(f((f(hero.getAttackSpeedGrowth())/1000) * f(lvl))) + f(0.005)))
          hero.setArmorGrowth(f(f(hero.getArmor()) + f(hero.getArmorGrowth()) *f(lvl))+ f(0.5))
          hero.setMagicArmorGrowth(f(f(hero.getMagicResistance()) + (f(hero.getMagicArmorGrowth()) *f(lvl))) + f(0.5))
          hero.setHpGrowth((i(hero.getHp()) + i(hero.getHpGrowth()) *i(lvl)))
          hero.setHpRegenGrowth((i(hero.getHpRegen()) + i(hero.getHpRegenGrowth()) *i(lvl)))
          hero.setManaRegenGrowth((i(hero.getManaRegen()) + i(hero.getManaRegenGrowth()) *i(lvl)))
          hero.setManaGrowth((i(hero.getMana()) + i(hero.getManaGrowth()) * i(lvl)))

         
}

function add_skill(hero, hero_id , role , skill_1_lvl , skill_2_lvl , skill_3_lvl)
{
    $.ajax(
    {
        url: 'http://localhost/ml_tool/simulations/get_skill_info/' + hero_id,
        method: 'POST',
        dataType: 'json',
        success: function(r)
        {
            console.log(r)


               // skill name

              var counters = 1
              var pos = 0

              while(counters <= 4 ) {
                     set('#skill_' + counters ,r[pos].SKILL_NAME)
                     set('#type_' + counters ,r[pos].SKILL_TYPE)
                counters++
                pos++
              }

               $('#photo_1').attr('src',r[0].SKILL_PHOTO)
               $('#photo_2').attr('src',r[1].SKILL_PHOTO)
               $('#photo_3').attr('src',r[2].SKILL_PHOTO)
               $('#photo_4').attr('src',r[3].SKILL_PHOTO)

               /////////////////////////////////PASSIVE////////////////////////////////////

               hero.setSkill_physical_damage_1(i(r["0"].SKILL_BASE_PHYSICAL_DAMAGE )
                  + (f(hero.getTotal_physical_attack()) * f(r["0"].SKILL_EXTRA_TOTAL_PHYSICAL_ATTACK))
                  + (f(hero.getTotal_added_physical_attack()) * f(r["0"].SKILL_EXTRA_PHYSICAL_ATTACK))
                  )
               hero.setSkill_magic_damage_1(i(r["0"].SKILL_BASE_MAGIC_DAMAGE)
                  + (f(hero.getTotal_magic_attack()) * f(r["0"].SKILL_EXTRA_TOTAL_PHYSICAL_ATTACK))
                  + (f(hero.getTotal_added_magic_attack()) * f(r["0"].SKILL_EXTRA_PHYSICAL_ATTACK))
                  )

               hero.setSkill_cooldown_1(r["0"].SKILL_BASE_COOLDOWN)
               hero.setSkill_mana_1(r["0"].SKILL_BASE_MANA_COST)

               /////////////////////////////END PASSIVE//////////////////////////////////////



               //////////////////////////////SKILL1/////////////////////////////////////////

               switch(hero.getHero_name()) {

                    case 'AKAI':
                              hero.setSkill_magic_damage_2(i(r["1"].SKILL_BASE_PHYSICAL_DAMAGE) 
                              + (f(hero.getTotal_physical_attack()) * f(r["1"].SKILL_EXTRA_TOTAL_PHYSICAL_ATTACK)) 
                              + (f(hero.getTotal_added_physical_attack()) * f(r["1"].SKILL_EXTRA_PHYSICAL_ATTACK)) 
                              + (f(r["1"].SKILL_BASE_PHYSICAL_ATTACK_GR) * f(skill_1_lvl))
                            )
                        break;
                
                    default:

                            hero.setSkill_physical_damage_2(i(r["1"].SKILL_BASE_PHYSICAL_DAMAGE)
                            + (f(hero.getTotal_physical_attack()) * f(r["1"].SKILL_EXTRA_TOTAL_PHYSICAL_ATTACK)) 
                            + (f(hero.getTotal_added_physical_attack()) * f(r["1"].SKILL_EXTRA_PHYSICAL_ATTACK)) 
                            + (f(r["1"].SKILL_BASE_PHYSICAL_ATTACK_GR) * f(skill_1_lvl))
                          )

                            hero.setSkill_magic_damage_2(i(r["1"].SKILL_BASE_MAGIC_DAMAGE) 
                            + (f(hero.getTotal_magic_attack()) * f(r["1"].SKILL_EXTRA_TOTAL_PHYSICAL_ATTACK)) 
                            + (f(hero.getTotal_added_magic_attack()) * f(r["1"].SKILL_EXTRA_PHYSICAL_ATTACK)) 
                            + (f(r["1"].SKILL_BASE_MAGIC_DAMAGE_GR) * f(skill_1_lvl))
                          )
                }


               hero.setSkill_cooldown_2( r["1"].SKILL_BASE_COOLDOWN - (i(r["1"].SKILL_BASE_COOLDOWN) * f((hero.getTotal_cdr()/100))))
               hero.setSkill_mana_2(r["1"].SKILL_BASE_MANA_COST)

               ////////////////////////////////END SKILL 1//////////////////////////////////////


               ////////////////////////////////SKIL2//////////////////////////////////////////

               hero.setSkill_physical_damage_3(i(r["2"].SKILL_BASE_PHYSICAL_DAMAGE)
                  + (f(hero.getTotal_physical_attack()) * f(r["2"].SKILL_EXTRA_TOTAL_PHYSICAL_ATTACK))
                  + (f(hero.getTotal_added_physical_attack()) * f(r["2"].SKILL_EXTRA_PHYSICAL_ATTACK))
                  + (f(r["2"].SKILL_BASE_PHYSICAL_ATTACK_GR) * f(skill_2_lvl))
                  )

               hero.setSkill_magic_damage_3(i(r["2"].SKILL_BASE_MAGIC_DAMAGE) 
                  + (f(hero.getTotal_magic_attack()) * f(r["2"].SKILL_EXTRA_TOTAL_PHYSICAL_ATTACK))
                  + (f(hero.getTotal_added_magic_attack()) * f(r["2"].SKILL_EXTRA_PHYSICAL_ATTACK))
                  + (f(r["2"].SKILL_BASE_MAGIC_DAMAGE_GR) * f(skill_2_lvl))
                  )

               hero.setSkill_cooldown_3( r["2"].SKILL_BASE_COOLDOWN - (i(r["2"].SKILL_BASE_COOLDOWN) * f((hero.getTotal_cdr()/100))))
               hero.setSkill_mana_3(r["2"].SKILL_BASE_MANA_COST)

               ////////////////////////////////END SKILL 2//////////////////////////////////////////



               ////////////////////////////////ULTIMATE//////////////////////////////////////////

               hero.setSkill_physical_damage_4(i(r["3"].SKILL_BASE_PHYSICAL_DAMAGE)
                  + (f(hero.getTotal_physical_attack()) * f(r["3"].SKILL_EXTRA_TOTAL_PHYSICAL_ATTACK))
                  + (f(hero.getTotal_added_physical_attack()) * f(r["3"].SKILL_EXTRA_PHYSICAL_ATTACK))
                  + (f(r["3"].SKILL_BASE_PHYSICAL_ATTACK_GR) * f(skill_3_lvl))

                  )

               hero.setSkill_magic_damage_4(i(r["3"].SKILL_BASE_MAGIC_DAMAGE) 
                  + (f(hero.getTotal_magic_attack()) * f(r["3"].SKILL_EXTRA_TOTAL_PHYSICAL_ATTACK))
                  + (f(hero.getTotal_added_magic_attack()) * f(r["3"].SKILL_EXTRA_PHYSICAL_ATTACK))
                  + (f(r["3"].SKILL_BASE_MAGIC_DAMAGE_GR) * f(skill_3_lvl))
                  )

               hero.setSkill_cooldown_4( r["3"].SKILL_BASE_COOLDOWN - (i(r["3"].SKILL_BASE_COOLDOWN) * f((hero.getTotal_cdr()/100))))
               hero.setSkill_mana_4(r["3"].SKILL_BASE_MANA_COST)

               ////////////////////////////////////////END ULTIMATE///////////////////////////////////



              switch(hero.getHero_name()) {

                  case 'AKAI':
                     
                          $('#add_info_passive').html(
                              '<b>' + r[0].SKILL_NAME +'</b> : EVERY TIME AKAI USED SKILL,AKAI WILL GAIN SHIELD THAT ABSORB <b>' + '  ' 
                                +  (f(f(hero.getTotal_added_hp() * f(r[1].SKILL_BONUS_HP_ADDED_SHIELD)))) + '  ' + '</b>DMG'
                            )

                          $('#add_info_skill_2').html(
                              '<b>' + r[1].SKILL_NAME + '</b> : AKAI BASIC ATTACK ON MARKED TARGET DEAL <b>' + '  ' 
                                +  (f(f(hero.getTotal_added_hp() * f(r[1].SKILL_BONUS_HP_EXTRA_DMG)))) + '  ' + '</b>EXTRA PHYSICAL DMG'
                            )

                          $('#add_info_skill_3').html(
                              '<b>' + r[3].SKILL_NAME + '</b> : AKAI GAIN EXTRA MOVESPEED, <b>' + '  ' 
                                +  f(f(hero.getTotal_added_movespeed()) + i(r[1].SKILL_BONUS_ADD_SPEED_FLAT))  + '  ' + '</b>IN TOTAL FOR 3.5 SEC'
                            )

                    break;

                    case 'ALICE':
                     
                          $('#add_info_passive').html(
                              '<b>' + r[0].SKILL_NAME +'</b> <br> : AFTER ABSORBING <b>12 BLOOD ORB</b>, ALICE GAIN EXTRA CDR <b>' + '  ' 
                                +  (f(f(hero.getTotal_added_cdr() + f(r["0"].SKILL_BONUS_ADD_CDR)))) + '  ' + '</b>IN TOTAL' + 
                               '<br>' 
                                +'</b> : AFTER ABSORBING <b>30 BLOOD ORB</b>, ALICE GAIN EXTRA SPELL VAMP <b>' + '  ' 
                                +  (f(f(hero.getTotal_added_spell_vamp() + f(r["0"].SKILL_BONUS_ADD_SPELL_VAMP)))) + '  ' + '</b>IN TOTAL' +
                              '<br>' 
                                +'</b> : AFTER ABSORBING <b>60 BLOOD ORB</b>, ALICE GAIN EXTRA MOVEMENT SPEED <b>' + '  ' 
                                +  f(f(hero.getTotal_added_movespeed()) + i(r["0"].SKILL_BONUS_ADD_SPEED_FLAT)) + '  ' + '</b>IN TOTAL' 
                            )

                    break;

               }
          
               show_stat(hero , role);

        },
        error: function(err)
        {
            return err
        }
    })
}


function show_stat(hero, role)
{

    if ((hero.getCdr() + hero.getEm_cdr()) > hero.getMax_cdr())
    {
        hero.setCdr(40)
        hero.setEm_cdr(0)
    }

    if (hero.getAttackSpeed() > hero.getMax_atk_speed())
    {
        hero.setAttackSpeed(2.50)
    }

    if (hero.getMoveSpeed() > hero.getMax_movespeed())
    {
        hero.setMoveSpeed(450)
    }     

          // skill

          if(role == "PHYSICAL") {

              set('#physical_dmg_1',hero.getSkill_physical_damage_1())
              set('#physical_dmg_2',hero.getSkill_physical_damage_2())
              set('#physical_dmg_3',hero.getSkill_physical_damage_3())
              set('#physical_dmg_4',hero.getSkill_physical_damage_4())

          } else {

              var counter = 1

              while(counter <= 4 ) {

                     set('#physical_dmg_' + counter ,0)
                counter++
              }

          }

          if(role == "MAGIC") {

               set('#magic_dmg_1',hero.getSkill_magic_damage_1())
               set('#magic_dmg_2',hero.getSkill_magic_damage_2())
               set('#magic_dmg_3',hero.getSkill_magic_damage_3())
               set('#magic_dmg_4',hero.getSkill_magic_damage_4())


          } else {

              var counter = 1

              while(counter <= 4 ) {

                     set('#magic_dmg_' + counter ,0)
                counter++
              }

          }

          if(role == "HYBRID") {

               set('#physical_dmg_1',hero.getSkill_physical_damage_1())
               set('#physical_dmg_2',hero.getSkill_physical_damage_2())
               set('#physical_dmg_3',hero.getSkill_physical_damage_3())
               set('#physical_dmg_4',hero.getSkill_physical_damage_4())

               set('#magic_dmg_1',hero.getSkill_magic_damage_1())
               set('#magic_dmg_2',hero.getSkill_magic_damage_2())
               set('#magic_dmg_3',hero.getSkill_magic_damage_3())
               set('#magic_dmg_4',hero.getSkill_magic_damage_4())
          }
        
          set('#cooldown_1',hero.getSkill_cooldown_1())
          set('#cooldown_2',hero.getSkill_cooldown_2())
          set('#cooldown_3',hero.getSkill_cooldown_3())
          set('#cooldown_4',hero.getSkill_cooldown_4())

          set('#mana_1',hero.getSkill_mana_1())
          set('#mana_2',hero.getSkill_mana_2())
          set('#mana_3',hero.getSkill_mana_3())
          set('#mana_4',hero.getSkill_mana_4())

          // attributes 

          set('#hp', c(hero.getHp() + hero.getEm_hp() + hero.getTalent_hp()))
          set('#mana', c(hero.getMana() + hero.getEm_mana() + hero.getTalent_mana()))
          set('#armor', c(hero.getArmor() + hero.getEm_armor() + hero.getTalent_armor() + c(i(hero.getArmor()) * f(hero.getTalent_armor_per()/100))))
          set('#physical_pen', c(hero.getPhysicalPen() + hero.getEm_physical_pen_flat() + hero.getTalent_physical_pen_flat()))
          set('#lifesteal', c(hero.getLifesteal() + hero.getEm_lifesteal() + hero.getTalent_lifesteal()))
          set('#hp_regen', c(hero.getHpRegen() + hero.getEm_hp_regen() + hero.getTalent_hp_regen()))
          set('#mana_regen', c(hero.getManaRegen() + hero.getEm_mana_regen() + hero.getTalent_mana_regen()))
          set('#magic_power', c(hero.getMagicPower() + hero.getEm_magic_power() + c(i(hero.getMagicPower()) * f(hero.getTalent_magic_power_per()/100))))
          set('#magic_resistance', c(hero.getMagicResistance() + hero.getEm_magic_armor() + c(i(hero.getMagicResistance()) * f(hero.getTalent_magic_armor_per()/100))))
          set('#magic_pen', c(hero.getMagicPenFlat() + hero.getEm_magic_pen_flat() + hero.getTalent_magic_pen_flat()))
          set('#spell_vamp', c(hero.getSpellVamp() + hero.getEm_spell_vamp() + hero.getTalent_spell_vamp()))
          set('#move_speed', f(hero.getMoveSpeed()) + c(hero.getMoveSpeed() * (hero.getEm_move_speed_per() + hero.getTalent_move_speed_per())))
          set('#cooldown_reduction', c(hero.getCdr() + hero.getEm_cdr() + hero.getTalent_cd_reduction()))
          set('#attack_speed', f(hero.getAttackSpeed() + f(hero.getEm_atk_speed() /100) + f((hero.getTalent_attack_speed()/100))).toFixed(2))
          set('#crit_chance', c(hero.getCritChance() + hero.getEm_crit_chance() + hero.getTalent_crit_chance()))
          set('#attack', c(hero.getAttack() + hero.getEm_attack() + hero.getTalent_physical_attack()))
          set('#crit_reduction', c(hero.getCritReduction()))
          set('#resilience', c(hero.getResilience()))
          set('#cost', i(hero.getTotal_cost()))
          set('#crit_damage',i(hero.getTalent_crit_dmg()))
          set('#healing_effects',i(hero.getTalent_healing_effect()))
          set('#battle_spell',i(hero.getTalent_battle_spell()))

          hero.setTotal_added_physical_attack(c(hero.getEm_attack() + hero.getTalent_physical_attack() + i(hero.getItem_added_physical_attack())))
          hero.setTotal_added_magic_attack(c(hero.getEm_magic_power() + c(i(hero.getMagicPower()) * f(hero.getTalent_magic_power_per()/100))))
          hero.setTotal_added_cdr(c(hero.getCdr() + hero.getEm_cdr() + hero.getTalent_cd_reduction()))

          hero.setTotal_physical_attack(c(hero.getAttack() + hero.getEm_attack() + hero.getTalent_physical_attack()))
          hero.setTotal_magic_attack(c(hero.getMagicPower() + hero.getEm_magic_power() + c(i(hero.getMagicPower()) * f(hero.getTalent_magic_power_per()/100))))
          hero.setTotal_cdr(c(hero.getCdr() + hero.getEm_cdr() + hero.getTalent_cd_reduction()))
          hero.setTotal_added_hp(c(hero.getHp() + hero.getEm_hp() + hero.getTalent_hp()))
          hero.setTotal_added_movespeed(f(hero.getMoveSpeed()) + c(hero.getMoveSpeed() * (hero.getEm_move_speed_per() + hero.getTalent_move_speed_per())))
          hero.setTotal_added_cdr(c(hero.getCdr() + hero.getEm_cdr() + hero.getTalent_cd_reduction()))
          hero.setTotal_added_spell_vamp(c(hero.getSpellVamp() + hero.getEm_spell_vamp() + hero.getTalent_spell_vamp()))

}

function add_talent_t1(hero, talent_t1 , role)
{ 

    $.ajax(
    {
        url: 'http://localhost/ml_tool/simulations/get_talent_info/' + talent_t1,
        method: 'POST',
        dataType: 'json',
        success: function(r)
        {
            // console.log(r)

            hero.setTalent_hp(i(r["0"].TALENT_HP_GR * 3) + i(hero.getTalent_hp()))
            hero.setTalent_armor(i(r["0"].TALENT_ARMOR_GR * 3 + i(hero.getTalent_armor())))
            hero.setTalent_magic_armor(i(r["0"].TALENT_MAGIC_ARMOR_GR * 3 + i(hero.getTalent_magic_armor())))
            hero.setTalent_mana(i(r["0"].TALENT_MANA_GR * 3 + i(hero.getTalent_mana())))
            hero.setTalent_mana_regen(i(r["0"].TALENT_MANA_REGEN_GR * 3 + i(hero.getTalent_mana_regen())))
            hero.setTalent_physical_attack(i(r["0"].TALENT_PHYSICAL_ATTACK_GR * 3 + i(hero.getTalent_physical_attack())))
            hero.setTalent_dmg_to_monster(i(r["0"].TALENT_DMG_TO_MONSTER_GR * 3 + i(hero.getTalent_dmg_to_monster())))
            hero.setTalent_lifesteal(i(r["0"].TALENT_LIFESTEAL_GR * 3 + i(hero.getTalent_lifesteal())))
            hero.setTalent_cd_reduction(i(r["0"].TALENT_CD_REDUCTION_GR * 3 + i(hero.getTalent_cd_reduction())))
            hero.setTalent_move_speed_per(f(i(r["0"].TALENT_MOVE_SPEED_PER_GR * 3)/100))
            hero.setTalent_magic_power(i(r["0"].TALENT_MAGIC_POWER_GR * 3) + i(hero.getTalent_magic_power()))
            hero.setTalent_crit_chance(f(r["0"].TALENT_CRIT_CHANCE_GR * 3) + i(hero.getTalent_crit_chance()))

            show_stat(hero , role);

        },
        error: function(err)
        {
            return err
        }
    })
}


function add_talent_t2(hero, talent_t2 , role)
{   

    $.ajax(
    {
        url: 'http://localhost/ml_tool/simulations/get_talent_info/' + talent_t2,
        method: 'POST',
        dataType: 'json',
        success: function(r)
        {   
            // console.log(r)

            hero.setTalent_crit_dmg(i(r["0"].TALENT_CRIT_DMG_GR * 3) + i(hero.getTalent_crit_dmg()))
            hero.setTalent_cd_reduction(i(r["0"].TALENT_CD_REDUCTION_GR * 3) + i(hero.getTalent_cd_reduction()))
            hero.setTalent_attack_speed(i(r["0"].TALENT_ATTACK_SPEED_GR * 3))
            hero.setTalent_healing_effect(i(r["0"].TALENT_HEALING_EFFECT_GR * 3) + i(hero.getTalent_healing_effect()))
            hero.setTalent_physical_pen_flat(i(r["0"].TALENT_PHYSICAL_PEN_FLAT_GR * 3) + i(hero.getTalent_physical_pen_flat()))
            hero.setTalent_magic_pen_flat(i(r["0"].TALENT_MAGIC_PEN_FLAT_GR * 3) + i(hero.getTalent_magic_pen_flat()))
            hero.setTalent_mana_regen(i(r["0"].TALENT_MANA_REGEN_GR * 3) + i(hero.getTalent_mana_regen()))
            hero.setTalent_hp_regen(i(r["0"].TALENT_HP_REGEN_GR * 3) + i(hero.getTalent_hp_regen()))
            hero.setTalent_hp(i(r["0"].TALENT_HP_GR * 3) + i(hero.getTalent_hp()))
            hero.setTalent_attack_speed(f(r["0"].TALENT_ATTACK_SPEED_GR * 3))
            hero.setTalent_spell_vamp(i(r["0"].TALENT_SPELL_VAMP_GR * 3) + i(hero.getTalent_spell_vamp()))
            hero.setTalent_crit_chance(i(r["0"].TALENT_CRIT_CHANCE_GR * 3) + i(hero.getTalent_crit_chance()))
            hero.setTalent_battle_spell(i(r["0"].TALENT_BATTLE_SPELL_CDR_GR * 3) + i(hero.getTalent_battle_spell()))
            hero.setTalent_armor_per(i(r["0"].TALENT_ARMOR_PER_GR * 3) + i(hero.getTalent_armor_per()))
            hero.setTalent_magic_armor_per(i(r["0"].TALENT_MAGIC_ARMOR_PER_GR * 3) + i(hero.getTalent_magic_power_per()))
            hero.setTalent_physical_attack(i(r["0"].TALENT_PHYSICAL_ATTACK_GR * 3 + i(hero.getTalent_physical_attack())))
            hero.setTalent_magic_power_per(i(r["0"].TALENT_MAGIC_POWER_PER_GR * 3))
            hero.setTalent_magic_power_per(i(r["0"].TALENT_MAGIC_POWER_PER_GR * 3))

            show_stat(hero , role);

        },
        error: function(err)
        {
            return err
        }
    })
}


function getChampionStat(id, 
  level, 
  slot1 = 95, 
  slot2 = 95, 
  slot3 = 95, 
  slot4 = 95, 
  slot5 = 95, 
  slot6 = 95, 
  emblem_id = 10, 
  emblem_level = 0, 
  potion = 95,
  talent_t1 = 55,
  talent_t2 = 55,
  skill_1_lvl = 0,
  skill_2_lvl = 0, 
  skill_3_lvl = 0

  )

  {
    $.ajax(
    {
        url: 'http://localhost/ml_tool/simulations/get_hero_base_stats/' + id,
        method: 'get',
        dataType: 'json',
        success: function(r)
        {
            // console.log(r)
            var role = r["0"].HERO_DMG_TYPE

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

            hero.setHero_name(r["0"].HERO_NAME)
            add_level(hero, hero.getHeroLevel())         
            add_item(hero, slot1 ,role)
            add_item(hero, slot2 ,role)
            add_item(hero, slot3 ,role)
            add_item(hero, slot4 ,role)
            add_item(hero, slot5 ,role)
            add_item(hero, slot6 ,role)
            add_potion(hero, potion , role)
            add_emblem(hero, emblem_id , role)
            add_talent_t1(hero,talent_t1 , role)
            add_talent_t2(hero,talent_t2 , role)
            add_skill(hero, id ,role,skill_1_lvl,skill_2_lvl,skill_3_lvl)
  

        },
        error: function(err)
        {
            return err
        }
    })

}


$(".btn,#hero,#level,.slot,input[name='talent_tier_1'],input[name='talent_tier_2']").change(function()
{

    var id = $("#hero option:selected").val()
    var level = $("#level option:selected").val()
    var slot1 = $("#slot1 option:selected").val()
    var slot2 = $("#slot2 option:selected").val()
    var slot3 = $("#slot3 option:selected").val()
    var slot4 = $("#slot4 option:selected").val()
    var slot5 = $("#slot5 option:selected").val()
    var slot6 = $("#slot6 option:selected").val()
    var potion = $("#potion option:selected").val()
    var emblem_id = $("#emblem option:selected").val()
    var emblem_level = $("#em_level option:selected").val()
    var talent_t1 = $("#talent_tier_1 option:selected").val() 
    var talent_t2 = $("#talent_tier_2 option:selected").val() 
    var skill_1_lvl =  $("#skill_level_1 option:selected").val()
    var skill_2_lvl =  $("#skill_level_2 option:selected").val() 
    var skill_3_lvl =  $("#skill_level_3 option:selected").val()  

    var c = 1
    var magic_dmg_done = 0
    var physical_dmg_done = 0

    while(c <= 4 ) 
    {
        magic_dmg_done = parseInt(magic_dmg_done) + parseInt($("#magic_dmg_" + c).text())
        physical_dmg_done = parseInt(physical_dmg_done) + parseInt($("#physical_dmg_" + c).text())

       c++
    }

    $('#magic_dmg_done').html(magic_dmg_done);
    $('#physical_dmg_done').html(physical_dmg_done);

    if (level == '')
    {
        level = 0
    }

    // console.log(magic_dmg_done)
    // console.log(physical_dmg_done)

    getChampionStat(id,
      level, 
      slot1, 
      slot2, 
      slot3, 
      slot4, 
      slot5, 
      slot6, 
      emblem_id, 
      emblem_level, 
      potion , 
      talent_t1, 
      talent_t2,
      skill_1_lvl,
      skill_2_lvl, 
      skill_3_lvl 
      )
});


function Champion(hp, mana, armor, hp_regen, mana_regen, mag_armor, move_speed, atk_speed, attack)
{

    //base stats
    this.hp = hp
    this.mana = mana
    this.armor = armor
    this.physical_pen = 0
    this.magic_pen_per = 0
    this.magic_pen_flat = 0
    this.lifesteal = 0
    this.hp_regen = hp_regen
    this.mana_regen = mana_regen
    this.magic_power = 0
    this.magic_armor = mag_armor
    this.spell_vamp = 0
    this.move_speed_flat = move_speed
    this.move_speed_per = 0
    this.cdr = 0
    this.atk_speed = atk_speed
    this.crit_chance = 0
    this.attack = attack
    this.resilience = 0
    this.crit_reduction = 0
    this.hero_name = null;

    //emblem stat
    this.em_hp = 0
    this.em_mana = 0
    this.em_armor = 0
    this.em_physical_pen = 0
    this.em_physical_pen_flat = 0
    this.em_magic_pen_per = 0
    this.em_magic_pen_flat = 0
    this.em_lifesteal = 0
    this.em_hp_regen = 0
    this.em_mana_regen = 0
    this.em_magic_power = 0
    this.em_magic_armor = 0
    this.em_spell_vamp = 0
    this.em_move_speed = 0
    this.em_move_speed_per = 0
    this.em_cdr = 0
    this.em_atk_speed = 0
    this.em_crit_chance = 0
    this.em_attack = 0
    this.em_level = 0

    //talent stat
    this.talent_armor = 0
    this.talent_armor_per = 0
    this.talent_attack_speed = 0
    this.talent_battle_spell = 0
    this.talent_cd_reduction = 0
    this.talent_crit_chance = 0
    this.talent_crit_dmg = 0
    this.talent_dmg_to_monster = 0
    this.talent_healing_effect = 0
    this.talent_hp = 0
    this.talent_hp_regen = 0
    this.talent_lifesteal = 0
    this.talent_magic_armor = 0
    this.talent_magic_armor_per = 0
    this.talent_magic_pen_flat = 0
    this.talent_magic_power = 0
    this.talent_magic_power_per = 0
    this.talent_mana = 0
    this.talent_mana_regen = 0
    this.talent_move_speed_per = 0
    this.talent_physical_attack = 0
    this.talent_physical_pen_flat = 0
    this.talent_spell_vamp = 0

    //skill
    this.skill_physical_damage_1 = 0
    this.skill_magic_damage_1 = 0
    this.skill_cooldown_1 = 0
    this.skill_mana_1 = 0
    this.skill_physical_damage_2 = 0
    this.skill_magic_damage_2 = 0
    this.skill_cooldown_2 = 0
    this.skill_mana_2 = 0
    this.skill_physical_damage_3 = 0
    this.skill_magic_damage_3 = 0
    this.skill_cooldown_3 = 0
    this.skill_mana_3 = 0
    this.skill_physical_damage_4 = 0
    this.skill_magic_damage_4 = 0
    this.skill_cooldown_4 = 0
    this.skill_mana_4 = 0
    this.skill_physical_damage_5 = 0
    this.skill_magic_damage_5 = 0
    this.skill_cooldown_5 = 0
    this.skill_mana_5 = 0
    this.skill_physical_damage_6 = 0
    this.skill_magic_damage_6 = 0
    this.skill_cooldown_6 = 0
    this.skill_mana_6 = 0
    this.skill_physical_damage_7 = 0
    this.skill_magic_damage_7 = 0
    this.skill_cooldown_7 = 0
    this.skill_mana_7 = 0


    //limit
    this.max_cdr = 40 //%
    this.max_movespeed = 450
    this.max_atk_speed = 2.50 //%


    //hero growth
    this.atk_growth = 0
    this.hp_growth = 0
    this.mana_growth = 0
    this.mana_regen_growth = 0
    this.atk_speed_growth = 0
    this.armor_growth = 0
    this.hp_regen_growth = 0
    this.magic_armor_growth = 0

    //misc
    this.level = 0
    this.val = 0

    //total
    this.total_cost = 0
    this.total_physical_attack = 0;
    this.total_magic_attack = 0;
    this.total_cdr = 0;
    this.total_added_physical_attack = 0;
    this.total_added_magic_attack = 0;
    this.item_added_physical_attack = 0;
    this.item_added_magic_attack = 0;
    this.total_added_cdr = 0;
    this.item_added_cdr = 0;
    this.total_added_hp = 0;
    this.total_added_movespeed = 0;
    this.total_added_cdr = 0;
    this.total_added_spell_vamp = 0;



    //SETTER

    this.setHeroGrowth = function(atk, hp, mana, atk_speed, hp_regen, magic_armor, mana_regen, armor)
    {
        this.atk_growth = atk
        this.mana_growth = mana
        this.hp_growth = hp
        this.mana_regen_growth = mana_regen
        this.atk_speed_growth = atk_speed
        this.armor_growth = armor
        this.hp_regen_growth = hp_regen
        this.magic_armor_growth = magic_armor
    }

    this.setHeroLevel=function(level)
    {this.level=level}
    this.setAttackGrowth=function(attack)
    {return this.attack=attack}
    this.setHpGrowth=function(hp)
    {return this.hp=hp}
    this.setHpRegenGrowth=function(hp_regen)
    {return this.hp_regen=hp_regen}
    this.setManaGrowth=function(mana)
    {return this.mana=mana}
    this.setManaRegenGrowth=function(mana_regen)
    {return this.mana_regen=mana_regen}
    this.setArmorGrowth=function(armor)
    {return this.armor=armor}
    this.setMagicArmorGrowth=function(magic_armor)
    {return this.magic_armor=magic_armor}
    this.setAttackSpeedGrowth=function(atk_speed)
    {return this.atk_speed=atk_speed}
    this.setAttack=function(attack)
    {return this.attack=attack}
    this.setHp=function(hp)
    {return this.hp=hp}
    this.setMana=function(mana)
    {return this.mana=mana}
    this.setArmor=function(armor)
    {return this.armor=armor}
    this.setPhysicalPen=function(physical_pen)
    {return this.physical_pen=physical_pen}
    this.setMagicPenFlat=function(magic_pen_flat)
    {return this.magic_pen_flat=magic_pen_flat}
    this.setMagicPenPer=function(magic_pen_per)
    {return this.magic_pen_per=magic_pen_per}
    this.setLifesteal=function(lifesteal)
    {return this.lifesteal=lifesteal}
    this.setHpRegen=function(hp_regen)
    {return this.hp_regen=hp_regen}
    this.setManaRegen=function(mana_regen)
    {return this.mana_regen=mana_regen}
    this.setMagicPower=function(magic_power)
    {return this.magic_power=magic_power}
    this.setMagicArmor=function(magic_armor)
    {return this.magic_armor=magic_armor}
    this.setManaRegen=function(mana_regen)
    {return this.mana_regen=mana_regen}
    this.setSpellVamp=function(spell_vamp)
    {return this.spell_vamp=spell_vamp}
    this.setMoveSpeed=function(move_speed_flat)
    {return this.move_speed_flat=move_speed_flat}
    this.setCdr=function(cdr)
    {return this.cdr=cdr}
    this.setAttackSpeed=function(atk_speed)
    {return this.atk_speed=atk_speed}
    this.setCritChance=function(crit_chance)
    {return this.crit_chance=crit_chance}
    this.setResilience=function(resilience)
    {return this.resilience=resilience}
    this.setCritReduction=function(crit_reduction)
    {return this.crit_reduction=crit_reduction}
    this.setMoveSpeedPer=function(move_speed_per)
    {return this.move_speed_per=move_speed_per}
    this.getHeroLevel=function()
    {return this.level}
    this.getHp=function()
    {return this.hp}
    this.getMana=function()
    {return this.mana}
    this.getArmor=function()
    {return this.armor}
    this.getPhysicalPen=function()
    {return this.physical_pen}
    this.getLifesteal=function()
    {return this.lifesteal}
    this.getHpRegen=function()
    {return this.hp_regen}
    this.getManaRegen=function()
    {return this.mana_regen}
    this.getMagicPower=function()
    {return this.magic_power}
    this.getMagicResistance=function()
    {return this.magic_armor}
    this.getMagicPenFlat=function()
    {return this.magic_pen_flat}
    this.getMagicPenPer=function()
    {return this.magic_pen_per}
    this.getSpellVamp=function()
    {return this.spell_vamp}
    this.getMoveSpeed=function()
    {return this.move_speed_flat}
    this.getCdr=function()
    {return this.cdr}
    this.getAttackSpeed=function()
    {return this.atk_speed}
    this.getCritChance=function()
    {return this.crit_chance}
    this.getAttack=function()
    {return this.attack}
    this.getMoveSpeedPer=function(added)
    {return this.move_speed_per}
    this.getHpGrowth=function()
    {return this.hp_growth}
    this.getResilience=function(added)
    {return this.resilience}
    this.getCritReduction=function(added)
    {return this.crit_reduction}
    this.getHpRegenGrowth=function()
    {return this.hp_regen_growth}
    this.getManaGrowth=function()
    {return this.mana_growth}
    this.getManaRegenGrowth=function()
    {return this.mana_regen_growth}
    this.getAttackSpeedGrowth=function()
    {return this.atk_speed_growth}
    this.getAttackGrowth=function()
    {return this.atk_growth}
    this.getArmorGrowth=function()
    {return this.armor_growth}
    this.getMagicArmorGrowth=function()
    {return this.magic_armor_growth}
    this.setEm_hp=function(em_hp)
    {this.em_hp=em_hp}
    this.getEm_hp=function()
    {return this.em_hp}
    this.setEm_mana=function(em_mana)
    {this.em_mana=em_mana}
    this.getEm_mana=function()
    {return this.em_mana}
    this.setEm_armor=function(em_armor)
    {this.em_armor=em_armor}
    this.getEm_armor=function()
    {return this.em_armor}
    this.setEm_physical_pen=function(em_physical_pen)
    {this.em_physical_pen=em_physical_pen}
    this.getEm_physical_pen=function()
    {return this.em_physical_pen}
    this.setEm_physical_pen_flat=function(em_physical_pen_flat)
    {this.em_physical_pen_flat=em_physical_pen_flat}
    this.getEm_physical_pen_flat=function()
    {return this.em_physical_pen_flat}
    this.setEm_magic_pen_per=function(em_magic_pen_per)
    {this.em_magic_pen_per=em_magic_pen_per}
    this.getEm_magic_pen_per=function()
    {return this.em_magic_pen_per}
    this.setEm_magic_pen_flat=function(em_magic_pen_flat)
    {this.em_magic_pen_flat=em_magic_pen_flat}
    this.getEm_magic_pen_flat=function()
    {return this.em_magic_pen_flat}
    this.setEm_lifesteal=function(em_lifesteal)
    {this.em_lifesteal=em_lifesteal}
    this.getEm_lifesteal=function()
    {return this.em_lifesteal}
    this.setEm_hp_regen=function(em_hp_regen)
    {this.em_hp_regen=em_hp_regen}
    this.getEm_hp_regen=function()
    {return this.em_hp_regen}
    this.setEm_mana_regen=function(em_mana_regen)
    {this.em_mana_regen=em_mana_regen}
    this.getEm_mana_regen=function()
    {return this.em_mana_regen}
    this.setEm_magic_power=function(em_magic_power)
    {this.em_magic_power=em_magic_power}
    this.getEm_magic_power=function()
    {return this.em_magic_power}
    this.setEm_magic_armor=function(em_magic_armor)
    {this.em_magic_armor=em_magic_armor}
    this.getEm_magic_armor=function()
    {return this.em_magic_armor}
    this.setEm_spell_vamp=function(em_spell_vamp)
    {this.em_spell_vamp=em_spell_vamp}
    this.getEm_spell_vamp=function()
    {return this.em_spell_vamp}
    this.setEm_move_speed=function(em_move_speed)
    {this.em_move_speed=em_move_speed}
    this.getEm_move_speed=function()
    {return this.em_move_speed}
    this.setEm_move_speed_per=function(em_move_speed_per)
    {this.em_move_speed_per=em_move_speed_per}
    this.getEm_move_speed_per=function()
    {return this.em_move_speed_per}
    this.setEm_cdr=function(em_cdr)
    {this.em_cdr=em_cdr}
    this.getEm_cdr=function()
    {return this.em_cdr}
    this.setEm_atk_speed=function(em_atk_speed)
    {this.em_atk_speed=em_atk_speed}
    this.getEm_atk_speed=function()
    {return this.em_atk_speed}
    this.setEm_crit_chance=function(em_crit_chance)
    {this.em_crit_chance=em_crit_chance}
    this.getEm_crit_chance=function()
    {return this.em_crit_chance}
    this.setEm_attack=function(em_attack)
    {this.em_attack=em_attack}
    this.getEm_attack=function()
    {return this.em_attack}
    this.setEm_level=function(em_level)
    {this.em_level=em_level}
    this.getEm_level=function()
    {return this.em_level}
    this.setMax_cdr=function(max_cdr)
    {this.max_cdr=max_cdr}
    this.getMax_cdr=function()
    {return this.max_cdr}
    this.setMax_movespeed=function(max_movespeed)
    {this.max_movespeed=max_movespeed}
    this.getMax_movespeed=function()
    {return this.max_movespeed}
    this.setMax_atk_speed=function(max_atk_speed)
    {this.max_atk_speed=max_atk_speed}
    this.getMax_atk_speed=function()
    {return this.max_atk_speed}
    this.setTotal_cost=function(total_cost)
    {this.total_cost=total_cost}
    this.getTotal_cost=function()
    {return this.total_cost}
    this.setTalent_armor=function(talent_armor)
    {this.talent_armor=talent_armor}
    this.getTalent_armor=function()
    {return this.talent_armor}
    this.setTalent_armor_per=function(talent_armor_per)
    {this.talent_armor_per=talent_armor_per}
    this.getTalent_armor_per=function()
    {return this.talent_armor_per}
    this.setTalent_attack_speed=function(talent_attack_speed)
    {this.talent_attack_speed=talent_attack_speed}
    this.getTalent_attack_speed=function()
    {return this.talent_attack_speed}
    this.setTalent_battle_spell=function(talent_battle_spell)
    {this.talent_battle_spell=talent_battle_spell}
    this.getTalent_battle_spell=function()
    {return this.talent_battle_spell}
    this.setTalent_cd_reduction=function(talent_cd_reduction)
    {this.talent_cd_reduction=talent_cd_reduction}
    this.getTalent_cd_reduction=function()
    {return this.talent_cd_reduction}
    this.setTalent_crit_chance=function(talent_crit_chance)
    {this.talent_crit_chance=talent_crit_chance}
    this.getTalent_crit_chance=function()
    {return this.talent_crit_chance}
    this.setTalent_crit_dmg=function(talent_crit_dmg)
    {this.talent_crit_dmg=talent_crit_dmg}
    this.getTalent_crit_dmg=function()
    {return this.talent_crit_dmg}
    this.setTalent_dmg_to_monster=function(talent_dmg_to_monster)
    {this.talent_dmg_to_monster=talent_dmg_to_monster}
    this.getTalent_dmg_to_monster=function()
    {return this.talent_dmg_to_monster}
    this.setTalent_healing_effect=function(talent_healing_effect)
    {this.talent_healing_effect=talent_healing_effect}
    this.getTalent_healing_effect=function()
    {return this.talent_healing_effect}
    this.setTalent_hp=function(talent_hp)
    {this.talent_hp=talent_hp}
    this.getTalent_hp=function()
    {return this.talent_hp}
    this.setTalent_hp_regen=function(talent_hp_regen)
    {this.talent_hp_regen=talent_hp_regen}
    this.getTalent_hp_regen=function()
    {return this.talent_hp_regen}
    this.setTalent_lifesteal=function(talent_lifesteal)
    {this.talent_lifesteal=talent_lifesteal}
    this.getTalent_lifesteal=function()
    {return this.talent_lifesteal}
    this.setTalent_magic_armor=function(talent_magic_armor)
    {this.talent_magic_armor=talent_magic_armor}
    this.getTalent_magic_armor=function()
    {return this.talent_magic_armor}
    this.setTalent_magic_armor_per=function(talent_magic_armor_per)
    {this.talent_magic_armor_per=talent_magic_armor_per}
    this.getTalent_magic_armor_per=function()
    {return this.talent_magic_armor_per}
    this.setTalent_magic_pen_flat=function(talent_magic_pen_flat)
    {this.talent_magic_pen_flat=talent_magic_pen_flat}
    this.getTalent_magic_pen_flat=function()
    {return this.talent_magic_pen_flat}
    this.setTalent_magic_power=function(talent_magic_power)
    {this.talent_magic_power=talent_magic_power}
    this.getTalent_magic_power=function()
    {return this.talent_magic_power}
    this.setTalent_magic_power_per=function(talent_magic_power_per)
    {this.talent_magic_power_per=talent_magic_power_per}
    this.getTalent_magic_power_per=function()
    {return this.talent_magic_power_per}
    this.setTalent_mana=function(talent_mana)
    {this.talent_mana=talent_mana}
    this.getTalent_mana=function()
    {return this.talent_mana}
    this.setTalent_mana_regen=function(talent_mana_regen)
    {this.talent_mana_regen=talent_mana_regen}
    this.getTalent_mana_regen=function()
    {return this.talent_mana_regen}
    this.setTalent_move_speed_per=function(talent_move_speed_per)
    {this.talent_move_speed_per=talent_move_speed_per}
    this.getTalent_move_speed_per=function()
    {return this.talent_move_speed_per}
    this.setTalent_physical_attack=function(talent_physical_attack)
    {this.talent_physical_attack=talent_physical_attack}
    this.getTalent_physical_attack=function()
    {return this.talent_physical_attack}
    this.setTalent_physical_pen_flat=function(talent_physical_pen_flat)
    {this.talent_physical_pen_flat=talent_physical_pen_flat}
    this.getTalent_physical_pen_flat=function()
    {return this.talent_physical_pen_flat}
    this.setTalent_spell_vamp=function(talent_spell_vamp)
    {this.talent_spell_vamp=talent_spell_vamp}
    this.getTalent_spell_vamp=function()
    {return this.talent_spell_vamp}
    this.setSkill_physical_damage_1=function(skill_physical_damage_1){this.skill_physical_damage_1=skill_physical_damage_1}
    this.getSkill_physical_damage_1=function(){return this.skill_physical_damage_1}
    this.setSkill_magic_damage_1=function(skill_magic_damage_1){this.skill_magic_damage_1=skill_magic_damage_1}
    this.getSkill_magic_damage_1=function(){return this.skill_magic_damage_1}
    this.setSkill_cooldown_1=function(skill_cooldown_1){this.skill_cooldown_1=skill_cooldown_1}
    this.getSkill_cooldown_1=function(){return this.skill_cooldown_1}
    this.setSkill_mana_1=function(skill_mana_1){this.skill_mana_1=skill_mana_1}
    this.getSkill_mana_1=function(){return this.skill_mana_1}
    this.setSkill_physical_damage_2=function(skill_physical_damage_2){this.skill_physical_damage_2=skill_physical_damage_2}
    this.getSkill_physical_damage_2=function(){return this.skill_physical_damage_2}
    this.setSkill_magic_damage_2=function(skill_magic_damage_2){this.skill_magic_damage_2=skill_magic_damage_2}
    this.getSkill_magic_damage_2=function(){return this.skill_magic_damage_2}
    this.setSkill_cooldown_2=function(skill_cooldown_2){this.skill_cooldown_2=skill_cooldown_2}
    this.getSkill_cooldown_2=function(){return this.skill_cooldown_2}
    this.setSkill_mana_2=function(skill_mana_2){this.skill_mana_2=skill_mana_2}
    this.getSkill_mana_2=function(){return this.skill_mana_2}
    this.setSkill_physical_damage_3=function(skill_physical_damage_3){this.skill_physical_damage_3=skill_physical_damage_3}
    this.getSkill_physical_damage_3=function(){return this.skill_physical_damage_3}
    this.setSkill_magic_damage_3=function(skill_magic_damage_3){this.skill_magic_damage_3=skill_magic_damage_3}
    this.getSkill_magic_damage_3=function(){return this.skill_magic_damage_3}
    this.setSkill_cooldown_3=function(skill_cooldown_3){this.skill_cooldown_3=skill_cooldown_3}
    this.getSkill_cooldown_3=function(){return this.skill_cooldown_3}
    this.setSkill_mana_3=function(skill_mana_3){this.skill_mana_3=skill_mana_3}
    this.getSkill_mana_3=function(){return this.skill_mana_3}
    this.setSkill_physical_damage_4=function(skill_physical_damage_4){this.skill_physical_damage_4=skill_physical_damage_4}
    this.getSkill_physical_damage_4=function(){return this.skill_physical_damage_4}
    this.setSkill_magic_damage_4=function(skill_magic_damage_4){this.skill_magic_damage_4=skill_magic_damage_4}
    this.getSkill_magic_damage_4=function(){return this.skill_magic_damage_4}
    this.setSkill_cooldown_4=function(skill_cooldown_4){this.skill_cooldown_4=skill_cooldown_4}
    this.getSkill_cooldown_4=function(){return this.skill_cooldown_4}
    this.setSkill_mana_4=function(skill_mana_4){this.skill_mana_4=skill_mana_4}
    this.getSkill_mana_4=function(){return this.skill_mana_4}
    this.setSkill_physical_damage_5=function(skill_physical_damage_5){this.skill_physical_damage_5=skill_physical_damage_5}
    this.getSkill_physical_damage_5=function(){return this.skill_physical_damage_5}
    this.setSkill_magic_damage_5=function(skill_magic_damage_5){this.skill_magic_damage_5=skill_magic_damage_5}
    this.getSkill_magic_damage_5=function(){return this.skill_magic_damage_5}
    this.setSkill_cooldown_5=function(skill_cooldown_5){this.skill_cooldown_5=skill_cooldown_5}
    this.getSkill_cooldown_5=function(){return this.skill_cooldown_5}
    this.setSkill_mana_5=function(skill_mana_5){this.skill_mana_5=skill_mana_5}
    this.getSkill_mana_5=function(){return this.skill_mana_5}
    this.setSkill_physical_damage_6=function(skill_physical_damage_6){this.skill_physical_damage_6=skill_physical_damage_6}
    this.getSkill_physical_damage_6=function(){return this.skill_physical_damage_6}
    this.setSkill_magic_damage_6=function(skill_magic_damage_6){this.skill_magic_damage_6=skill_magic_damage_6}
    this.getSkill_magic_damage_6=function(){return this.skill_magic_damage_6}
    this.setSkill_cooldown_6=function(skill_cooldown_6){this.skill_cooldown_6=skill_cooldown_6}
    this.getSkill_cooldown_6=function(){return this.skill_cooldown_6}
    this.setSkill_mana_6=function(skill_mana_6){this.skill_mana_6=skill_mana_6}
    this.getSkill_mana_6=function(){return this.skill_mana_6}
    this.setSkill_physical_damage_7=function(skill_physical_damage_7){this.skill_physical_damage_7=skill_physical_damage_7}
    this.getSkill_physical_damage_7=function(){return this.skill_physical_damage_7}
    this.setSkill_magic_damage_7=function(skill_magic_damage_7){this.skill_magic_damage_7=skill_magic_damage_7}
    this.getSkill_magic_damage_7=function(){return this.skill_magic_damage_7}
    this.setSkill_cooldown_7=function(skill_cooldown_7){this.skill_cooldown_7=skill_cooldown_7}
    this.getSkill_cooldown_7=function(){return this.skill_cooldown_7}
    this.setSkill_mana_7=function(skill_mana_7){this.skill_mana_7=skill_mana_7}
    this.getSkill_mana_7=function(){return this.skill_mana_7}
    this.setTotal_physical_attack = function(total_physical_attack) { this.total_physical_attack = total_physical_attack; } 
    this.getTotal_physical_attack = function() { return this.total_physical_attack; } 
    this.setTotal_magic_attack = function(total_magic_attack) { this.total_magic_attack = total_magic_attack; } 
    this.getTotal_magic_attack = function() { return this.total_magic_attack; } 
    this.setTotal_cdr = function(total_cdr) { this.total_cdr = total_cdr; } 
    this.getTotal_cdr = function() { return this.total_cdr; } 
    this.setTotal_added_physical_attack = function(total_added_physical_attack) { this.total_added_physical_attack = total_added_physical_attack; } 
    this.getTotal_added_physical_attack = function() { return this.total_added_physical_attack; } 
    this.setTotal_added_magic_attack = function(total_added_magic_attack) { this.total_added_magic_attack = total_added_magic_attack; } 
    this.getTotal_added_magic_attack = function() { return this.total_added_magic_attack; } 
    this.setItem_added_physical_attack = function(item_added_physical_attack) { this.item_added_physical_attack = item_added_physical_attack; } 
    this.getItem_added_physical_attack = function() { return this.item_added_physical_attack; } 
    this.setItem_added_magic_attack = function(item_added_magic_attack) { this.item_added_magic_attack = item_added_magic_attack; } 
    this.getItem_added_magic_attack = function() { return this.item_added_magic_attack; } 
    this.setTotal_added_cdr = function(total_added_cdr) { this.total_added_cdr = total_added_cdr; } 
    this.getTotal_added_cdr = function() { return this.total_added_cdr; } 
    this.setItem_added_cdr = function(item_added_cdr) { this.item_added_cdr = item_added_cdr; } 
    this.getItem_added_cdr = function() { return this.item_added_cdr; } 
    this.setHero_name = function(hero_name) { this.hero_name = hero_name; } 
    this.getHero_name = function() { return this.hero_name; } 

this.setTotal_added_hp = function(total_added_hp) { this.total_added_hp = total_added_hp; } 
this.getTotal_added_hp = function() { return this.total_added_hp; } 
this.setTotal_added_movespeed = function(total_added_movespeed) { this.total_added_movespeed = total_added_movespeed; } 
this.getTotal_added_movespeed = function() { return this.total_added_movespeed; } 
this.setTotal_added_cdr = function(total_added_cdr) { this.total_added_cdr = total_added_cdr; } 
this.getTotal_added_cdr = function() { return this.total_added_cdr; } 
this.setTotal_added_spell_vamp = function(total_added_spell_vamp) { this.total_added_spell_vamp = total_added_spell_vamp; } 
this.getTotal_added_spell_vamp = function() { return this.total_added_spell_vamp; } 


   
}

