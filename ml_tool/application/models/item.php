<?php

if (!defined('BASEPATH')) exit('No direct script access allowed');
class Item extends CI_Model

{
    function get_all_item($type, $state)
    {
        $query = $this->db->query("SELECT * FROM item WHERE " . $type . " > 0 " . $state);
        if ($query->num_rows() > 0)
        {
            return $query->result_array();
        }
    }

    function get_ratio_item($item_id)
    {
        $query = $this->db->query("SELECT * FROM item WHERE ID in(" . $item_id . ")");
        if ($query->num_rows() > 0)
        {
            return $query->result_array();
        }
    }

    function get_all_item_by_id($id)
    {
        $query = $this->db->query("SELECT * FROM item WHERE ID = " . $id );
        if ($query->num_rows() > 0)
        {
            return $query->result_array();
        }
    }
}
