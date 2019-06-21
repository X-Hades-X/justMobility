import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JustMobilitySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JustMobilitySharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JustMobilitySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JustMobilitySharedModule {
  static forRoot() {
    return {
      ngModule: JustMobilitySharedModule
    };
  }
}
