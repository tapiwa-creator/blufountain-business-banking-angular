import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private renderer: Renderer2;
    private currentTheme: 'light' | 'dark' = 'light';

    constructor(rendererFactory: RendererFactory2) {
        this.renderer = rendererFactory.createRenderer(null, null);
        this.loadTheme();
    }

    toggleTheme() {
        this.setTheme(this.currentTheme === 'light' ? 'dark' : 'light');
    }

    private setTheme(theme: 'light' | 'dark') {
        this.currentTheme = theme;

        if (theme === 'dark') {
            this.renderer.addClass(document.body, 'dark-theme');
            this.renderer.removeClass(document.body, 'light-theme');
        } else {
            this.renderer.addClass(document.body, 'light-theme');
            this.renderer.removeClass(document.body, 'dark-theme');
        }

        localStorage.setItem('theme', theme);
    }

    private loadTheme() {
        const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.setTheme(prefersDark ? 'dark' : 'light');
        }
    }

    isDark(): boolean {
        return this.currentTheme === 'dark';
    }
}
