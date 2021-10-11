import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './component/second/second.component';
import { FirstModuleModule } from '../first-module/first-module.module';

@NgModule({
  imports: [CommonModule, FirstModuleModule],
  declarations: [SecondComponent],
  exports: [SecondComponent],
})
export class SecondModuleModule {}
