function Champion (hp,mana,armor,hp_regen,mana_regen,mag_armor,move_speed,atk_speed,attack) 
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


  //hero growth
  this.atk_growth = 0
  this.hp_growth = 0
  this.mana_growth = 0
  this.mana_regen_growth = 0
  this.atk_speed_growth = 0
  this.armor_growth = 0
  this.hp_regen_growth = 0
  this.magic_armor_growth = 0

  this.level = 0
  this.val = 0

  //SETTER

  this.setHeroGrowth = function (atk, hp , mana , atk_speed , hp_regen , magic_armor , mana_regen , armor ) 
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

  this.setHeroLevel = function (level) 
  {
    this.level = level
  }

  this.setAttackGrowth = function (growth,lvl) 
  {
    return this.attack = (parseInt(this.attack) + parseInt(growth) * parseInt(lvl))
  }

  this.setHpGrowth = function (growth,lvl) 
  {
    return this.hp = (parseInt(this.hp) + parseInt(growth) * parseInt(lvl))
  }

  this.setHpRegenGrowth = function (growth,lvl) 
  {
    return this.hp_regen = (parseInt(this.hp_regen) + parseInt(growth) * parseInt(lvl))
  }

  this.setManaGrowth = function (growth,lvl) 
  {
    return this.mana = (parseInt(this.mana) + parseInt(growth) * parseInt(lvl))
  }

  this.setManaRegenGrowth = function (growth,lvl) 
  {
    return this.mana_regen = (parseInt(this.mana_regen) + parseInt(growth) * parseInt(lvl))
  }

  this.setArmorGrowth = function (growth,lvl) 
  {
    return this.armor = (parseInt(this.armor) + parseInt(growth) * parseInt(lvl))
  }

  this.setMagicArmorGrowth = function (growth,lvl) 
  {
    return this.magic_armor = (parseInt(this.magic_armor) + (parseInt(growth) * parseInt(lvl)))
  }

  this.setAttackSpeedGrowth = function (growth,lvl) 
  {
    return this.atk_speed =  (parseFloat(this.atk_speed/100) + parseFloat((parseInt(growth) * parseInt(lvl))/1000))
  }

  this.setAttack = function (added)
  {
    return this.attack = (parseInt(this.attack) + parseInt(added))
  }

  this.setHp = function (added)
  {
    return this.hp = (parseInt(this.hp) + parseInt(added))
  }

  this.setMana = function (added)
  {
    return this.mana = (parseInt(this.mana) + parseInt(added))
  }

  this.setArmor = function (added)
  {
    return this.armor = (parseInt(this.armor) + parseInt(added))
  }

  this.setPhysicalPen = function (added)
  {
    return this.physical_pen = (parseInt(this.physical_pen) + parseInt(added))
  }

  this.setMagicPenFlat = function (added)
  {
    return this.magic_pen_flat = (parseInt(this.magic_pen_flat) + parseInt(added))
  }

  this.setMagicPenPer = function (added)
  {
    return this.magic_pen_per = (parseInt(this.magic_pen_per) + parseInt(added))
  }

  this.setLifesteal = function (added)
  {
    return this.lifesteal = (parseInt(this.lifesteal) + parseInt(added))
  }

  this.setHpRegen = function (added)
  {
    return this.hp_regen = (parseInt(this.hp_regen) + parseInt(added))
  }

  this.setManaRegen = function (added)
  {
    return this.mana_regen = (parseInt(this.mana_regen) + parseInt(added))
  }

  this.setMagicPower = function (added)
  {
    return this.magic_power = (parseInt(this.magic_power) + parseInt(added))
  }

  this.setMagicArmor = function (added)
  {
    return this.magic_armor = (parseInt(this.magic_armor) + parseInt(added))
  }

  this.setManaRegen = function (added)
  {
    return this.mana_regen = (parseInt(this.mana_regen) + parseInt(added))
  }

  this.setSpellVamp = function (added)
  {
    return this.spell_vamp = (parseInt(this.spell_vamp) + parseInt(added))
  }

  this.setMoveSpeed = function (added)
  {
    return this.move_speed_flat = (parseInt(this.move_speed_flat) + parseInt(added))
  }

  this.setCdr = function (added)
  {
    return this.cdr = (parseInt(this.cdr) + parseInt(added))
  }

  this.setAttackSpeed = function (added)
  {
    return this.atk_speed = (parseFloat(this.atk_speed) + parseFloat(added/100))
  }

  this.setCritChance = function (added)
  {
    return this.crit_chance = (parseInt(this.crit_chance) + parseInt(added))
  }

  this.setResilience = function (added)
  {
    return this.resilience = (parseInt(this.resilience) + parseInt(added))
  }

  this.setCritReduction = function (added)
  {
    return this.crit_reduction = (parseInt(this.crit_reduction) + parseInt(added))
  }

  this.setMoveSpeedPer = function (added)
  {
    return this.move_speed_per = (parseInt(this.move_speed_per) + parseInt(added))
  }

  // GETTER

  this.getHeroLevel = function () 
  {
    return this.level
  }

  this.getHp = function () 
  {
    return this.hp
  }

  this.getMana = function () 
  {
    return this.mana
  }

  this.getArmor = function () 
  {
    return this.armor
  }

  this.getPhysicalPen = function () 
  {
    return this.physical_pen
  }

  this.getLifesteal = function () 
  {
    return this.lifesteal
  }

  this.getHpRegen = function () 
  {
    return this.hp_regen
  }

  this.getManaRegen = function () 
  {
    return this.mana_regen
  }

  this.getMagicPower = function () 
  {
    return this.magic_power
  }

  this.getMagicResistance = function () 
  {
    return this.magic_armor
  }

  this.getMagicPenFlat = function () 
  {
    return this.magic_pen_flat
  }

   this.getMagicPenPer = function () 
  {
    return this.magic_pen_per
  }

  this.getSpellVamp = function () 
  {
    return this.spell_vamp
  }

  this.getMoveSpeed = function () 
  {
    return this.move_speed_flat = parseFloat(this.move_speed_flat + (parseFloat(this.move_speed_flat * (this.move_speed_per/100))))
  }

  this.getCdr = function () 
  {
    return this.cdr
  }

  this.getAttackSpeed = function () 
  {
    return this.atk_speed
  }

  this.getCritChance = function () 
  {
    return this.crit_chance
  }

  this.getAttack = function () 
  {
    return this.attack
  }

  this.getMoveSpeedPer = function (added)
  {
    return this.move_speed_per  
  }

  this.getHpGrowth = function () 
  {
    return this.hp_growth
  }

  this.getResilience = function (added)
  {
    return this.resilience 
  }

  this.getCritReduction = function (added)
  {
    return this.crit_reduction 
  }

  this.getHpRegenGrowth = function () 
  {
    return this.hp_regen_growth
  }

  this.getManaGrowth = function () 
  {
    return this.mana_growth
  }

  this.getManaRegenGrowth = function () 
  {
    return this.mana_regen_growth
  }

  this.getAttackSpeedGrowth = function ()
  {
    return this.atk_speed_growth
  }

  this.getAttackGrowth = function () 
  {
    return this.atk_growth
  }

  this.getArmorGrowth = function () 
  {
    return this.armor_growth
  }

  this.getMagicArmorGrowth = function () 
  {
    return this.magic_armor_growth
  }

  
}