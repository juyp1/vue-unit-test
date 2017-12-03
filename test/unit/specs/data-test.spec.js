// 导入vue.js和组件，进行测试
import Vue from 'vue'
import TestDataComponent from '@/components/data-test.vue'

describe('TestDataComponent', () => {
  // 检查原始组件选项
  it('has a created hook', () => {
    expect(typeof TestDataComponent.created).toEqual('function')
  })

  // 评估原始组件选项中的函数的结果
  it('should set the correct default data', () => {
    expect(typeof TestDataComponent.data).toEqual('function')

    const data = TestDataComponent.data()
    expect(data.msg).toEqual('hello')
  })

  // 检查mount中的组件实例
  it('should correctly set the msg when created', () => {
    const vm = new Vue(TestDataComponent).$mount()
    expect(vm.msg).toEqual('bye')
  })

  // 创建一个实例并检查渲染输出
  it('should render correct msg', () => {
    const Ctor = Vue.extend(TestDataComponent)
    const vm = new Ctor().$mount()
    expect(vm.$el.textContent).toEqual('bye')
  })
})
