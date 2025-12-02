import { ChangeDetectionStrategy, Component, signal, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomButton } from './custom-button/custom-button';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { CustomPara } from "./custom-para/custom-para";
import { CustomElement } from "./custom-element/custom-element";

@Component({
  selector: '[root-component]',
  imports: [RouterOutlet, CommonModule, CustomButton, CustomPara, CustomElement],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated,
  standalone: true,
})
export class App {
  protected readonly title = signal('angular-app');
  display = true;
  showItem = false
  data = {
    button: {
      showIcon: true,
    }
  }
  asyncData = new Observable(subscriber => {
    setTimeout(() => {
      subscriber.error('Async Data Loaded');
      subscriber.complete();
    }, 3000);
  })
  onClick() {
    this.showItem = true;
  }
}
