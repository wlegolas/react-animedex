import dotenvMock from 'dotenv';
import ConfigurationManager from '../Manager';

jest.mock('path');

describe('ConfigurationManager', () => {
  beforeEach(() => {
    process.env.BASE_URL = 'http://www.example.com'
  });

  afterAll(() => {
    dotenvMock.mockRestore();
    delete process.env.BASE_URL;
  });

  describe('get', () => {
    it('should be a function', () => {
      expect(ConfigurationManager.get).toBeInstanceOf(Function);
    });

    it('should return the environment value when is defined', () => {
      expect(ConfigurationManager.get('BASE_URL')).toEqual('http://www.example.com');
    });

    it('should return undefined when environment value is not defined', () => {
      expect(ConfigurationManager.get('INVALID_VALUE')).toBeUndefined();
    })

  })
});
