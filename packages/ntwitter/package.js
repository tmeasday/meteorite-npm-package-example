Package.describe({
  summary: "Twitter API"
});

Npm.depends({ntwitter: "0.5.0"});

Package.on_use(function (api) {
  api.add_files("ntwitter.js", "server");
});