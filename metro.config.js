/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const crypto = require.resolve("crypto-browserify");
const url = require.resolve("url/");
const http = require.resolve("stream-http");
const fs = require.resolve("react-native-fs");
const https = require.resolve("https-browserify");
const os = require.resolve("os-browserify/browser.js");
const path = require.resolve("path-browserify");
const stream = require.resolve("readable-stream");
const vm = require.resolve("vm-browserify");
const net = require.resolve("react-native-tcp");

module.exports = {
  resolver: {
    extraNodeModules: {
      crypto,
      fs,
      url,
      http,
      https,
      os,
      path,
      stream,
      vm,
      net,
    }
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
