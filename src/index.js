const cache = require('@toxo/cache');
const discovery = require('@toxo/discovery');
const encryption = require('@toxo/encryption');
const ioc = require('@toxo/ioc');
const logger = require('@toxo/logger');
const S = require('@toxo/fun');
const serialize = require('@toxo/serialize');
const vault = require('@toxo/vault');
const jwtstrategy = require('@toxo/jwtstrategy');
const memory = require('@toxo/memory');
const database = require('@toxo/database');
const storage = require('@toxo/storage');
const ws = require('@toxo/ws');
const schema = require('@toxo/schema');
const evaluator = require('@toxo/evaluator');
const rules = require('@toxo/rules');
const transform = require('@toxo/transform');

module.exports = {
  ...cache,
  ...discovery,
  ...encryption,
  ...ioc,
  ...logger,
  ...S,
  S,
  ...serialize,
  ...vault,
  ...jwtstrategy,
  ...memory,
  ...database,
  ...storage,
  ...ws,
  ...schema,
  ...evaluator,
  ...rules,
  ...transform,
}