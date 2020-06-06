const assert = require('assert');

const buildMessage = require('../utils/buildMessage')

describe.only('utils - buildMessage', () => {
  describe('when receives na entity and an action', () => {
    it('should return then respective message', () => {
      const result = buildMessage('movie', 'create');
      const expect = "movie created";
      assert.strictEqual(result, expect);
    });
  })
  describe('when receives an entity and an action adn is a list', () => {
    it('should return the respective message with the entity in plural', () => {
      const result = buildMessage('movie', 'list');
      const expect = 'movies listed';
      assert.strictEqual(result, expect);
    });

  })


})
