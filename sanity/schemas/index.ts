import page from './page-schemas';
import project from './project-schema';
import review from './review-schema';
import user from './user-schema';
import modules from './modules/modules';
import headerModule from './modules/header-module-schema';
import footerModule from './modules/footer-module-schema';
import siteSettings from './settings/site-settings';
import siteColors from './settings/site-colors';

const schemas = [siteColors, siteSettings, headerModule, footerModule, user, review, project, page];

export default schemas;