import { config } from '@vue/test-utils'

config.stubs.CardClass = {
  template: '<div><slot /></div>'
}

config.stubs.CardClassDetail = {
  template: '<div><slot /></div>'
}