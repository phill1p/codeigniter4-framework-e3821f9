<?php

namespace App\Controllers;

class dashboard extends BaseController
{
    public function index()
    {
        return view('Dashboard');
    }
    
    public function getUserCount(){
        $user_count  = 50;

    // formt data in associate

    $data = array (
        'success'=> true,
        'user_count' => $user_count

    );
    return $this->response->setJSON($data);
}
}


