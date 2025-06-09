import { createGlobalSignal } from  "sigment"

createGlobalSignal('userName', '');
createGlobalSignal('userMail', '');

export const GlobalKeys = {
  userName: 'userName',
  userMail: 'userMail'
};