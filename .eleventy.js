const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
// Statické soubory
  eleventyConfig.addPassthroughCopy({ "src/static": "static" });
  
  // TENTO ŘÁDEK CHYBÍ - kopíruje config pro CMS do složky admin
  eleventyConfig.addPassthroughCopy({ "src/admin/config.yml": "admin/config.yml" });
  
  // Pokud máš v src/admin i nějaký admin.js, přidej i ten:
  eleventyConfig.addPassthroughCopy({ "src/admin/admin.js": "admin/admin.js" });

  // Kolekce
  eleventyConfig.addCollection("years", collectionApi => {
    return collectionApi
      .getFilteredByGlob("src/years/*.md")
      .sort((a, b) => b.data.year - a.data.year);
  });

  // Filtr na URL
  eleventyConfig.addFilter("url", (value) => {
    if (!/^https?:\/\//i.test(value)) {
      return "https://" + value;
    }
    return value;
  });

  // Filtr na YouTube embed
  eleventyConfig.addFilter("youtubeEmbed", (url) => {
    const match = url.match(/v=([a-zA-Z0-9_-]+)/);
    if (match) return `https://www.youtube.com/embed/${match[1]}`;
    return url;
  });

  const md = require("markdown-it")();
  eleventyConfig.addFilter("markdown", (content) => 
    md.render(content ?? "")
);

eleventyConfig.addFilter("date", (date) => {
  return new Date(date).toLocaleDateString("cs-CZ", {
    day: "2-digit",
    month: "2-digit", 
    year: "numeric"
  });
});
  // Sitemap plugin
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://harcovskybloudil.cz"
    }
  });

  return {
    dir: {
      input: "src",
      output: "_site"
    },
    htmlTemplateEngine: "njk"
  };
};