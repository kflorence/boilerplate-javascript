import {jsdom} from 'jsdom'
import test from 'ava'

import library from '../dist/test/library'

test.beforeEach(t => {
  const document = jsdom('<head><title>test</title></head><body></body>')
  const window = document.defaultView
  t.context.document = document
  t.context.window = window
  t.context.navigator = window.navigator
})

test('title should be "test"', t => {
  t.is(library(t.context.document), 'test')
})
