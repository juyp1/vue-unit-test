import Mock from 'mockjs'

export default Mock.mock('http://api.rs.com/v1/test', {
  'greeting': 'Hi, Vue'
});
