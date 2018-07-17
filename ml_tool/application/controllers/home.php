<?php

if (!defined('BASEPATH')) exit('No direct script access allowed');
class Home extends BP_Controller

{
    public

    function __construct()
    {
        parent::__construct();
        $this->title = "MOBILE LEGENDS TOOL";
        $this->description = "Item per Gold ratio..";
        $this->GFont = array("Karla");
        $this->load->model('Item');
    }

    public

    function index()
    {
        $data['item'] = false;
        $data['ratio_build'] = false;
        $this->build_content($data);
        $this->render_page();
    }

    function item_column() {

        return $column = ['ID','ITEM_PHOTO',
        'ITEM_NAME','ITEM_PRICE','ITEM_CATEGORY','ITEM_PHYSICAL_ATK','ITEM_LIFESTEAL','ITEM_CD_REDUCTION',
        'ITEM_PHYSICAL_ARMOR','ITEM_SPELL_LIFESTEAL','ITEM_MANA_REGEN','ITEM_MAGIC_ARMOR','ITEM_MAGIC_PEN_FLAT','ITEM_PHYSICAL_PEN_FLAT',
        'ITEM_MAGIC_PEN_PER','ITEM_PHYSICAL_PEN_PER','ITEM_CRIT_CHANCE','ITEM_HP_REGEN','ITEM_CRIT_REDUCTION','ITEM_HP',
        'ITEM_MANA','ITEM_MOVE_SPEED_FLAT','ITEM_MOVE_SPEED_PER','ITEM_ATK_SPEED_FLAT','ITEM_ATK_SPEED_PER','ITEM_MAGIC_POWER','RESILIENCE','ITEM_PASSIVE'];
    }

    function render_ratio_build($item_type, $state)
    {
        $ratio = array();
        $key   = array();

        $data['column'] = $this->item_column();
        $data['item'] = $this->Item->get_all_item($item_type, $state);
        foreach($data['item'] as $row):
            $item_ratio = ($row['ITEM_PRICE'] / $row[$item_type]);
            $ratio[$row['ID']] = $item_ratio; //get lowest gold per item ratio id
        endforeach;
        asort($ratio); 
        foreach($ratio as $id => $value):
            array_push($key, $id);
        endforeach;
        $item_id = (implode(',', array_slice($key, 0, 6)));
        $data['ratio_build'] = $this->Item->get_ratio_item($item_id);
        $this->session->set_userdata('stat', $item_type);
        $this->build_content($data);
        $this->render_page();
    }

    public

    function get_item_by_type()
    {
        $state = $this->input->post('check') ? '' : 'AND ITEM_CATEGORY !=\'BASIC\'';
        $this->render_ratio_build($this->input->post('build') , $state);
    }
}

/*End of file homepage.php*/
/*Location .application/controllers/example.php*/
