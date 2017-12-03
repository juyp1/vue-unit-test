import Vue from 'vue'
import MockTestComponet from '@/components/mock-test.vue'

describe('MockTestComponet', () => {
  it('should have the created hook', () => {
    expect(typeof MockTestComponet.created).toEqual('function')
  })

  it('the msg should be waiting', () => {
    const data = MockTestComponet.data()

    expect(data.msg).toEqual('waiting')
  })

  it('the msg should change when created', async () => {
    // const vm = new Vue(MockTestComponet).$mount()
    const Ctor = Vue.extend(MockTestComponet)
    const vm = new Ctor().$mount()

    setTimeout(() => {
      expect(vm.msg).toEqual('Hi, Vue')
    }, 0)
  })

  // 返回正确的结果
  it('test methods getMsg by correct url', async () => {
    const vm = new Vue(MockTestComponet)
    await vm.getMsg();

    expect(vm.msg).toEqual('Hi, Vue')
  })

  // 抛出异常
  it('test methods getMsg by wrong url', async () => {
    try {
      const vm = new Vue(MockTestComponet)
      await vm.getMsg('fuck');
    } catch (err) {
      expect(err.message).toEqual('获取问候语失败')
    }
  })
})

