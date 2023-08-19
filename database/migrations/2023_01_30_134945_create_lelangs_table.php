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
        Schema::create('tb_lelang', function (Blueprint $table) {
            $table->id();
            $table->foreignId('barang_id')->references('id')->on('tb_barang')->onDelete('cascade');
            $table->foreignId('user_id')->nullable(true)->references('id')->on('users');
            $table->integer('harga_akhir')->nullable(true)->default(0);
            $table->enum('status', ['Dibuka', 'Ditutup'])->default('Ditutup');
            $table->date('tgl_lelang');
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
        Schema::dropIfExists('lelangs');
    }
};
