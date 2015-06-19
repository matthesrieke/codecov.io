var snap = require("../../lib/services/snap");

describe("snap service", function(){

  it ("can detect snap", function(){
    process.env.SNAP_CI = "true";
    expect(snap.detect()).to.be(true);
  });

  it ("can get snap env info get_commit_status", function(){
    process.env.SNAP_CI = "true";
    process.env.SNAP_PIPELINE_COUNTER = '1234';
    process.env.SNAP_COMMIT = '5678';
    process.env.SNAP_BRANCH = 'master';
    process.env.SNAP_PULL_REQUEST_NUMBER = 'blah';
    expect(snap.configuration()).to.eql({
      service : 'snapci',
      commit : '5678',
      build : '1234',
      branch : 'master',
      pull_request : 'blah'
    });
  });

});
