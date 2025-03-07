import { getTestBed } from '@angular/core/testing';
import { setupZonelessTestEnv } from 'jest-preset-angular/setup-env/zoneless';

getTestBed().resetTestEnvironment();

setupZonelessTestEnv({
  teardown: { destroyAfterEach: true, rethrowErrors: true },
  errorOnUnknownElements: true,
  errorOnUnknownProperties: true,
});
