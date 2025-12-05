import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioMainComponent } from './pages/home/portfolio-main/portfolio-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PortfolioMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-app';
}
