import { createLocalVue, mount } from '@vue/test-utils'
import { TWrapper } from '..'
import ClassId from '@/pages/class/_id.vue'

const localVue = createLocalVue()

const $router = {
  push: jest.fn(),
}

const $route = {
  params: {
    id: 1
  }
}

describe('Class with Id Page', () => {
  test('is a Vue instance', () => {
    const wrapper: TWrapper = mount(ClassId, {
      mocks: {
        $route,
        $router
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('on Join', () => {
    const wrapper: TWrapper = mount(ClassId, {
      localVue,
      mocks: {
        $route,
        $router
      }
    })

    wrapper.vm.onJoin(1)
    expect(wrapper.vm).toBeTruthy()
  })

})
