<?php

namespace App\Controllers;

class blog extends BaseController
{
    public function index()
    {
        return view('blog_view');
    }
}
