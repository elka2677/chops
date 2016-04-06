﻿/// <autosync enabled="true" />
/// <reference path="../aurelia.protractor.js" />
/// <reference path="../build/args.js" />
/// <reference path="../build/bundles.js" />
/// <reference path="../build/export.js" />
/// <reference path="../build/paths.js" />
/// <reference path="../build/tasks/build.js" />
/// <reference path="../build/tasks/bundle.js" />
/// <reference path="../build/tasks/clean.js" />
/// <reference path="../build/tasks/dev.js" />
/// <reference path="../build/tasks/e2e.js" />
/// <reference path="../build/tasks/export-release.js" />
/// <reference path="../build/tasks/lint.js" />
/// <reference path="../build/tasks/prepare-release.js" />
/// <reference path="../build/tasks/serve.js" />
/// <reference path="../build/tasks/test.js" />
/// <reference path="../build/tasks/watch.js" />
/// <reference path="../gulpfile.js" />
/// <reference path="../karma.conf.js" />
/// <reference path="../protractor.conf.js" />
/// <reference path="../semantic/dist/components/accordion.js" />
/// <reference path="../semantic/dist/components/api.js" />
/// <reference path="../semantic/dist/components/checkbox.js" />
/// <reference path="../semantic/dist/components/dimmer.js" />
/// <reference path="../semantic/dist/components/dropdown.js" />
/// <reference path="../semantic/dist/components/embed.js" />
/// <reference path="../semantic/dist/components/form.js" />
/// <reference path="../semantic/dist/components/modal.js" />
/// <reference path="../semantic/dist/components/nag.js" />
/// <reference path="../semantic/dist/components/popup.js" />
/// <reference path="../semantic/dist/components/progress.js" />
/// <reference path="../semantic/dist/components/rating.js" />
/// <reference path="../semantic/dist/components/search.js" />
/// <reference path="../semantic/dist/components/shape.js" />
/// <reference path="../semantic/dist/components/sidebar.js" />
/// <reference path="../semantic/dist/components/site.js" />
/// <reference path="../semantic/dist/components/state.js" />
/// <reference path="../semantic/dist/components/sticky.js" />
/// <reference path="../semantic/dist/components/tab.js" />
/// <reference path="../semantic/dist/components/transition.js" />
/// <reference path="../semantic/dist/components/visibility.js" />
/// <reference path="../semantic/dist/semantic.js" />
/// <reference path="../semantic/gulpfile.js" />
/// <reference path="../semantic/src/definitions/behaviors/api.js" />
/// <reference path="../semantic/src/definitions/behaviors/colorize.js" />
/// <reference path="../semantic/src/definitions/behaviors/form.js" />
/// <reference path="../semantic/src/definitions/behaviors/state.js" />
/// <reference path="../semantic/src/definitions/behaviors/visibility.js" />
/// <reference path="../semantic/src/definitions/behaviors/visit.js" />
/// <reference path="../semantic/src/definitions/globals/site.js" />
/// <reference path="../semantic/src/definitions/modules/accordion.js" />
/// <reference path="../semantic/src/definitions/modules/checkbox.js" />
/// <reference path="../semantic/src/definitions/modules/dimmer.js" />
/// <reference path="../semantic/src/definitions/modules/dropdown.js" />
/// <reference path="../semantic/src/definitions/modules/embed.js" />
/// <reference path="../semantic/src/definitions/modules/modal.js" />
/// <reference path="../semantic/src/definitions/modules/nag.js" />
/// <reference path="../semantic/src/definitions/modules/popup.js" />
/// <reference path="../semantic/src/definitions/modules/progress.js" />
/// <reference path="../semantic/src/definitions/modules/rating.js" />
/// <reference path="../semantic/src/definitions/modules/search.js" />
/// <reference path="../semantic/src/definitions/modules/shape.js" />
/// <reference path="../semantic/src/definitions/modules/sidebar.js" />
/// <reference path="../semantic/src/definitions/modules/sticky.js" />
/// <reference path="../semantic/src/definitions/modules/tab.js" />
/// <reference path="../semantic/src/definitions/modules/transition.js" />
/// <reference path="../semantic/tasks/admin/components/create.js" />
/// <reference path="../semantic/tasks/admin/components/init.js" />
/// <reference path="../semantic/tasks/admin/components/update.js" />
/// <reference path="../semantic/tasks/admin/distributions/create.js" />
/// <reference path="../semantic/tasks/admin/distributions/init.js" />
/// <reference path="../semantic/tasks/admin/distributions/update.js" />
/// <reference path="../semantic/tasks/admin/publish.js" />
/// <reference path="../semantic/tasks/admin/register.js" />
/// <reference path="../semantic/tasks/admin/release.js" />
/// <reference path="../semantic/tasks/build.js" />
/// <reference path="../semantic/tasks/build/assets.js" />
/// <reference path="../semantic/tasks/build/css.js" />
/// <reference path="../semantic/tasks/build/javascript.js" />
/// <reference path="../semantic/tasks/check-install.js" />
/// <reference path="../semantic/tasks/clean.js" />
/// <reference path="../semantic/tasks/collections/admin.js" />
/// <reference path="../semantic/tasks/collections/build.js" />
/// <reference path="../semantic/tasks/collections/internal.js" />
/// <reference path="../semantic/tasks/collections/rtl.js" />
/// <reference path="../semantic/tasks/config/admin/github.js" />
/// <reference path="../semantic/tasks/config/admin/oauth.example.js" />
/// <reference path="../semantic/tasks/config/admin/release.js" />
/// <reference path="../semantic/tasks/config/admin/templates/component-package.js" />
/// <reference path="../semantic/tasks/config/admin/templates/css-package.js" />
/// <reference path="../semantic/tasks/config/admin/templates/less-package.js" />
/// <reference path="../semantic/tasks/config/defaults.js" />
/// <reference path="../semantic/tasks/config/docs.js" />
/// <reference path="../semantic/tasks/config/npm/gulpfile.js" />
/// <reference path="../semantic/tasks/config/project/config.js" />
/// <reference path="../semantic/tasks/config/project/install.js" />
/// <reference path="../semantic/tasks/config/project/release.js" />
/// <reference path="../semantic/tasks/config/tasks.js" />
/// <reference path="../semantic/tasks/config/user.js" />
/// <reference path="../semantic/tasks/docs/build.js" />
/// <reference path="../semantic/tasks/docs/metadata.js" />
/// <reference path="../semantic/tasks/docs/serve.js" />
/// <reference path="../semantic/tasks/install.js" />
/// <reference path="../semantic/tasks/rtl/build.js" />
/// <reference path="../semantic/tasks/rtl/watch.js" />
/// <reference path="../semantic/tasks/version.js" />
/// <reference path="../semantic/tasks/watch.js" />
/// <reference path="../src/app.js" />
/// <reference path="../src/blur-image.js" />
/// <reference path="../src/child-router.js" />
/// <reference path="../src/main.js" />
/// <reference path="../src/users.js" />
/// <reference path="../src/welcome.js" />
/// <reference path="../test/e2e/dist/demo.spec.js" />
/// <reference path="../test/e2e/dist/skeleton.po.js" />
/// <reference path="../test/e2e/dist/welcome.po.js" />
/// <reference path="../test/e2e/src/demo.spec.js" />
/// <reference path="../test/e2e/src/skeleton.po.js" />
/// <reference path="../test/e2e/src/welcome.po.js" />
/// <reference path="../test/unit/app.spec.js" />
/// <reference path="../test/unit/child-router.spec.js" />
/// <reference path="../test/unit/setup.js" />
/// <reference path="../test/unit/users.spec.js" />
/// <reference path="../wallaby.js" />
/// <reference path="config.js" />
/// <reference path="dist/app.js" />
/// <reference path="dist/child-router.js" />
/// <reference path="dist/users.js" />
/// <reference path="dist/welcome.js" />
/// <reference path="js/site.js" />
/// <reference path="jspm_packages/github/components/jquery@2.2.1.js" />
/// <reference path="jspm_packages/github/components/jquery@2.2.1/jquery.js" />
/// <reference path="jspm_packages/github/components/jquery@2.2.1/jquery-migrate.js" />
/// <reference path="jspm_packages/github/github/fetch@0.11.0.js" />
/// <reference path="jspm_packages/github/github/fetch@0.11.0/fetch.js" />
/// <reference path="jspm_packages/github/github/fetch@0.11.0/test/test.js" />
/// <reference path="jspm_packages/github/github/fetch@0.11.0/test/worker.js" />
/// <reference path="jspm_packages/github/systemjs/plugin-css@0.1.20.js" />
/// <reference path="jspm_packages/github/systemjs/plugin-css@0.1.20/css.js" />
/// <reference path="jspm_packages/github/systemjs/plugin-css@0.1.20/css-builder.js" />
/// <reference path="jspm_packages/github/systemjs/plugin-text@0.0.3.js" />
/// <reference path="jspm_packages/github/systemjs/plugin-text@0.0.3/text.js" />
/// <reference path="jspm_packages/github/twbs/bootstrap@3.3.6.js" />
/// <reference path="jspm_packages/github/twbs/bootstrap@3.3.6/js/bootstrap.js" />
/// <reference path="jspm_packages/github/twbs/bootstrap@3.3.6/js/npm.js" />
/// <reference path="jspm_packages/npm/aurelia-animator-css@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-animator-css@1.0.0-beta.1.2.0/aurelia-animator-css.js" />
/// <reference path="jspm_packages/npm/aurelia-binding@1.0.0-beta.1.3.0.js" />
/// <reference path="jspm_packages/npm/aurelia-binding@1.0.0-beta.1.3.0/aurelia-binding.js" />
/// <reference path="jspm_packages/npm/aurelia-bootstrapper@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-bootstrapper@1.0.0-beta.1.2.0/aurelia-bootstrapper.js" />
/// <reference path="jspm_packages/npm/aurelia-dependency-injection@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-dependency-injection@1.0.0-beta.1.2.0/aurelia-dependency-injection.js" />
/// <reference path="jspm_packages/npm/aurelia-event-aggregator@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-event-aggregator@1.0.0-beta.1.2.0/aurelia-event-aggregator.js" />
/// <reference path="jspm_packages/npm/aurelia-fetch-client@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-fetch-client@1.0.0-beta.1.2.0/aurelia-fetch-client.js" />
/// <reference path="jspm_packages/npm/aurelia-framework@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-framework@1.0.0-beta.1.2.0/aurelia-framework.js" />
/// <reference path="jspm_packages/npm/aurelia-history@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-history@1.0.0-beta.1.2.0/aurelia-history.js" />
/// <reference path="jspm_packages/npm/aurelia-history-browser@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-history-browser@1.0.0-beta.1.2.0/aurelia-history-browser.js" />
/// <reference path="jspm_packages/npm/aurelia-loader@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-loader@1.0.0-beta.1.2.0/aurelia-loader.js" />
/// <reference path="jspm_packages/npm/aurelia-loader-default@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-loader-default@1.0.0-beta.1.2.0/aurelia-loader-default.js" />
/// <reference path="jspm_packages/npm/aurelia-logging@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-logging@1.0.0-beta.1.2.0/aurelia-logging.js" />
/// <reference path="jspm_packages/npm/aurelia-logging-console@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-logging-console@1.0.0-beta.1.2.0/aurelia-logging-console.js" />
/// <reference path="jspm_packages/npm/aurelia-metadata@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-metadata@1.0.0-beta.1.2.0/aurelia-metadata.js" />
/// <reference path="jspm_packages/npm/aurelia-pal@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-pal@1.0.0-beta.1.2.0/aurelia-pal.js" />
/// <reference path="jspm_packages/npm/aurelia-pal-browser@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-pal-browser@1.0.0-beta.1.2.0/aurelia-pal-browser.js" />
/// <reference path="jspm_packages/npm/aurelia-path@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-path@1.0.0-beta.1.2.0/aurelia-path.js" />
/// <reference path="jspm_packages/npm/aurelia-polyfills@1.0.0-beta.1.1.0.js" />
/// <reference path="jspm_packages/npm/aurelia-polyfills@1.0.0-beta.1.1.0/aurelia-polyfills.js" />
/// <reference path="jspm_packages/npm/aurelia-router@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-router@1.0.0-beta.1.2.0/aurelia-router.js" />
/// <reference path="jspm_packages/npm/aurelia-route-recognizer@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-route-recognizer@1.0.0-beta.1.2.0/aurelia-route-recognizer.js" />
/// <reference path="jspm_packages/npm/aurelia-task-queue@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-task-queue@1.0.0-beta.1.2.0/aurelia-task-queue.js" />
/// <reference path="jspm_packages/npm/aurelia-templating@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-templating@1.0.0-beta.1.2.0/aurelia-templating.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-binding@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-binding@1.0.0-beta.1.2.0/aurelia-templating-binding.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/abstract-repeater.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/analyze-view-factory.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/array-repeat-strategy.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/aurelia-templating-resources.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/binding-mode-behaviors.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/binding-signaler.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/compile-spy.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/compose.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/css-resource.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/debounce-binding-behavior.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/dynamic-element.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/focus.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/hide.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/html-sanitizer.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/if.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/map-repeat-strategy.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/null-repeat-strategy.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/number-repeat-strategy.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/repeat.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/repeat-strategy-locator.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/repeat-utilities.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/replaceable.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/sanitize-html.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/set-repeat-strategy.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/show.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/signal-binding-behavior.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/throttle-binding-behavior.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/update-trigger-binding-behavior.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/view-spy.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-resources@1.0.0-beta.1.2.0/with.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-router@1.0.0-beta.1.2.0.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-router@1.0.0-beta.1.2.0/aurelia-templating-router.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-router@1.0.0-beta.1.2.0/route-href.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-router@1.0.0-beta.1.2.0/route-loader.js" />
/// <reference path="jspm_packages/npm/aurelia-templating-router@1.0.0-beta.1.2.0/router-view.js" />
/// <reference path="jspm_packages/npm/font-awesome@4.5.0.js" />
/// <reference path="jspm_packages/npm/util@0.10.3/test/browser/inspect.js" />
/// <reference path="jspm_packages/npm/util@0.10.3/test/browser/is.js" />
/// <reference path="jspm_packages/npm/util@0.10.3/test/node/debug.js" />
/// <reference path="jspm_packages/npm/util@0.10.3/test/node/format.js" />
/// <reference path="jspm_packages/npm/util@0.10.3/test/node/inspect.js" />
/// <reference path="jspm_packages/npm/util@0.10.3/test/node/log.js" />
/// <reference path="jspm_packages/npm/util@0.10.3/test/node/util.js" />
/// <reference path="jspm_packages/system.js" />
/// <reference path="jspm_packages/system.src.js" />
/// <reference path="jspm_packages/system-csp-production.js" />
/// <reference path="jspm_packages/system-csp-production.src.js" />
/// <reference path="jspm_packages/system-polyfills.js" />
/// <reference path="jspm_packages/system-polyfills.src.js" />
/// <reference path="lib/bootstrap/dist/js/bootstrap.js" />
/// <reference path="lib/jquery/dist/jquery.js" />
/// <reference path="lib/jquery-validation/dist/jquery.validate.js" />
/// <reference path="lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.js" />
