var TemplatoGeddyEJS = (function() {

  function TemplatoGeddyEJS() {
    // Hardcoded for specifically Geddy's EJS implementation
    // Location: `deps/ejs.js`
    this.engine = this.engine || require('../../../ejs');
  };

  TemplatoGeddyEJS.prototype.compile = function(template) {
    return this.engine.compile(template);
  };

  TemplatoGeddyEJS.prototype.render = function(data, fn) {
    return fn(data);
  };

  return TemplatoGeddyEJS;

})();

module.exports = TemplatoGeddyEJS;