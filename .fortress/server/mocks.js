import casual from 'casual';
import moment from 'moment';

const mocks = {
  Post: () => ({
    id: casual.integer(0,10),
    created: moment(Date.now()).format('MMMM Do YYYY'),
    content: casual.description,
    title: casual.title,
    url: casual.url,
    public: true,
  }),
};

export default mocks;