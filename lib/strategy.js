'use strict';

var util = require('util');
var OAuth2Strategy = require('passport-oauth2');

var baseUrl = 'https://owner-api.teslamotors.com'

function Strategy(options, verify) {
  options = options || {};
  options.authorizationURL = options.authorizationURL || baseUrl + '/oauth/authorize';
  options.tokenURL = options.tokenURL || baseUrl + '/oauth/token';
  options.customHeaders = options.customHeaders || {};

  OAuth2Strategy.call(this, options, verify);
  this.name = 'tesla';
  this._oauth2.useAuthorizationHeaderforGET(true);
}


util.inherits(Strategy, OAuth2Strategy);

Strategy.prototype.userProfile = function(accessToken, done) {
  setTimeout(function(){
    done(null, {provider: 'tesla'});
  }, 0);
};

/**
 * Expose `Strategy`.
 */
module.exports = Strategy;
