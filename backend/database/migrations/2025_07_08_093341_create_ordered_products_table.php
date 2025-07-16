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
        Schema::create('ordred_products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_product_sized');
            $table->unsignedBigInteger('order_id');
            $table->integer('quantity');
            $table->double('sub_total');
            $table->foreign('id_product_sized')->references('id')->on('color_product_size')->onDelete('cascade');
            $table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
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
        Schema::dropIfExists('ordred_products');
    }
};