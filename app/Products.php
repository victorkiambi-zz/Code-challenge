<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    //
    use SoftDeletes;


    public function order_details()
    {
        return $this->hasMany('App\Order_details');
    }

    public function supplier_products()
    {
        return $this->hasMany('App\Supplier_products');
    }

}
