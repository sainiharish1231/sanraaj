const nextRoutes = require("next-routes");

const routes = (module.exports = nextRoutes());

routes.add("home", "/");
routes.add("/process", "/process/index");
routes.add("/technologies", "/technologies/index");
routes.add("/overview", "/overview/index");
routes.add("/services", "/services/index");
routes.add("/contact", "/contact/index");
routes.add("/privacy", "/privacy/index");
routes.add("/career", "/career/index");
routes.add("/apply-now", "/apply-now/index");
routes.add("/blog", "/blog/index");
routes.add("/times-news", "/times-news/index");
routes.add("/times-news/privacy", "/times-news/privacy");

export default routes;
