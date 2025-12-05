import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-main',
  standalone: true,
  imports: [TranslateModule, CommonModule],
  templateUrl: './portfolio-main.component.html',
  styleUrl: './portfolio-main.component.css'
})
export class PortfolioMainComponent implements OnInit, AfterViewInit {
  isDarkMode: boolean = false;
  currentLang: string = 'en';
  isLanguageMenuOpen: boolean = false;
  isMobileMenuOpen: boolean = false;
  experienceItems: any[] = [];
  skillItems: any[] = [];
  
  // NUEVO: Array de tecnologías para los logos
  technologies = [
    {
      name: 'Java',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      delay: 0
    },
    {
      name: 'Spring Boot',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      delay: 0.1
    },
    {
      name: 'Sigma Computing',
      iconUrl: 'https://cdn.brandfetch.io/idB7p5FOJd/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1671523721495',
      delay: 0.2
    },
    {
      name: 'Salesforce',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg',
      delay: 0.3
    },
    {
      name: 'Oracle',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
      delay: 0.4
    },
    {
      name: 'JavaScript',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      delay: 0.5
    },
    {
      name: 'Angular',
      iconUrl: 'https://cdn.brandfetch.io/idHiKOAm6v/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1756736081274',
      delay: 0.6
    },
    {
      name: 'HTML',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      delay: 0.7
    }
  ];

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
  }

  ngOnInit() {
    if (typeof document !== 'undefined') {
      const savedLang = localStorage.getItem('language') || 'en';
      this.currentLang = savedLang;
      this.translate.use(savedLang);
      document.documentElement.lang = savedLang;
    }

    if (typeof document !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        this.isDarkMode = true;
        document.documentElement.classList.add('dark');
      } else {
        this.isDarkMode = false;
        document.documentElement.classList.remove('dark');
      }
    }

    this.loadExperienceItems();
    this.loadSkillItems();
    
    this.translate.onLangChange.subscribe(() => {
      this.loadExperienceItems();
      this.loadSkillItems();
    });
  }

  loadExperienceItems(): void {
    this.translate.get('experience.items').subscribe((items: any[]) => {
      this.experienceItems = items || [];
    });
  }

  loadSkillItems(): void {
    this.translate.get('skills.items').subscribe((items: any[]) => {
      this.skillItems = items || [];
    });
  }

  ngAfterViewInit() {
    if (typeof document !== 'undefined') {
      const checkbox = document.getElementById('theme-toggle') as HTMLInputElement;
      if (checkbox) {
        checkbox.checked = this.isDarkMode;
      }
    }
  }

  toggleDarkMode(event?: Event): void {
    if (typeof document !== 'undefined') {
      if (event && event.target) {
        const checkbox = event.target as HTMLInputElement;
        this.isDarkMode = checkbox.checked;
      } else {
        this.isDarkMode = !this.isDarkMode;
        const checkbox = document.getElementById('theme-toggle') as HTMLInputElement;
        if (checkbox) {
          checkbox.checked = this.isDarkMode;
        }
      }
      
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }
  }

  toggleLanguageMenu(): void {
    this.isLanguageMenuOpen = !this.isLanguageMenuOpen;
  }

  closeLanguageMenu(): void {
    this.isLanguageMenuOpen = false;
  }

  setLanguage(lang: string): void {
    if (typeof document !== 'undefined') {
      this.currentLang = lang;
      this.translate.use(lang);
      document.documentElement.lang = lang;
      localStorage.setItem('language', lang);
      this.closeLanguageMenu();
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.language-selector-container')) {
      this.closeLanguageMenu();
    }
    if (!target.closest('.mobile-menu-container')) {
      this.closeMobileMenu();
    }
  }

}