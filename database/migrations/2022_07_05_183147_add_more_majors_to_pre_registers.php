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
        Schema::table('pre_registers', function (Blueprint $table) {
            $table->after('major_id', function ($table) {
                $table->foreignId('second_major_id')
                    ->nullable()
                    ->constrained('majors')
                    ->onDelete('cascade');
                $table->foreignId('third_major_id')
                    ->nullable()
                    ->constrained('majors')
                    ->onDelete('cascade');
            });
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('pre_registers', function (Blueprint $table) {
            //
        });
    }
};
