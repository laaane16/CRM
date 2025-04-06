/* eslint-disable @typescript-eslint/no-namespace */
import { UserSchema } from '../../src/entities/User/model/types/types';
import { login } from './commands/login/login';
import { resetProfile, updateProfile } from './commands/profile/profile';

Cypress.Commands.add('login', login);
Cypress.Commands.add('updateProfile', updateProfile);
Cypress.Commands.add('resetProfile', resetProfile);

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<UserSchema>;
      updateProfile(): Chainable<void>;
      resetProfile(profileId: number): Chainable<void>;
    }
  }
}

export {};
