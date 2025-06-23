// src/index.js

export default {
  /**
   * This is the main function that runs when your site receives a request.
   *
   * @param {Request} request - The incoming HTTP request.
   * @param {object} env - Contains your bindings, like the one for static assets.
   * @param {ExecutionContext} ctx - The execution context.
   * @returns {Promise<Response>} A promise that resolves with the response.
   */
  async fetch(request, env, ctx) {
    // This single line tells the Worker to take the incoming request
    // and try to find a matching file in the static assets you uploaded.
    // 'env.ASSETS' is automatically linked to the 'bucket' directory
    // you defined in wrangler.toml (your './public' directory).
    return env.ASSETS.fetch(request);
  },
};
