<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_files', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('product_id');
            $table->string('name', 255);
            $table->string('url');
            $table->unsignedSmallInteger('type');
            $table->string('file_hash', 32)->default('');
            $table->timestamps();

            $table->index(['file_hash'], 'file_hash_index');

//            $table->foreign('product_id', 'product_files_fk0')
//                ->references('id')
//                ->on('products')
//                ->onUpdate('RESTRICT')
//                ->onDelete('RESTRICT');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('product_files', function (Blueprint $table) {
            $table->dropIndex('file_hash_index');
        });
        Schema::dropIfExists('product_files');
    }
}
