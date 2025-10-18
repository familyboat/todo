import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly todoApps: Array<{
    title: string,
    url: string,
    status: '已完成' | '正在制作中' | '被迫中止'
  }> = [
    {
      title: 'vue todo 应用',
      url: 'https://familyboat.github.io/todo-vue/',
      status: '已完成',
    },
    {
      title: 'angular todo 应用',
      url: 'https://familyboat.github.io/todo-angular/browser/',
      status: '正在制作中',
    }
  ];
}
