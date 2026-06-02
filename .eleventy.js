const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function (eleventyConfig) {
  // Statické soubory
  eleventyConfig.addPassthroughCopy({ "src/static": "static" });
  eleventyConfig.addPassthroughCopy({
    "src/admin/config.yml": "admin/config.yml",
  });
  eleventyConfig.addPassthroughCopy({ "src/admin/admin.js": "admin/admin.js" });

  eleventyConfig.addGlobalData("now", () => new Date());

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

  eleventyConfig.addFilter("markdown", (content) => {
    if (!content) return "";
    const md = require("markdown-it")({ html: true });
    const rendered = md.render(content);
    return rendered
      .replace(
        /::icon-heart::/g,
        `<img src="/static/images/svg/icon--heart.svg" alt="srdce">`,
      )
      .replace(
        /::icon-money::/g,
        `<img src="/static/images/svg/icon--money-bag.svg" alt="pytel s penězi">`,
      );
  });

  // Filtry pro práci s datem
  eleventyConfig.addFilter("date", (date) => {
    return new Date(date).toLocaleDateString("cs-CZ", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  });

  eleventyConfig.addFilter("year", (date) => {
    return new Date(date).toLocaleDateString("cs-CZ", { year: "numeric" });
  });

  eleventyConfig.addFilter("month", (date) => {
    return new Date(date).toLocaleDateString("cs-CZ", { month: "long" });
  });

  eleventyConfig.addFilter("day", (date) => {
    return new Date(date).toLocaleDateString("cs-CZ", { day: "2-digit" });
  });

  eleventyConfig.addFilter("youtubeId", (url) => {
    const match = url.match(/(?:v=|youtu\.be\/)([^&?/]+)/);
    return match ? match[1] : url;
  });

  eleventyConfig.addFilter("monthshort", (date) => {
    return (longMonth = new Date(date)
      .toLocaleDateString("cs-CZ", { month: "short" })
      .toUpperCase()
      .replace(/\./g, ""));
  });
  eleventyConfig.addFilter("daynodot", (date) => {
    return new Date(date)
      .toLocaleDateString("cs-CZ", { day: "2-digit" })
      .replace(/\./g, "");
  });

  eleventyConfig.addCollection("upcoming_events", function (collectionApi) {
    const now = new Date();
    return collectionApi
      .getFilteredByTag("upcoming_events")
      .filter((item) => new Date(item.data.datetime) >= now)
      .sort((a, b) => new Date(a.data.datetime) - new Date(b.data.datetime));
  });

  // Sitemap plugin
  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: "https://lezci.com",
    },
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
  };
};
