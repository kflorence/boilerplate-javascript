import { jsdom } from "jsdom"
import test from "ava"

import library from "../dist/library.es"

test.beforeEach(t => {
  const document = jsdom("<head><title>wee</title></head><body></body>")
  const window = document.defaultView
  t.context.document = document
  t.context.window = window
  t.context.navigator = window.navigator
})

test(t => {
  t.is(library(t.context.document), "wee")
})
