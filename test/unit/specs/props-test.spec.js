import Vue from 'vue'
import TestPropsComponent from '@/components/props-test.vue'

const Ctor = Vue.extend(TestPropsComponent);

// 针对props，可以通过propsData选项断言它的渲染输出
const getRenderText = (propsData) => {
  const vm = new Ctor({propsData}).$mount()
  return vm.$el.textContent
}

describe('TestPropsComponent', () => {
  it('should render correctly with different props', () => {
    expect(getRenderText({msg: 'Hello'})).toEqual('Hello')
    expect(getRenderText({msg: 'Bye'})).toEqual('Bye')
  })
})
