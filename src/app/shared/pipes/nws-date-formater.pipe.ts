import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nwsDateFormater'
})
export class NwsDateFormaterPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    const date = new Date(value);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHours = Math.floor(diffMin / 60);
    const diffDays = Math.floor(diffHours / 24);

    if (this.isSameDay(now, date)) {
      if (diffHours < 1) {
        if (diffMin == 0) {
          return 'A moment ago'
        }
        if (diffMin == 1) {
          return diffMin + ' minute ago';
        }
        return diffMin + ' minutes ago';
      } else {
        return diffHours + ' hours ago';
      }
    }
    else if (this.isYesterday(now, date)) {
      return 'Yesterday';
    }
    else if (this.isSameWeek(now, date)) {
      return this.getWeekDayName(date);
    }
    else {
      return this.formatLiteralDate(date);
    }
  }

  private isSameDay(d1: Date, d2: Date): boolean {
    return (
      d1.getFullYear() === d2.getFullYear() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getDate() === d2.getDate()
    );
  }

  private isYesterday(now: Date, date: Date): boolean {
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    return this.isSameDay(yesterday, date);
  }

  private isSameWeek(now: Date, date: Date): boolean {
    const nowStartOfWeek = this.getStartOfWeek(now);
    const dateStartOfWeek = this.getStartOfWeek(date);
    return nowStartOfWeek.getTime() === dateStartOfWeek.getTime();
  }

  private getStartOfWeek(date: Date): Date {
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1);
    const startOfWeek = new Date(date.setDate(diff));
    startOfWeek.setHours(0, 0, 0, 0);
    return startOfWeek;
  }

  private getWeekDayName(date: Date): string {
    const options = { weekday: 'long' } as const;
    return date.toLocaleDateString(undefined, options);
  }

  private formatLiteralDate(date: Date): string {
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as const;
    return date.toLocaleDateString(undefined, options);
  }
}
