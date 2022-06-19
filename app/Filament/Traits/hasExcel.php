<?php

namespace App\Filament\Traits;

use App\Exports\PreRegisterExport;
use pxlrbt\FilamentExcel\Actions\ExportAction;
use Maatwebsite\Excel\Excel;

trait hasExcel
{
    public static function getExcelBulkAction()
    {
        return ExportAction::make('export')
            ->label('خروجی اکسل')
            ->askForWriterType(Excel::XLSX, null, 'فرمت فایل')
            ->askForFilename(date('Y-m-d') . '-export', 'نام فایل')
            ->except('status')
            ->withHeadings()
            ->onlyTableFields()
            ->icon('heroicon-o-archive');
    }
}
