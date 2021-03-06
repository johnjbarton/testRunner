// Google BSD license http://code.google.com/google_bsd_license.html
// Copyright 2011 Google Inc. johnjbarton@google.com

window.testRunner = {
  dumpAsText: function() {
      console.log("testRunner: ignored dumpAsText");
  },
  waitUntilDone: function() {
      console.log("testRunner: ignored waitUntilDone");
  },
  closeWebInspector: function() {
    console.log("closeWebInspector ignored")
  },
  notifyDone: function(message) {
      window.postMessage({method: 'notifyDone', arguments: [message]}, "*");
  },
  evaluateInWebInspector: function(runTestCallId, toEvaluate) {
    console.log("evaluateInWebInspector sending to content script, id "+runTestCallId);
    this.forWebInspector = {
      runTestCallId: runTestCallId,
      method: "evaluateInWebInspector",
      args: [toEvaluate, "testRunnerEval.js"]
    };
    // will be picked up by testDevtools.js
    console.log("testRunnerMessage: evaluateInWebInspector " + toEvaluate.substr(0,20));
   },

};