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
            $table->after('ninth_science', function ($table) {
                $table->smallInteger('seventh_grade');
                $table->smallInteger('eighth_grade');
                $table->smallInteger('ninth_grade');
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
            $table->dropColumn(['seventh_grade', 'eighth_grade', 'ninth_grade']);
        });
    }
};
