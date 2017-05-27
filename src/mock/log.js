import Mock from 'mockjs';

const Log = Mock.mock({
  id: '@increment',
  content: Mock.Random.paragraph(30, 100)
})

export default {
  getDetail: config => {
    const { jobName } = config.params;
    
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([200, {
          items: Log
        }]);
      }, 300);
    })
  }
};
