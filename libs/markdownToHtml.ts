import fs from "fs-extra";
import hljs from "highlight.js";
import MarkdownIt from "markdown-it";

const markdown: MarkdownIt = MarkdownIt({
    html: true,
    highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return (
                    '<pre><code class="hljs">' +
                    hljs.highlight(str, {
                        language: lang,
                        ignoreIllegals: true
                    }).value +
                    "</code></pre>"
                );
            } catch (__) {}
        }
        return (
            '<pre><code class="hljs">' +
            markdown.utils.escapeHtml(str) +
            "</code></pre>"
        );
    }
});

const markdownToHtml = async (file: string) => {
    const filePath = process.cwd() + "/templates/" + file;
    const fileData = await fs.readFile(filePath, "utf8");

    const rendered = await markdown.render(fileData);

    const htmlFile = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="./default.css">
    </head>
    <body>
    ${rendered}
    </body>
    </html>`;

    return htmlFile;
};

export default markdownToHtml;
