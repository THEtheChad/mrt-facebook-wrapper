Package.describe({
  summary: "Facebook API Client"
});

Npm.depends({
	fb: "0.6.2"
});

Package.on_use(function(api){
  if(api.export){
    api.export('Facebook');
  }
  api.add_files("main.js", "server");
});
