<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Orders extends Model
{
    use SoftDeletes;



    public function order_details()
    {
        return $this->hasMany('App\Order_details');
    }

    //
}
