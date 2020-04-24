import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrustedURLPipe } from './trusted-urlpipe.pipe';



@NgModule({
  declarations: [TrustedURLPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TrustedURLPipe
  ]
})
export class ServicesModule { }
