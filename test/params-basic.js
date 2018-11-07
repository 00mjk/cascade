/**
 * params-basic.js
 */


import * as cascade from '../src/index.js';

// Encryption and Signing Parameters
const curves = [ 'P-256', 'P-384', 'P-521' ];
const modulusLength = [ 2048, 2048 ];
const userIds = [ 'test@example.com' ];
const paramArray = [{name: 'ec', param: curves}, {name: 'rsa', param: modulusLength}];

const openpgpEncryptConf = { suite: 'openpgp', options: { detached: true, compression: 'zlib' }};
const openpgpSignConf = {required: true, suite: 'openpgp', options: {}};

const jscuSessionEncryptConf = {suite: 'jscu', options: {name: 'AES-GCM'}};
const openpgpgSessionEncryptConf = {suite: 'openpgp', options: {algorithm: 'aes256', aead: true, aead_mode: 'eax' }};

const jscuOnetimeSessionEncryptConf = {onetimeKey: {keyParams: {type: 'session', length: 32}}, suite: 'jscu', options: {name: 'AES-GCM'}};


export async function createParam() {
  const param = new ParamsBasic();
  await param.init();
  return param;
}

class ParamsBasic{
  constructor(){
    this.Keys={};
    this.KeysGPG={};
  }

  async init (){
    this.Keys.ec = await Promise.all(
      curves.map ( (curve) => cascade.generateKey({suite: 'jscu', keyParams: {type: 'ec', curve}}))
    );
    this.KeysGPG.ec = await Promise.all(
      curves.map ( (curve) => cascade.generateKey({suite: 'openpgp', userIds, keyParams: {type: 'ec', keyExpirationTime: 0, curve}}))
    );
    this.Keys.rsa = await Promise.all(
      modulusLength.map ( (ml) => cascade.generateKey({suite: 'jscu', keyParams: {type: 'rsa', modulusLength: ml}}))
    );
    this.KeysGPG.rsa = await Promise.all(
      modulusLength.map (
        (ml) => cascade.generateKey({suite: 'openpgp', userIds, keyParams: {type: 'rsa', keyExpirationTime: 0, modulusLength: ml}}))
    );

    let jscu;
    if (typeof window !== 'undefined' && typeof window.jscu !== 'undefined') jscu = window.jscu;
    else {
      try {
        jscu = require('js-crypto-utils');
      } catch(e) {
        throw new Error(`FailedToLoadJSCU: ${e.message}`);
      } // work around
    }
    this.Keys.sessionKey = await jscu.random.getRandomBytes(32);
  }

  jscuEncryptConf (paramObject, idx) {
    return {
      suite: 'jscu',
      options: (paramObject.name === 'ec')
        ? {
          privateKeyPass: {privateKey: this.Keys[paramObject.name][idx].privateKey.keyString, passphrase: ''}, // only for ECDH
          hash: 'SHA-256', encrypt: 'AES-GCM', keyLength: 32, info: ''
        }
        : {hash: 'SHA-256'},
    };
  }

  jscuSignConf (paramObject) {
    return {
      required: true,
      suite: 'jscu',
      options: (paramObject.name === 'ec') ? {hash: 'SHA-256'} : {hash: 'SHA-256', name: 'RSA-PSS', saltLength: 32}
    };
  }

  get paramArray () { return paramArray; }
  get openpgpEncryptConf () { return openpgpEncryptConf; }
  get openpgpSignConf () { return openpgpSignConf; }
  get jscuSessionEncryptConf () { return jscuSessionEncryptConf; }
  get openpgpgSessionEncryptConf () { return openpgpgSessionEncryptConf; }
  get jscuOnetimeSessionEncryptConf () { return jscuOnetimeSessionEncryptConf; }
}