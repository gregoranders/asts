System.config({
  "transpiler": "traceur",
  "paths": {
    "*": "*.js",
    "github:*": "vendor/github/*.js"
  }
});

System.config({
  "map": {
    "angular": "github:angular/bower-angular@1.3.15",
    "angular-animate": "github:angular/bower-angular-animate@1.3.15",
    "angular-aria": "github:angular/bower-angular-aria@1.3.15",
    "angular-cookies": "github:angular/bower-angular-cookies@1.3.15",
    "angular-i18n": "github:angular/bower-angular-i18n@1.3.15",
    "angular-messages": "github:angular/bower-angular-messages@1.3.15",
    "angular-mocks": "github:angular/bower-angular-mocks@1.3.15",
    "angular-resource": "github:angular/bower-angular-resource@1.3.15",
    "angular-route": "github:angular/bower-angular-route@1.3.15",
    "angular-sanitize": "github:angular/bower-angular-sanitize@1.3.15",
    "angular-touch": "github:angular/bower-angular-touch@1.3.15",
    "angular-translate": "github:angular-translate/bower-angular-translate@2.6.1",
    "angular-translate-loader-static-files": "github:angular-translate/bower-angular-translate-loader-static-files@2.6.1",
    "moment": "github:moment/moment@master",
    "traceur": "github:jmcriffey/bower-traceur@0.0.88",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
    "github:angular-translate/bower-angular-translate-loader-static-files@2.6.1": {
      "angular-translate": "github:angular-translate/bower-angular-translate@2.6.1"
    },
    "github:angular-translate/bower-angular-translate@2.6.1": {
      "angular": "github:angular/bower-angular@1.3.15"
    },
    "github:angular/bower-angular-animate@1.3.15": {
      "angular": "github:angular/bower-angular@1.3.15"
    },
    "github:angular/bower-angular-aria@1.3.15": {
      "angular": "github:angular/bower-angular@1.3.15"
    },
    "github:angular/bower-angular-cookies@1.3.15": {
      "angular": "github:angular/bower-angular@1.3.15"
    },
    "github:angular/bower-angular-mocks@1.3.15": {
      "angular": "github:angular/bower-angular@1.3.15"
    },
    "github:angular/bower-angular-route@1.3.15": {
      "angular": "github:angular/bower-angular@1.3.15"
    },
    "github:angular/bower-angular-sanitize@1.3.15": {
      "angular": "github:angular/bower-angular@1.3.15"
    },
    "github:angular/bower-angular-touch@1.3.15": {
      "angular": "github:angular/bower-angular@1.3.15"
    }
  }
});

