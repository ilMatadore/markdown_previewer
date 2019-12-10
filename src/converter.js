import marked from 'marked';

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  const link = marked.Renderer.prototype.link.call(this, href, title, text);
  return link.replace("<a","<a target='_blank' ");
};

marked.setOptions({
  breaks: true,
  renderer: renderer,
  sanitize: true,
  gfm: true
});