<?php

use App\Enums\PreRegister\Status;
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
        Schema::create('pre_registers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('major_id')->constrained()->onDelete('cascade');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('father_name');
            $table->string('national_code');
            $table->string('mobile');
            $table->string('phone');
            $table->text('address');
            $table->smallInteger('seventh_math');
            $table->smallInteger('eighth_math');
            $table->smallInteger('ninth_math');
            $table->smallInteger('seventh_science');
            $table->smallInteger('eighth_science');
            $table->smallInteger('ninth_science');
            $table->smallInteger('seventh_discipline');
            $table->smallInteger('eighth_discipline');
            $table->smallInteger('ninth_discipline');
            $table->integer('status')->default(Status::Pending->value);
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
        Schema::dropIfExists('pre_registers');
    }
};
