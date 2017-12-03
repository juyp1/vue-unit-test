import axios from 'axios'
import '../mock/index'

const getGreeting = async (url = 'http://api.rs.com/v1/test') => {
  try {
    const res = await axios.get(url)

    return res.data
  } catch (err) {
    throw new Error('获取问候语失败')
  }
}

export default getGreeting
