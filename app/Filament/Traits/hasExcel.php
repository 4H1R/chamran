<?php

namespace App\Filament\Traits;

use pxlrbt\FilamentExcel\Actions\Tables\ExportBulkAction;
use pxlrbt\FilamentExcel\Columns\Column;
use pxlrbt\FilamentExcel\Exports\ExcelExport;

trait hasExcel
{
    public static function getExcelBulkAction()
    {
        return ExportBulkAction::make('export')
            ->exports([
                ExcelExport::make()
                    ->fromTable()
                    ->withColumns([
                        Column::make('status')
                            ->heading('وضعیت')
                            ->formatStateUsing(fn ($state) => $state->textFa()),
                        Column::make('seventh_discipline')
                            ->heading('انضباط هفتم')
                            ->formatStateUsing(fn ($state) => $state->textFa()),
                        Column::make('eighth_discipline')
                            ->heading('انضباط هشتم')
                            ->formatStateUsing(fn ($state) => $state->textFa()),
                        Column::make('ninth_discipline')
                            ->heading('انضباط نهم')
                            ->formatStateUsing(fn ($state) => $state->textFa()),
                    ])
                    ->withFilename(date('Y-m-d').' - export'),
            ])
            ->label('خروجی اکسل')
            ->icon('heroicon-o-archive');
    }
}
