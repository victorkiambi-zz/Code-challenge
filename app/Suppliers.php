<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

use Illuminate\Database\Eloquent\SoftDeletes;


class Suppliers extends Model
{
    //

    use SoftDeletes;

    public function supplier_products()
    {
        return $this->hasMany('App\Supplier_products');
    }

}
