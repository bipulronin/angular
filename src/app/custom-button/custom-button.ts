import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: '[app-custom-button]',
  imports: [CommonModule],
  templateUrl: './custom-button.html',
  styleUrl: './custom-button.scss',
  standalone: true,
})
export class CustomButton {
  @Input() display!: boolean;
  @Input() data!: any;
  @Output() displayChange = new EventEmitter<boolean>();
  @Input() label: string = 'Click Me';

  @HostListener('click', ['$event']) onButtonClick(event: Event) {
    event.stopPropagation();
    this.display = !this.display;
    this.displayChange.emit(this.display);
  }
}
