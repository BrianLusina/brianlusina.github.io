// const axiosMock = jest.genMockFromModule('axios');

// // this is the key to fix the axios.create() undefined error!
// axiosMock.create = jest.fn(() => axiosMock);
// axiosMock.interceptors = {
//   response: {
//     use: jest.fn(),
//   },
//   request: {
//     use: jest.fn(),
//   },
// };
// axiosMock.get = jest.fn();
// axiosMock.post = jest.fn();
// axiosMock.put = jest.fn();
// axiosMock.delete = jest.fn();
// axiosMock.default = {
//   get: jest.fn(),
//   post: jest.fn(),
//   put: jest.fn(),
//   delete: jest.fn(),
//   patch: jest.fn(),
// };

// export default axiosMock;

jest.mock('axios', () => {
  return {
    default: jest.fn(),
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
    patch: jest.fn(),
    request: jest.fn(),
    create: () => {
      return {
        baseURL: 'https://test.eventsafrique.com',
        headers: {
          'Content-type': 'application/json',
        },
        defaults: {
          baseURL: 'https://test.eventsafrique.com',
        },
        interceptors: {
          response: {
            use: jest.fn(),
          },
          request: {
            use: jest.fn(),
          },
        },
        post: jest.fn(),
        get: jest.fn(),
        patch: jest.fn(),
        put: jest.fn(),
        delete: jest.fn(),
        request: jest.fn(),
      };
    },
    post: {
      mockImplementationOnce: (callback) => {
        jest.fn(callback);
      },
    },
    get: {
      mockImplementationOnce: (callback) => {
        jest.fn(callback);
      },
    },
    put: {
      mockImplementationOnce: (callback) => {
        jest.fn(callback);
      },
    },
    delete: {
      mockImplementationOnce: (callback) => {
        jest.fn(callback);
      },
    },
    patch: {
      mockImplementationOnce: (callback) => {
        jest.fn(callback);
      },
    },
    request: jest.fn(),
  };
});
