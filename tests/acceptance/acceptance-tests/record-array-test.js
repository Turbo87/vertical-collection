import Ember from 'ember';
import { test } from 'qunit';
import { find, findAll } from 'ember-native-dom-helpers';

import moduleForAcceptance from '../../../tests/helpers/module-for-acceptance';
import waitForRender from 'dummy/tests/helpers/wait-for-render';

moduleForAcceptance('Acceptance | Record Array');

const { VERSION } = Ember;

// Don't test Ember Data pre-1.13, there were no stable releases
if (VERSION.match(/1\.11\.\d+/) === null) {
  test('RecordArrays render correctly', async function(assert) {
    visit('/acceptance-tests/record-array');

    await waitForRender();

    assert.equal(findAll('number-slide').length, 15, 'correct number of items rendered');
    assert.equal(find('number-slide:first-of-type').textContent.replace(/\s/g, ''), '0(0)', 'correct first item rendered');
    assert.equal(find('number-slide:last-of-type').textContent.replace(/\s/g, ''), '14(14)', 'correct last item rendered');
  });
}
