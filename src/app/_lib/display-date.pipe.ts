import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'displayDate'})
export class DisplayDatePipe implements PipeTransform {
    public transform(value: string): string {
        const date = new Date(value);
        let dateString = this.getMonthName(date.getMonth()) + ' ' + date.getDate() + ', ' + date.getFullYear();

        return dateString;
    }

    private getMonthName (value: number): string {
        const names = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];

        return names[value] || '';
    }
}
