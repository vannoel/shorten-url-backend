const corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  "allowedHeaders": ['Content-Type', 'Authorization'],
}

module.exports = corsOptions;