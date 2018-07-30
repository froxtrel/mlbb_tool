<?php

if (!defined('BASEPATH')) exit('No direct script access allowed');
class Talent extends CI_Model

{
    
    function get_talent_info_by_id($id)
    {
        $query = $this->db->query("SELECT * FROM talent WHERE TALENT_PARENT = " . $id);
        if ($query->num_rows() > 0)
        {
            return $query->result_array();
        }
    }

    function get_talent($id)
    {
        $query = $this->db->query("SELECT * FROM talent WHERE ID = " . $id);
        if ($query->num_rows() > 0)
        {
            return $query->result_array();
        }
    }

}
