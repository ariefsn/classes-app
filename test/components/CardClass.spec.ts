import { mount } from '@vue/test-utils'
import { TWrapper } from '..'
import CardClass from '@/components/CardClass.vue'
import { IClassItem } from '~/models/common/classes'

describe('CardClass', () => {
  test('is a Vue instance', () => {
    const wrapper: TWrapper = mount(CardClass)
    expect(wrapper.vm).toBeTruthy()
  })

  test('with props', () => {
    const wrapper: TWrapper = mount(CardClass, {
      propsData: {
        item: {} as IClassItem
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('go detail', () => {
    const wrapper: TWrapper = mount(CardClass, {
      propsData: {
        item: {} as IClassItem,
      }
    })

    wrapper.vm.goDetail()
    expect(wrapper.vm).toBeTruthy()
  })

})
