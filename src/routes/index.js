
/* eslint-disable global-require */

// The top-level (parent) route
export default {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    require('./home').default,
    require('./contact').default,
    require('./login').default,
    require('./register').default,
    require('./about').default,
    require('./privacy').default,
    require('./admin').default,
    require('./preorder').default,
    require('./docs').default,
    require('./software').default,
    require('./hardware').default,
    require('./y-axis-assembly').default,
    require('./x-axis-assembly').default,
    require('./z-axis-assembly').default,
    require('./extruder-assembly').default,
    require('./lcd-assembly').default,
    require('./heatbed-assembly').default,
    require('./electronics-assembly').default,
    require('./credits').default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    require('./notFound').default,
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'}`;
    route.description = route.description || '';

    return route;
  },

};
