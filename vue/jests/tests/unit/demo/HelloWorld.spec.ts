/*
 * @Author: 吴玉荣
 * @LastEditors: 吴玉荣
 * @Date: 2021-12-13 14:47:00
 * @LastEditTime: 2021-12-13 17:18:33
 * @info: 描述
 */
import { shallowMount, mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import HelloWorld from '@/components/HelloWorld.vue'
describe('HelloWorld.vue', () => {
  const wrapper = mount(HelloWorld)
  test('dom点击', () => {
    wrapper.find('.add').trigger('click')
    expect(wrapper.vm.$data.list.length).toBe(6)
  })
  test('异步代码', async (done) => {
    wrapper.find('.getData').trigger('click')
    setTimeout(() => {
      done()
      expect(wrapper.vm.$data.msg).toBe(222)
    }, 2000)
  })
})
