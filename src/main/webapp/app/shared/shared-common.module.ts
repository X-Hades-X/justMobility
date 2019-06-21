import { NgModule } from '@angular/core';

import { JustMobilitySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [JustMobilitySharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JustMobilitySharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JustMobilitySharedCommonModule {}
