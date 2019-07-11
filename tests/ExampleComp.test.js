import { mount } from '@vue/test-utils'
import ExampleComp from '@/components/ExampleComp'

describe('component/ExampleComp', () => {
  let wrapper = mount(ExampleComp, {
    propsData: {
      message: {
        text: 'Hello World',
      },
    },
  })

  it('Content data changed', () => {
    wrapper.setData({ content: true })
    wrapper.find('#toggle').trigger('click')
    expect(wrapper.vm.content).toBe(false)
  })

  it('Message correct', () => {
    expect(wrapper.find('#message').text()).toBe('Hello World')
  })
})
