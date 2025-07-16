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
        Schema::create('gender_translations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('gender_id');
            $table->string('locale')->index(); 
            $table->unique(['gender_id', 'locale']);
            $table->foreign('gender_id')->references('id')->on('genders')->onDelete('cascade');
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
        Schema::dropIfExists('gender_translations');
    }
};