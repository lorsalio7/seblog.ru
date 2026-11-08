const pluginDate = require("eleventy-plugin-date");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require("eleventy-plugin-toc");

module.exports = function (eleventyConfig) {
  eleventyConfig.setLibrary(
    'nunjucks',
    markdownIt().use(markdownItAnchor)
  );
  eleventyConfig.addPlugin(pluginTOC);
  eleventyConfig.addPlugin(pluginDate);
  eleventyConfig.addPassthroughCopy("/sitemap.xml");
  eleventyConfig.addPassthroughCopy("css/");
  eleventyConfig.addPassthroughCopy(".htaccess");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("img/");
  eleventyConfig.addPassthroughCopy("fonts/");
  eleventyConfig.addPassthroughCopy("js/");
  eleventyConfig.addPassthroughCopy("images/");
  /* Фильтр для русской даты  */
  eleventyConfig.addFilter("ruDate", function(value) {
    return value.toLocaleString("ru", {
      year: "numeric",
      month: "short",
      day: "numeric"
    }).replace(" г.", "").replace(".", "");
  });
  /* Фильтр для sitemap даты  */
  eleventyConfig.addFilter("mapDate", function(value) {
    return value.toISOString().split('T')[0];
  });
 

  /* Обрезка контента для малых постов пример: 
  {{ post.content | strip_html | truncateWords(15) }} */
  eleventyConfig.addFilter("truncateWords", function(content, wordsCount) {
    // Разбиваем контент на слова и обрезаем до нужного количества
    const truncated = content.split(" ").slice(0, wordsCount).join(" ");
    // Убираем запятую в конце, если она есть
    return truncated.replace(/,\s*$/, '');
  });


  eleventyConfig.addCollection("postsByCategory", function(collection) {
    let postsByCategory = [];

    collection.getAll().forEach(post => {
      let category = post.data.category;

      if (!postsByCategory[category]) {
        postsByCategory[category] = [];
      }

      postsByCategory[category].push(post);
    });

    return postsByCategory;
  });
  
  /* 
  короткий код isHomePage, который принимает объект page (метаданные текущей страницы) и возвращает true, если page.url равен "/" (т.е. это главная страница), и false в противном случае.  
  Пример: 
  {% if isHomePage(page) %}
    <!-- Это главная страница -->
  {% else %}
    <!-- Это не главная страница -->
  {% endif %}
  !!! работает только для статических страниц у которых есть URL !!!
  */
  eleventyConfig.addFilter("isHomePage", function(page) {
    return page.url === "/";
  });

  eleventyConfig.addGlobalData("siteTitle", "Полезные программы, советы и лайфхаки для современных устройств")
  eleventyConfig.addGlobalData("siteName", "Seblog - гайды, сервисы, загрузки")
  eleventyConfig.addGlobalData("siteUrl", "http://seblog.ru")
  eleventyConfig.addGlobalData("siteDescription", "Наш сайт посвящен миру технологий и инноваций. Мы предлагаем информацию о компьютерах, смартфонах, загрузки и сервисы. Наши обзоры и лайфхаки помогут вам повысить эффективность работы и развлечься.")
  eleventyConfig.addGlobalData("aboutDescription", "Наш ресурс ориентирован на технологии и новшества. Мы предоставляем сведения о компьютерах и смартфонах, а также загрузках и сервисах. Наши обзоры и советы помогут вам улучшить продуктивность и получить удовольствие от использования технологий.")
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "includes",
      layouts: "layouts"
    },
    dataTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk"]
  }
}