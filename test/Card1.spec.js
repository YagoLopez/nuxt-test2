import { mount } from '@vue/test-utils'
import Card1 from '@/components/Card1.vue'

describe('Card1', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Card1);
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
});
