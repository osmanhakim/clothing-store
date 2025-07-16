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
        Schema::create('color_product_size', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('color_product_id');
            $table->unsignedBigInteger('size_id');
            $table->integer('quantity');
            $table->timestamps();
            $table->foreign('color_product_id')->references('id')->on('color_products')->onDelete('cascade');
            $table->foreign('size_id')->references('id')->on('itemsizes')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('color_product_size');
    }
};