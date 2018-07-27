<?php

if (!defined('BASEPATH')) exit('No direct script access allowed');
class Simulations extends BP_Controller

{
    public

    function __construct()
    {
        parent::__construct();
        $this->title = "MOBILE LEGENDS TOOL";
        $this->description = "Mobile Legends Champ..";
        $this->GFont = array("Karla");
        $this->load->model('Hero');
        $this->load->model('Item');
    }

    public

    function index()
    {
        $data['hero_column'] = $this->hero_column();
        $data['hero'] = $this->Hero->get_all_hero();
        $data['item'] = $this->Item->get_item_name();
        $this->build_content($data);
        $this->render_page();
    }


    function get_hero_base_stats($id) 
    {
        $hero_stats = $this->Hero-> get_hero_by_id($id);
        echo $JSON = json_encode($hero_stats);
    }

    function get_item_base_stats($id) 
    {   
        $item_stats = $this->Item-> get_all_item_by_id($id);
        echo $JSON = json_encode($item_stats);
    }

    
    function hero_column() 
    {

        return $hero_column = ['HERO_PHOTO','HERO_MOVE_SPEED','HERO_PHYSICAL_ATK','HERO_ARMOR','HERO_MAGIC_ARMOR','HERO_HP','HERO_MANA','HERO_ATK_SPEED','HERO_HP_REGEN','HERO_MANA_REGEN'];
    }

}

/*End of file hero.php*/
/*Location .application/controllers/example.php*/
