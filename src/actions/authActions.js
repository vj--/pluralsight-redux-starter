import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import {browserHistory} from 'react-router';

const Twitter = require('twitter-node-client').Twitter;

const OAuth = require('oauth-1.0a');
const crypto = require('crypto');

export function tokenRequestSuccess(token) {
  return { type: types.TOKEN_REQUEST_SUCCESS, token};
}

export function authenticationSuccess() {
  return {type: types.AUTHENTICATION_SUCCESS };
}

// function getAuthorization() {
//   const oauth = OAuth({
//     consumer: { key: '<your consumer key>', secret: '<your consumer secret>'},
//     signature_method: 'HMAC-SHA1',
//     hash_function(base_string, key) {
//       return crypto.createHmac('sha1', key).update(base_string).digest('base64');
//     }
//   });
//   return oauth.
// }

// Initialize
const oauth = OAuth({
  consumer: {
    key: 'ULv9FbQMv8TIUPf7tEHZDxE4D',
    secret: 'fbPja7zM9TkA06ZfM0NdSPig98sBFMEdiH3g5lvX2AnMJgl6St'
  },
  signature_method: 'HMAC-SHA1',
  hash_function(base_string, key) {
    return crypto.createHmac('sha1', key).update(base_string).digest('base64');
  }
});

const config = 	//Get this data from your twitter apps dashboard
	{
    	"consumerKey": "ULv9FbQMv8TIUPf7tEHZDxE4D",
    	"consumerSecret": "fbPja7zM9TkA06ZfM0NdSPig98sBFMEdiH3g5lvX2AnMJgl6St",
    	"accessToken": "14268795-ZENQunrkLGdvjw1e6KDJYaNTmpuLadtgndlBpRKcK",
    	"accessTokenSecret": "4JD3tlziprsez2IQcnoJHMOyxlo82KhRIsz6UtvcBGCF0",
    	"callBackUrl": "http://localhost:3000/twittersuccess"
	}

const request_data = {
  url: 'https://api.twitter.com/oauth/access_token',
  method: 'POST',
  data: {
    oauth_callback: 'http://localhost:3000/twittersuccess'
  }
};

// Note: The token is optional for some requests
const token = {
  key: '14268795-ZENQunrkLGdvjw1e6KDJYaNTmpuLadtgndlBpRKcK',
  secret: '4JD3tlziprsez2IQcnoJHMOyxlo82KhRIsz6UtvcBGCF0'
};

export function requestOAUTHToken() {
  console.log("requestOAUTHToken");
  return function(dispatch) {
    dispatch(beginAjaxCall());
    // const authT = oauth.toHeader(oauth.authorize(request_data));
    // console.log(authT);
    const twitter = new Twitter(config);
    const authT = twitter.getOAuthRequestToken(function (oauth) {
      console.log(oauth);
    });
    // Request twitter
    return fetch('https://api.twitter.com/oauth/access_token', {
        method: 'POST',
        mode: 'no-cors',
        headers: oauth.toHeader(oauth.authorize(request_data, token))
      })
      .then(function(response) {
        dispatch(tokenRequestSuccess("eue"));
      }).then(function(body) {
        console.log(body);
      });
  };
}

// export function requestOAUTHToken() {
//   return {
//     browserHistory.push('http://localhost:8888/');
//   }
// }
