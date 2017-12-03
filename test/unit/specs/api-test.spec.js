import getGreeting from '@/provider/index'

describe('test greeting', async () => {
  it('res should be "Hi, Vue"', async () => {
    const res = await getGreeting();
    expect(res.greeting).toEqual('Hi, Vue')
  })

  it('err should be catched', async () => {
    try {
      const res = await getGreeting('wrongUrl')
    } catch (err) {
      expect(err.message).toEqual('获取问候语失败')
    }
  })
})
