/*!
 * Bedrock Credential Notification Service.
 *
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Alex Lamar
 */
/* @ngInject */
export default function factory($http, config) {
  var service = {};
  var basePath =
    config.data['bedrock-credential-notifications'].routes.basePath;

  // TODO: potentially use service.collection in the future for semi-persistent
  // notifications or managing a notification queue
  /* service.collection = new brResourceService.Collection({
    url: basePath
  });*/

  /**
   * Queues a credential notification to be sent.
   *
   * TODO: add support for notification mechanisms other than email
   *
   * @param options the options to use:
   *          [credential] the ID of the credential to trigger a notification
   *            for.
   *          [email] the email address to send the notification to.
   *
   * @return a Promise that resolves once the notification has been queued.
   */
  service.notify = function(options) {
    if(typeof options !== 'object') {
      throw new TypeError('`options` must be an object.');
    }
    if(typeof options.credential !== 'string') {
      throw new TypeError('`options.credential` must be a string.');
    }
    if(typeof options.email !== 'string') {
      throw new TypeError('`options.email` must be a string.');
    }
    return Promise.resolve($http.post(basePath, {
      '@context': config.data.contextUrls.identity,
      // TODO: add `type: 'EmailCredentialNotification'` in future
      credential: options.credential,
      email: options.email
    }));
  };

  return service;
}
