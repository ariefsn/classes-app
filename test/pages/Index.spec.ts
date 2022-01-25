import { createLocalVue, mount } from '@vue/test-utils'
import { TWrapper } from '..'
import Index from '@/pages/index.vue'

const localVue = createLocalVue()

const $router = {
  push: jest.fn(),
}

describe('Index Page', () => {
  test('is a Vue instance', () => {
    const wrapper: TWrapper = mount(Index)
    expect(wrapper.vm).toBeTruthy()
  })

  test('on press', () => {
    const wrapper: TWrapper = mount(Index, {
      localVue,
      mocks: {
        $router
      }
    })

    wrapper.vm.onPress(1)
    expect(wrapper.vm).toBeTruthy()
  })

})
