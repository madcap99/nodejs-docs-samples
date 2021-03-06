// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var test = require('ava');
var path = require('path');
var inputDir = path.resolve('../../vision/resources');
var textDetectionSample = require('../../vision/textDetection');

test.cb('should detect texts', function (t) {
  textDetectionSample.main(
    inputDir,
    function (err, textResponse) {
      t.ifError(err);
      t.truthy(Object.keys(textResponse).length > 0);
      textDetectionSample.lookup(
        ['the', 'sunbeams', 'in'],
        function (err, hits) {
          t.ifError(err);
          t.truthy(hits.length > 0);
          t.truthy(hits[0].length > 0);
          t.end();
        }
      );
    }
  );
});
