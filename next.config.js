
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['7rMHiFxZs8Y8GitbFGRxu3'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  