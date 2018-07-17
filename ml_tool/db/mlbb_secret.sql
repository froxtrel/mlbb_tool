-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 17, 2018 at 09:33 AM
-- Server version: 10.1.32-MariaDB
-- PHP Version: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mlbb_secret`
--

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `ID` int(11) NOT NULL,
  `ITEM_PHOTO` text NOT NULL,
  `ITEM_NAME` varchar(255) NOT NULL,
  `ITEM_PRICE` int(10) NOT NULL,
  `ITEM_CATEGORY` varchar(255) NOT NULL,
  `ITEM_PHYSICAL_ATK` int(10) NOT NULL DEFAULT '0',
  `ITEM_LIFESTEAL` int(10) NOT NULL DEFAULT '0',
  `ITEM_CD_REDUCTION` int(10) NOT NULL DEFAULT '0',
  `ITEM_PHYSICAL_ARMOR` int(10) NOT NULL DEFAULT '0',
  `ITEM_SPELL_LIFESTEAL` int(10) NOT NULL DEFAULT '0',
  `ITEM_MANA_REGEN` int(10) NOT NULL DEFAULT '0',
  `ITEM_MAGIC_ARMOR` int(10) NOT NULL DEFAULT '0',
  `ITEM_MAGIC_PEN_FLAT` int(10) NOT NULL DEFAULT '0',
  `ITEM_PHYSICAL_PEN_FLAT` int(10) NOT NULL DEFAULT '0',
  `ITEM_MAGIC_PEN_PER` int(10) NOT NULL DEFAULT '0',
  `ITEM_PHYSICAL_PEN_PER` int(10) NOT NULL DEFAULT '0',
  `ITEM_CRIT_CHANCE` int(10) NOT NULL DEFAULT '0',
  `ITEM_HP_REGEN` int(10) NOT NULL DEFAULT '0',
  `ITEM_CRIT_REDUCTION` int(10) NOT NULL DEFAULT '0',
  `ITEM_HP` int(10) NOT NULL DEFAULT '0',
  `ITEM_MANA` int(10) NOT NULL DEFAULT '0',
  `ITEM_MOVE_SPEED_FLAT` int(10) NOT NULL DEFAULT '0',
  `ITEM_MOVE_SPEED_PER` int(10) NOT NULL DEFAULT '0',
  `ITEM_ATK_SPEED_FLAT` int(10) NOT NULL DEFAULT '0',
  `ITEM_ATK_SPEED_PER` int(10) NOT NULL DEFAULT '0',
  `ITEM_MAGIC_POWER` int(10) NOT NULL DEFAULT '0',
  `RESILIENCE` int(10) NOT NULL DEFAULT '0',
  `ITEM_PASSIVE` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`ID`, `ITEM_PHOTO`, `ITEM_NAME`, `ITEM_PRICE`, `ITEM_CATEGORY`, `ITEM_PHYSICAL_ATK`, `ITEM_LIFESTEAL`, `ITEM_CD_REDUCTION`, `ITEM_PHYSICAL_ARMOR`, `ITEM_SPELL_LIFESTEAL`, `ITEM_MANA_REGEN`, `ITEM_MAGIC_ARMOR`, `ITEM_MAGIC_PEN_FLAT`, `ITEM_PHYSICAL_PEN_FLAT`, `ITEM_MAGIC_PEN_PER`, `ITEM_PHYSICAL_PEN_PER`, `ITEM_CRIT_CHANCE`, `ITEM_HP_REGEN`, `ITEM_CRIT_REDUCTION`, `ITEM_HP`, `ITEM_MANA`, `ITEM_MOVE_SPEED_FLAT`, `ITEM_MOVE_SPEED_PER`, `ITEM_ATK_SPEED_FLAT`, `ITEM_ATK_SPEED_PER`, `ITEM_MAGIC_POWER`, `RESILIENCE`, `ITEM_PASSIVE`) VALUES
(1, 'https://bytiger.com/images/ext_mobile_legend/a02.png', 'DEMON HUNTER SWORD', 2180, 'ATTACK', 35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 'Unique Passive-Devour: Basic attacks will deal 10% of the target\'s current HP as additional physical damage (up to 60 against monsters).<hr>\r\nUnique Passive-Devour: Each basic attack grants 4% health stealing for 3 seconds. Stacks up to 5 times.'),
(2, 'https://bytiger.com/images/ext_mobile_legend/a03.png', 'DEADLY BLADE', 2050, 'ATTACK', 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 'Unique Passive-Life Drain: Basic attack reduces HP regen effect by 50% for 3 seconds.'),
(3, 'https://bytiger.com/images/ext_mobile_legend/a04.png', 'CORROSION SCYTHE', 2250, 'ATTACK', 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 25, 0, 0, 'Unique Passive-Corrosion: Basic attacks have 50% probability of slowing the enemy unit by 40%. Long-ranged basic attacks only slow enemies by 20%.<hr>\r\nUnique Passive-Impulse: Basic attack deals damage to enemies, while hero’s attack speed rises by 8%. Stacks up to 5 times. Lasts 3 seconds.'),
(4, 'https://bytiger.com/images/ext_mobile_legend/a16.png', 'GOLDEN STAFF', 2300, 'ATTACK', 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 0, 'Unique Passive-Swift: Every 1% of critical chance will add 1% attack speed.<hr>\r\nUnique Passive-Endless Strike: Normal basic attacks add a stack of Endless Strike. After accumulating 2 stacks of Endless Strike, the effect of the next basic attack is triggered 3 times.'),
(5, 'https://bytiger.com/images/ext_mobile_legend/a17.png', 'WIND OF NATURE', 2060, 'ATTACK', 10, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 'Unique Passive-Wind Chant: Active: Activate to become immune to all physical damage. Lasts 2 seconds. Cooldown is 80 seconds. Duration is reduced by half when not using a marksman.<hr>\r\nUnique Passive-Wind Chant: Immune to all physical damage'),
(6, 'https://bytiger.com/images/ext_mobile_legend/a05.png', 'MALEFIC ROAR', 2060, 'ATTACK', 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Armor Buster: Basic attack will ignore 20% of a defense turret\'s defensive armor.'),
(7, 'https://bytiger.com/images/ext_mobile_legend/a06.png', 'HAAS\'S CLAWS', 1810, 'ATTACK', 70, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Insanity: When HP drops below 40%, the hero will receive an extra 10% physical lifesteal.'),
(8, 'https://bytiger.com/images/ext_mobile_legend/a07.png', 'BERSERKER\'S FURY', 2200, 'ATTACK', 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Doom: Critical hits increase the hero\'s Physical Attack by 5% for 2 seconds.'),
(9, 'https://bytiger.com/images/ext_mobile_legend/a08.png', 'ENDLESS BATTLE', 2470, 'ATTACK', 65, 15, 10, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0, 5, 0, 0, 0, 0, 'Unique Passive-Divine Justice: After using a skill, the next basic attack will deal an additional 85% of Physical Attack as True Damage. This effect has a cooldown of 1.5 seconds.<hr>\r\nUnique Passive-Chase Fate: When Divine Justice\'s effect is triggered, it will increase the hero\'s movement speed 15%.'),
(10, 'https://bytiger.com/images/ext_mobile_legend/a09.png', 'WINDTALKER', 1920, 'ATTACK', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 20, 0, 0, 40, 0, 0, 'Unique Passive-Typhoon: Every 3.5 seconds, basic attacks hit 3 enemy units and deal 100 points of [C3Magic Damage]. This effect’s CD drops as your critical chance rises, while damage rises as attack speed rises.<hr>\r\nUnique Passive-Activate: Each time Typhoon is cast, one\'s movement speed will be increased 5% for a short time.'),
(11, 'https://bytiger.com/images/ext_mobile_legend/a10.png', 'SCARLET PHANTOM', 2120, 'ATTACK', 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 'Unique Passive-Frenzy: Critical hits increase the hero\'s Attack Speed by 30% and Crit Rate by 5% for 2 seconds.'),
(12, 'https://bytiger.com/images/ext_mobile_legend/a11.png', 'BLADE OF THE 7 SEAS', 1950, 'ATTACK', 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Steamroll: Skills will lower the target\'s physical defence by 25 points (applied before damage). Lasts 3 seconds.'),
(13, 'https://bytiger.com/images/ext_mobile_legend/a12.png', 'BLADE OF DESPAIR', 3010, 'ATTACK', 170, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 'Unique Passive-Despair: Deals an extra 10?mage to an enemy in any abnormal state (stunned, knocked airborne, transformed, disabled).'),
(14, 'https://bytiger.com/images/ext_mobile_legend/a13.png', 'HUNTER STRIKE', 2010, 'ATTACK', 100, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Hunt: Attacks the enemy 5 times in a row and improves the hero\'s movement speed by 30% for 2 seconds. This effect has a cooldown of 15 seconds.'),
(15, 'https://bytiger.com/images/ext_mobile_legend/a14.png', 'BLOODLUST AXE', 1970, 'ATTACK', 70, 0, 10, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(16, 'https://bytiger.com/images/ext_mobile_legend/a15.png', 'ROSE GOLD METEOR', 2270, 'ATTACK', 60, 5, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Lifeline: Once the hero’s HP falls below 30% they generate a shield that absorbs 510~1350 points of damage (increases with level) that lasts for 3 seconds. CD is 40 seconds.'),
(17, 'https://bytiger.com/images/ext_mobile_legend/m01.png', 'ENCHANTED TALISMAN', 1870, 'MAGIC', 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 0, 0, 0, 0, 0, 50, 0, 'Unique Passive-Mana Spring: Regen 10% total of one\'s max mana every 10 seconds.'),
(18, 'https://bytiger.com/images/ext_mobile_legend/m02.png', 'WINTER TRUNCHEON', 1910, 'MAGIC', 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 0, 0, 0, 0, 0, 60, 0, 'Unique Passive-Mana Spring: Regen 10% total of one\'s max mana every 10 seconds.<hr>\r\nUnique Passive-Frozen: After activating this skill, the hero is unable to move but is immune to any damage effects, lasts for 2 seconds. CD is 100 seconds.'),
(19, 'https://bytiger.com/images/ext_mobile_legend/m03.png', 'FEATHER OF HEAVEN', 2230, 'MAGIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 30, 65, 0, 'Unique Passive-Affliction: Basic attacks will deal 40% of the hero\'s AP as additional Magic Damage.'),
(20, 'https://bytiger.com/images/ext_mobile_legend/m04.png', 'SOUL SCROLL', 1300, 'MAGIC', 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 'Unique Passive-Soul Steal: Eliminating a hero grants 5 Soul Stacks, while assists grant 3 stacks. Every 15 Soul Stacks convert into 25 points of magic damage. Lose all stacks upon death. (Already converted stacks are unaffected.) Gain up to 100 points of magic damage.'),
(21, 'https://bytiger.com/images/ext_mobile_legend/m05.png', 'NECKLACE OF DURANCE', 2110, 'MAGIC', 0, 0, 10, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 'Unique Passive-Life Drain: Skill dealing damage to the target reduces the regen effect by 50% for 3 seconds.'),
(22, 'https://bytiger.com/images/ext_mobile_legend/m06.png', 'DEVIL TEARS', 1970, 'MAGIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 0, 'Unique Passive-Spellbreaker: When HP is higher than 70%, the unique bonus effect is increased by 30%.'),
(23, 'https://bytiger.com/images/ext_mobile_legend/m07.png', 'HOLY CRYSTAL', 2180, 'MAGIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 0, 'Unique Passive-Exterminate: After a skill hits a target, magic attack will immediately increase 15%. The next skill damage will terminate this effect. This effect can last up to 3 seconds with a built-in cooldown time of 10 seconds.'),
(24, 'https://bytiger.com/images/ext_mobile_legend/m08.png', 'CONCENTRATED ENERGY', 2020, 'MAGIC', 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 700, 0, 0, 0, 0, 0, 70, 0, 'Unique Passive-Recharge: Regen 10% of one\'s HP after killing a hero.'),
(25, 'https://bytiger.com/images/ext_mobile_legend/m09.png', 'ICE QUEEN WAND', 2240, 'MAGIC', 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 7, 0, 0, 75, 0, 'Unique Passive-Ice Bound: Skills that damage an enemy hero will carry a 15% slow down effect. This effect lasts 3 seconds. Stacks up to 2 times.'),
(26, 'https://bytiger.com/images/ext_mobile_legend/m10.png', 'GLOWING WAND', 2120, 'MAGIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 0, 0, 5, 0, 0, 75, 0, 'Unique Passive-Scorch: Skill damage will burn targets for 3 seconds when they hit, dealing 2%/3%/4% of the target\'s current HP as Magic Damage (10 damage minimum).'),
(27, 'https://bytiger.com/images/ext_mobile_legend/m11.png', 'CALAMITY REAPER', 1950, 'MAGIC', 0, 0, 10, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 70, 0, 'Unique Passive-Calamity: After using a skill, the next basic attack deals extra true damage that equals to 120% magic attack with a cooldown of 1.5 seconds. Briefly raises movement speed by 10%.'),
(28, 'https://bytiger.com/images/ext_mobile_legend/m12.png', 'CLOCK OF DESTINY', 1950, 'MAGIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 615, 600, 0, 0, 0, 0, 60, 0, 'Unique Passive-Time: Adds 30 HP and 5 magic attack every 30 seconds. Up to 10 times.<hr>\r\nUnique Passive-Reincarnate: If Time is fully stacked, then the hero will receive 5% magic attack and 300 mana.'),
(29, 'https://bytiger.com/images/ext_mobile_legend/m13.png', 'BLOOD WINGS', 3000, 'MAGIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 0, 0, 0, 0, 0, 150, 0, 'Unique Passive-Nirvana: Adds 1.5 HP for every 1 pt of magic power added.'),
(30, 'https://bytiger.com/images/ext_mobile_legend/m14.png', 'FLEETING TIME', 2050, 'MAGIC', 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 'Unique Passive-Timestream: After an elimination or an assist, the CD of the hero’s ultimate is immediately reduced by 35%.'),
(31, 'https://bytiger.com/images/ext_mobile_legend/m15.png', 'LIGHTNING TRUNCHEON', 2250, 'MAGIC', 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 0, 0, 0, 0, 75, 0, 'Unique Passive-Resonate: Every 6 seconds, hero\'s next magic skill deals bonus magic damage to up to 3 enemies that scales with hero\'s maximum mana.'),
(32, 'https://bytiger.com/images/ext_mobile_legend/d01.png', 'COURAGE BULWARK', 1970, 'DEFENSE', 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 770, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Bravery: Increases 10% of attack power and defense for nearby allies.<hr>\r\nUnique Passive-Heavy Armor: Nearby soldiers can take more defense turret damage.<hr>\r\nUnique Passive-Encourage: Active: Raise the movement speed of hero and nearby allied heroes by 30%. Also raises physical and magic damage by 20%. Lasts 3 seconds. This effect has a 40 second cooldown.<hr>\r\nUnique Passive-Encourage: Raise the movement speed and physical/magic damage of nearby allied heroes.'),
(33, 'https://bytiger.com/images/ext_mobile_legend/d02.png', 'BLADE ARMOR', 1660, 'DEFENSE', 0, 0, 0, 90, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Counterstrike: Deals 25% of opponent\'s physical attack as physical damage to an attacker when a basic attack is received.'),
(34, 'https://bytiger.com/images/ext_mobile_legend/d03.png', 'WINGS OF THE APOCALYPSE QUEEN', 2250, 'DEFENSE', 15, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1000, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Demonize: Reduces damage taken by 50% when health is less than 40% and increases your Lifesteal by 30%. Lasts 5 seconds. This effect has a 50 second cooldown.'),
(35, 'https://bytiger.com/images/ext_mobile_legend/d04.png', 'THUNDER BELT', 2290, 'DEFENSE', 0, 0, 10, 40, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 800, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Thunderbolt: After a hero activates this skill, their next basic attack deals bonus attack that equal 2% of the hero’s total HP. The enemy target and surrounding units are slowed for 1.5 seconds. This effect can only be used once every 1.5 seconds.'),
(36, 'https://bytiger.com/images/ext_mobile_legend/d05.png', 'CURSED HELMET', 1830, 'DEFENSE', 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 920, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Burning Soul: Nearby enemy targets take 1.5% of their Max HP as Magic Damage each second. Deals an extra 50?mage to minions.'),
(37, 'https://bytiger.com/images/ext_mobile_legend/d06.png', 'SKY GUARDIAN HELMET', 2400, 'DEFENSE', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 1550, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Recovery: Regenerates 1.5% of hero’s total HP. Eliminating enemy heroes raises regeneration rate by 0.4%, while assists only raises the rate by 0.2% (includes eliminations and Assists prior to purchase), up to 3.5%. This effect wears off after 5 seconds of the hero taking damage.'),
(38, 'https://bytiger.com/images/ext_mobile_legend/d07.png', 'DEMON\'S ADVENT', 2170, 'DEFENSE', 0, 0, 0, 54, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 920, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Deter: When an enemy hero attacks, this ability will reduce his/her attack power 6%. This effect lasts 2 seconds. Stacks up to 3 times.'),
(39, 'https://bytiger.com/images/ext_mobile_legend/d08.png', 'ORACLE', 2110, 'DEFENSE', 0, 0, 10, 0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 850, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Bless: Raises shield absorption and HP regeneration effects by 25%.'),
(40, 'https://bytiger.com/images/ext_mobile_legend/d09.png', 'ATHENA\'S SHIELD', 2050, 'DEFENSE', 0, 0, 0, 0, 0, 0, 56, 0, 0, 0, 0, 0, 20, 0, 900, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Shield: Get a damage-absorbing shield every 30 seconds. Shield absorption amount grows as the match goes on, maxing out at 1150.'),
(41, 'https://bytiger.com/images/ext_mobile_legend/d10.png', 'DOMINANCE ICE', 2110, 'DEFENSE', 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 500, 0, 0, 0, 0, 0, 0, 'Unique Passive-Arctic Cold: Lowers movement speed 5% and lowers attack speed 30% for nearby enemy heroes.'),
(42, 'https://bytiger.com/images/ext_mobile_legend/d11.png', 'IMMORTALITY', 2120, 'DEFENSE', 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 800, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Immortal: Resurrect 2 seconds upon death and get 15% HP and a shield that can absorb 300~1000 damage. Shield lasts 3 seconds. This effect has a 180 second cooldown.'),
(43, 'https://bytiger.com/images/ext_mobile_legend/d12.png', 'BRUTE FORCE BREATSPLATE', 2120, 'DEFENSE', 0, 0, 0, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 770, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Brute Force: Casting a skill will increase one\'s capabilities: increases movement speed by 3% and physical attack by 4%. Lasts 4 seconds. Stacks up to 5 times.'),
(44, 'https://bytiger.com/images/ext_mobile_legend/d13.png', 'TWILIGHT ARMOR', 2260, 'DEFENSE', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 1200, 400, 0, 0, 0, 0, 0, 0, 'Unique Passive-Defiance: After the hero takes over 900 points of Physical Damage, they will take 900 points of Physical Damage at most for up to 5 seconds. Cooldown is 5 seconds.'),
(45, 'https://bytiger.com/images/ext_mobile_legend/s01.png', 'WARRIOR BOOTS', 690, 'MOVEMENT', 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 'Unique Passive-Valor: Physical defense will go up 5 with each basic attack received, for an increase of up to 25 points. Lasts 3 seconds.'),
(46, 'https://bytiger.com/images/ext_mobile_legend/s02.png', 'TOUGH BOOTS', 890, 'MOVEMENT', 0, 0, 0, 0, 0, 0, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 15, 'Unique Passive-Fortitude: Reduces time controlled 25%.'),
(47, 'https://bytiger.com/images/ext_mobile_legend/s03.png', 'MAGIC SHOES', 710, 'MOVEMENT', 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, ''),
(48, 'https://bytiger.com/images/ext_mobile_legend/s04.png', 'ARCANE BOOTS', 740, 'MOVEMENT', 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, ''),
(49, 'https://bytiger.com/images/ext_mobile_legend/s05.png', 'SWIFT BOOTS', 710, 'MOVEMENT', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 15, 0, 0, ''),
(50, 'https://bytiger.com/images/ext_mobile_legend/s06.png', 'RAPID BOOTS', 750, 'MOVEMENT', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 'Unique Passive-Side Effect: Dealing or taking damage slows hero\'s movement speed by 55 points. Lasts 5 seconds.'),
(51, 'https://bytiger.com/images/ext_mobile_legend/s07.png', 'WIZARD BOOTS', 700, 'MOVEMENT', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 0, 40, 0, 0, 0, 0, 0, 'Unique Passive-Plunder: 80 gold will be awarded for assists.'),
(52, 'https://bytiger.com/images/ext_mobile_legend/s08.png', 'DEMON SHOES', 720, 'MOVEMENT', 0, 0, 0, 0, 0, 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 0, 0, 0, 0, 0, 'Unique Passive-Mysticism: Eliminations of enemy heroes and assists regenerates hero’s mana by 10%, while eliminating minions regenerates 4% of the hero’s mana.'),
(53, 'https://bytiger.com/images/ext_mobile_legend/j01.png', 'STAR SHARD', 1505, 'JUNGLE', 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 'Unique Passive-Greed: Get an extra 30% Exp when jungling. Regain 4% of of maxium health and 10% of mana after monster kill.<hr>\r\nUnique Passive-Gorge: Increases damage by 0.5% on killing a jungle monster. Stacks up to 2 times.<hr>\r\nUnique Passive-Greed: Makes the Battle Spell \'Retribution\' applicable to heroes, reducing the target\'s movement speed by 70% (effect decays over 3s) and reducing target\'s magic resistance. Buying other advanced jungling equipment will disable this effect.'),
(54, 'https://bytiger.com/images/ext_mobile_legend/j02.png', 'BEAST KILLER', 1605, 'JUNGLE', 0, 0, 0, 20, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Greed: Get an extra 30% Exp when jungling. Regain 4% of of maxium health and 10% of mana after monster kill.<hr>\r\nUnique Passive-Gorge: Slaying jungle monsters increases one\'s physical and magic defense 3. Stacks up to 10 times.<hr>\r\nUnique Passive-Greed: Makes the Battle Spell \'Retribution\' applicable to heroes, reducing the target\'s movement speed by 70% (effect decays over 3s) and for a short period of time grants a shield based on Max HP. Buying other advanced jungling equipment will disable this effect.'),
(55, 'https://bytiger.com/images/ext_mobile_legend/j03.png', 'RAPTOR MACHETE', 1550, 'JUNGLE', 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Unique Passive-Greed: Get an extra 30% Exp when jungling. Regain 4% of of maxium health and 10% of mana after monster kill.<hr>\r\nUnique Passive-Gorge: Slaying jungle monsters increases your physical attack 4. Stacks up to 10 times.<hr>\r\nUnique Passive-Greed: Makes the Battle Spell \'Retribution\' applicable to heroes, reducing the target\'s movement speed by 70% and dealing a small amount of True Damage to the target within 3 seconds. Buying other advanced jungling equipment will disable this effect.'),
(56, 'http://mobilelegendsbangbang.com/wp-content/uploads/2018/03/dagger-atk-4.png', 'DAGGER', 250, 'BASIC', 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(57, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/65-copy-1.jpg', 'LEGION SWORD', 910, 'BASIC', 60, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(58, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/85-copy-1.jpg', 'DAGGER', 280, 'BASIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, ''),
(59, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/32-copy-1.jpg', 'OGRE TOMAHAWK', 790, 'BASIC', 30, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 230, 0, 0, 0, 0, 0, 0, 0, ''),
(60, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/109-copy-1.jpg', 'JAVELIN', 320, 'BASIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(61, 'http://mobilelegendsbangbang.com/wp-content/uploads/2018/03/rogue-meteor.png', 'ROGUE METEOR', 580, 'BASIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 15, 0, 0, 0, ''),
(62, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/vampire-mallet.png', 'VAMPIRE  MALLET', 400, 'BASIC', 8, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(63, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/66-copy-1.jpg', 'FURY HAMMER', 980, 'BASIC', 35, 0, 0, 0, 0, 0, 0, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(64, 'http://mobilelegendsbangbang.com/wp-content/uploads/2018/03/iron-hunting-bow.png', 'IRON HUNTING BOW', 450, 'BASIC', 10, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(65, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/magic-blade.png', 'MAGIC BLADE', 1300, 'BASIC', 40, 0, 0, 0, 0, 0, 24, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(66, 'http://mobilelegendsbangbang.com/wp-content/uploads/2018/03/regular-spear.png', 'REGULAR SPEAR', 600, 'BASIC', 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, ''),
(67, 'http://mobilelegendsbangbang.com/wp-content/uploads/2018/03/power-potion.png', 'POWER POTION', 1500, 'POTION', 30, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'Automatically used after purchased, giving 30 pts of physical attack, 5% of physical lifesteal, lasts 120s. Only one potion effect can be used at any one time.'),
(68, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/117-copy-1.jpg', 'MYSTERY CODEX', 300, 'BASIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, ''),
(69, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/75-copy-1.jpg', 'MAGIC WAND', 820, 'BASIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 0, ''),
(70, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/98-copy-1.jpg', 'POWER CRYSTAL', 220, 'BASIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 280, 0, 0, 0, 0, 0, 0, ''),
(71, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/55-copy.jpg', 'TOME OF EVIL', 950, 'BASIC', 0, 0, 8, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 0, ''),
(72, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/105-copy-1.jpg', 'MAGIC NECKLACE', 120, 'BASIC', 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(73, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/106-copy-1.jpg', 'AZURE BLADE', 600, 'BASIC', 0, 0, 5, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(74, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/103-copy-1.jpg', 'BOOK OF SAGES', 450, 'BASIC', 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 0, ''),
(75, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/74-copy-1.jpg', 'EXOTIC VEIL', 600, 'BASIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 30, 0, ''),
(76, 'http://mobilelegendsbangbang.com/wp-content/uploads/2018/03/mystic-container.png', 'MYSTIC CONTAINER', 500, 'BASIC', 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 0, ''),
(77, 'https://mobilelegends.gcube.id/wp-content/uploads/sites/6/2018/06/Mobile-Legends-Items-Magic-1-Spirit-Wheel.png', 'SPIRIT WHEEL', 500, 'BASIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, ''),
(78, 'http://mobilelegendsbangbang.com/wp-content/uploads/2018/03/magic-potion.png', 'MAGIC POTION', 1500, 'POTION', 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 0, 'Automatically used after purchased, giving 30pts of magic damage, 5% of cooldown reduction,lasts 120s. Only one potion effect can be used at any one time.'),
(79, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/113-copy-1.jpg', 'VITALITY CRYSTAL', 300, 'BASIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 230, 0, 0, 0, 0, 0, 0, 0, ''),
(80, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/50-copy-1.jpg', 'ARES BELT', 900, 'BASIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 770, 0, 0, 0, 0, 0, 0, 0, ''),
(81, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/115-copy.jpg', 'LEATHER JERKIN', 220, 'BASIC', 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(82, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/63-copy-1.jpg', 'MOLTEN ESSENCE', 870, 'BASIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 870, 0, 0, 0, 0, 0, 0, 0, ''),
(83, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/112-copy-1.jpg', 'MAGIC RESIST CLOAK', 220, 'BASIC', 0, 0, 0, 0, 0, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(84, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/116-copy-1.jpg', 'SILENCE ROBE', 1020, 'BASIC', 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0, 0, 540, 0, 0, 0, 0, 0, 0, 0, ''),
(85, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/40-copy-1.jpg', 'HEALING NECKLACE', 140, 'BASIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(86, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/black-ice-shield.png', 'BLACK ICE SHIELD', 880, 'BASIC', 0, 0, 10, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 400, 0, 0, 0, 0, 0, 0, ''),
(87, 'http://mobilelegendsbangbang.com/wp-content/uploads/2018/03/heros-ring.png', 'HERO\'S RING', 450, 'BASIC', 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0, 0, 0, 0, 0, 0, ''),
(88, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/68-copy-1.jpg', 'DREADNAUGHT ARMOR', 730, 'BASIC', 0, 0, 0, 40, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(89, 'http://mobilelegendsbangbang.com/wp-content/uploads/2018/03/rock-potion.png', 'ROCK POTION', 1500, 'POTION', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 500, 0, 0, 0, 0, 0, 0, 15, 'Automatically used after purchased, giving 500 pts of HP, 15% of resilience, lasts 120s. Only one potion effect can be used at any one time.'),
(90, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/54-copy-1.jpg', 'BOOTS', 250, 'BASIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 20, 0, 0, 0, 0, 0, ''),
(91, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/88-copy-1.jpg', 'HUNTER\'S KNIFE', 280, 'BASIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(92, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/83-copy-1.jpg', 'CURSE SWORD', 760, 'BASIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(93, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/81-copy-1.jpg', 'PILLAGER AXE', 770, 'BASIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, ''),
(94, 'http://mobilelegendsbangbang.com/wp-content/uploads/2016/12/nimble-blade.png', 'NIMBLE BLADE', 750, 'BASIC', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
