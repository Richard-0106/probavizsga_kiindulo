<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('szakdogas', function (Blueprint $table) {
            $table->id();
            $table->string('szakdoga_nev');
            $table->string('githublink');
            $table->string('oldallink');
            $table->string('tagokneve');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('szakdogas');
    }
};
