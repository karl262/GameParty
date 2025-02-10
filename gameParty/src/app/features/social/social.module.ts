import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {ComponentsModule} from "../../shared/components/components.module";

import { SocialPageRoutingModule } from './social-routing.module';

import { SocialPage } from './social.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SocialPage]
})
export class SocialPageModule {}
