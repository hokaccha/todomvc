var backboneio = require('backbone.io');
var backend = backboneio.createBackend();

backend.use(backboneio.middleware.memoryStore());
backboneio.listen(3030, { todo: backend });
