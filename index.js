/*!
 * Credential Notifications module.
 *
 * Copyright (c) 2016-2017 Digital Bazaar, Inc. All rights reserved.
 *
 * @author Alex Lamar
 */
import angular from 'angular';
import CredentialNotificationService from
  './credential-notification-service.js';

var module = angular.module('bedrock-credential-notifications', []);

module.service(
  'brCredentialNotificationService', CredentialNotificationService);
