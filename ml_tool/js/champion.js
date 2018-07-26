function Champion (hp,mana,armor,hp_regen,mana_regen,mag_armor,move_speed,atk_speed,attack) 
{
 
  //base stats
  this.hp = hp
  this.mana = mana
  this.armor = armor
  this.physical_pen = 0
  this.lifesteal = 0
  this.hp_regen = hp_regen
  this.mana_regen = mana_regen
  this.magic_power = 0
  this.magic_armor = mag_armor
  this.magic_pen = 0
  this.spell_vamp = 0
  this.move_speed = move_speed
  this.cdr = 0
  this.atk_speed = atk_speed
  this.crit_chance = 0
  this.attack = attack

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

  this.setHeroGrowth = function (atk, hp , mana , atk_speed , hp_regen , magic_armor , mana_regen , armor ) 
  {
    this.atk_growth = atk
    this.mana_growth = mana
    this.hp_growth = hp
    this.mana_regen_growth = mana_regen
    this.atk_speed_growth = atk_speed
    this.armor_growth = armor
    this.hp_regen_growth = hp_regen
    this.magic_armor_growth = mag_armor
  }

  this.setHeroLevel = function (level) 
  {
    this.level = level
  }

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

  this.getMagicPen = function () 
  {
    return this.magic_pen
  }

  this.getSpellVamp = function () 
  {
    return this.spell_vamp
  }

  this.getMoveSpeed = function () 
  {
    return this.move_speed
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

  this.getHpGrowth = function () 
  {
    return this.hp_growth
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