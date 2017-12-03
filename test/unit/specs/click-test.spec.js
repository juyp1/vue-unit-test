import Vue from 'vue'
import ClickTestComponent from '@/components/click-test.vue'

describe('ClickTestComponent', () => {
  const Ctor = Vue.extend(ClickTestComponent)

  const vm = new Ctor().$mount()
  // 获取按钮
  const oBtn = vm.$el.querySelector('button')
  // 创建点击事件
  const clickEvent = new window.Event('click')

  it("the num should be 1", () => {
    // 触发按钮点击事件
    oBtn.dispatchEvent(clickEvent)
    // 需要手动监听更新
    vm._watcher.run()

    expect(vm.$el.textContent).toContain('1')
  })

  it("the num should be 2", () => {
    // 触发按钮点击事件
    oBtn.dispatchEvent(clickEvent)
    // 需要手动监听更新
    vm._watcher.run()
    
    expect(vm.$el.textContent).toContain('2')
  })
})
