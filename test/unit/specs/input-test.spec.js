// input.spec.js
import Vue from 'vue'
import InputTestComponent from '@/components/input-test.vue'

describe('InputTestComponent', () => {
  const Ctor = Vue.extend(InputTestComponent)
  const vm = new Ctor().$mount()

  const oBtn = vm.$el.querySelector('button')
  const clickEvent = new window.Event('click')

  it('the msg should be equal with input', () => {
    vm.input = 'let me change msg to what I say'

    oBtn.dispatchEvent(clickEvent)

    // 手动监听更新
    vm._watcher.run()

    expect(vm.$el.textContent).toContain('let me change msg to what I say')
  })
});
