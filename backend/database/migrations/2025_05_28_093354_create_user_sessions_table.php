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
        //
                Schema::create('user_sessions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('userid');
            $table->string('access_token')->unique()->nullable();
            // $table->date('accessTokenEXP');
            $table->dateTime('accessTokenEXP');
            $table->string('refresh_token')->unique()->nullable();
            // $table->date('refreshTokenEXP');
            $table->dateTime('refreshTokenEXP');
            $table->foreign('userid')->references('id')->on('users')->onDelete('cascade');
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
        //
      Schema::dropIfExists('user_sessions');

    }
};