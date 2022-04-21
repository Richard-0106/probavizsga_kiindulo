<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Szakdoga extends Model
{
    protected $table = 'szakdogas';
    protected $primaryKey = 'id';
    protected $fillable =[
        'szakdoga_nev',
        'githublink',
        'oldallink',
        'tagokneve'

    ];
    use HasFactory;
}
