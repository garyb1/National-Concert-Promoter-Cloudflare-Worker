import template from './template';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond with hello worker text
 * @param {Request} request
 */

async function handleRequest(request) {
  return new Response(template(request.cf), {
    headers: { 'content-type': 'text/html' },
  })
}
