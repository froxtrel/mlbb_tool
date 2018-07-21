<?php

if (!defined('BASEPATH')) exit('No direct script access allowed');
class Hero extends CI_Model

{
    function get_all_hero()
    {
        $query = $this->db->query("SELECT * FROM hero WHERE HERO_MANA_REGEN_GR != 0 ORDER BY HERO_NAME DESC LIMIT 10 ");
        if ($query->num_rows() > 0)
        {
            return $query->result_array();
        }
    }

    function get_hero_by_id($id)
    {
        $query = $this->db->query("SELECT * FROM hero WHERE ID = ".$id."");
        if ($query->num_rows() > 0)
        {
            return $query->result_array();
        }
    }
}
