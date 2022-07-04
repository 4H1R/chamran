<?php

namespace App\Filament\Resources;

use App\Enums\PreRegister\Score;
use App\Enums\PreRegister\Status;
use App\Filament\Resources\PreRegisterResource\Pages;
use App\Filament\Traits\hasExcel;
use App\Models\PreRegister;
use Filament\Resources\Form;
use Filament\Resources\Resource;
use Filament\Resources\Table;
use Filament\Tables\Actions\Action;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Filters\SelectFilter;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class PreRegisterResource extends Resource
{
    protected static ?string $model = PreRegister::class;

    protected static ?string $navigationLabel = 'پیش ثبت نام';

    protected static ?string $navigationGroup = 'پیش ثبت نام';

    protected static ?string $label = 'پیش ثبت نام';

    protected static ?string $pluralLabel = 'پیش ثبت نام ها';

    protected static ?string $navigationIcon = 'heroicon-o-briefcase';

    public static function canCreate(): bool
    {
        return false;
    }

    public static function canEdit(Model $record): bool
    {
        return false;;
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('status')
                    ->formatStateUsing(static fn ($state) => Status::tryFrom($state)->textFa())
                    ->label('وضعیت'),
                TextColumn::make('first_name')
                    ->label('نام')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('last_name')
                    ->label('نام خانوادگی')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('father_name')
                    ->label('نام پدر')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('father_name')
                    ->label('نام پدر')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('national_code')
                    ->label('کد ملی')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('mobile')
                    ->label('تلفن همراه')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('phone')
                    ->label('تلفن ثابت')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('address')
                    ->label('ادرس')
                    ->sortable()
                    ->searchable(),
                TextColumn::make('major.name')
                    ->label('رشته درخواستی'),
                TextColumn::make('seventh_math')
                    ->sortable()
                    ->label('ریاضی هفتم'),
                TextColumn::make('eighth_math')
                    ->sortable()
                    ->label('ریاضی هشتم'),
                TextColumn::make('ninth_math')
                    ->sortable()
                    ->label('ریاضی نهم'),
                TextColumn::make('seventh_grade')
                    ->sortable()
                    ->label('معدل نهایی هفتم'),
                TextColumn::make('eighth_grade')
                    ->sortable()
                    ->label('معدل نهایی هشتم'),
                TextColumn::make('ninth_grade')
                    ->sortable()
                    ->label('معدل نهایی نهم'),
                TextColumn::make('seventh_discipline')
                    ->sortable()
                    ->formatStateUsing(static fn ($state) => Score::tryFrom($state)->textFa())
                    ->label('انضباط هفتم'),
                TextColumn::make('eighth_discipline')
                    ->sortable()
                    ->formatStateUsing(static fn ($state) => Score::tryFrom($state)->textFa())
                    ->label('انضباط هشتم'),
                TextColumn::make('ninth_discipline')
                    ->sortable()
                    ->formatStateUsing(static fn ($state) => Score::tryFrom($state)->textFa())
                    ->label('انضباط نهم')
            ])
            ->prependActions([
                Action::make('approve')
                    ->label('تایید کردن')
                    ->action(fn ($record) => $record->update(['status' => Status::Approved]))
                    ->requiresConfirmation()
                    ->icon('heroicon-o-check')
                    ->visible(fn ($record) => Status::from($record->getRawOriginal('status')) !== Status::Approved)
                    ->color('primary'),
                Action::make('reject')
                    ->label('رد کردن')
                    ->action(fn ($record) => $record->update(['status' => Status::Rejected]))
                    ->requiresConfirmation()
                    ->icon('heroicon-o-x')
                    ->visible(fn ($record) => Status::from($record->getRawOriginal('status')) !== Status::Rejected)
                    ->color('danger'),
                Action::make('reserve')
                    ->label('رزرو کردن')
                    ->action(fn ($record) => $record->update(['status' => Status::Reserved]))
                    ->requiresConfirmation()
                    ->icon('heroicon-o-archive')
                    ->visible(fn ($record) => Status::from($record->getRawOriginal('status')) !== Status::Reserved)
                    ->color('warning'),
            ])
            ->filters([
                SelectFilter::make('status')
                    ->label('وضعیت')
                    ->column('status')
                    ->options([
                        Status::Pending->value => Status::Pending->textFa(),
                        Status::Approved->value => Status::Approved->textFa(),
                        Status::Rejected->value => Status::Rejected->textFa(),
                        Status::Reserved->value => Status::Reserved->textFa(),
                    ]),
            ])
            ->prependBulkActions([]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListPreRegisters::route('/'),
            'create' => Pages\CreatePreRegister::route('/create'),
            'edit' => Pages\EditPreRegister::route('/{record}/edit'),
        ];
    }
}
