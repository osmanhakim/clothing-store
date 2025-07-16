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
  Schema::create('audience_translations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->unsignedBigInteger('audience_id');
            $table->string('locale')->index();
            $table->unique(['audience_id', 'locale']);
            $table->foreign('audience_id')->references('id')->on('audiences')->onDelete('cascade');
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
                Schema::dropIfExists('audience_translations');

    }
};