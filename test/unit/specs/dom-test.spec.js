import Vue from 'vue'
import DomUpdateComponent from '@/components/dom-test.vue'

describe('DomUpdateComponent', () => {
  it('the msg should be Hello', () => {
    const data = DomUpdateComponent.data()
    expect(data.msg).toEqual('Hello')
  })

  // 在状态更新后检查生成的HTML
  it('the msg should change to Bye', () =>  {
    const vm = new Vue(DomUpdateComponent).$mount()

    vm.msg = 'Bye'

    // 在状态改变后和断言 DOM 更新前等待一刻
    Vue.nextTick(() => {
      expect(vm.$el.textContent).toEqual('Bye')
    })
  })
})
