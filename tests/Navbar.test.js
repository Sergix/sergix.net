import { mount, RouterLinkStub } from '@vue/test-utils'
import Navbar from '@/components/Navbar'

describe('component/Navbar', () => {
  let wrapper = mount(Navbar, {
    stubs: {
      'g-link': RouterLinkStub,
    },
  })

  it('renders correctly', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
