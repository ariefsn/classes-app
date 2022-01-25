import { mount } from '@vue/test-utils'
import { TWrapper } from '..'
import CardClassDetail from '@/components/CardClassDetail.vue'
import { IClassDetail } from '~/models/common/classes'

describe('CardClassDetail', () => {
  test('is a Vue instance', () => {
    const wrapper: TWrapper = mount(CardClassDetail)
    expect(wrapper.vm).toBeTruthy()
  })

  test('with props', () => {
    const wrapper: TWrapper = mount(CardClassDetail, {
      propsData: {
        item: {} as IClassDetail
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('have error message', () => {
    const wrapper: TWrapper = mount(CardClassDetail, {
      propsData: {
        item: {} as IClassDetail,
        error: 'some error message'
      }
    })
    expect(wrapper.vm).toBeTruthy()
  })

  test('submit join', () => {
    const wrapper: TWrapper = mount(CardClassDetail, {
      propsData: {
        item: {} as IClassDetail,
        error: 'some error message'
      }
    })

    wrapper.vm.join()
    expect(wrapper.vm).toBeTruthy()
  })
})
