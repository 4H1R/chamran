<?php

namespace App\Filament\Traits;

use Maatwebsite\Excel\Excel;
use pxlrbt\FilamentExcel\Actions\ExportAction;

trait hasExcel
{
    public static function getExcelBulkAction()
    {
        return ExportAction::make('export')
            ->label('خروجی اکسل')
            ->askForWriterType(Excel::XLSX, null, 'فرمت فایل')
            ->askForFilename(date('Y-m-d').'-export', 'نام فایل')
            ->except('status')
            ->withHeadings()
            ->onlyTableFields()
            ->icon('heroicon-o-archive');
    }
}
