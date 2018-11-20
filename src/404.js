function notFound(lang = 'ru') {
    const contentRu = {
        title: "404: Страница не найдена",
        header: "Ошибка 404: Данной страницы не существует.",
        linkText: "Вернуться на главную",
        homepage: '/'
    };
    const contentEn = {
        title: "404: Page not found",
        header: "404: Sorry, page not found.",
        linkText: "Go back to homepage",
        homepage: '/en/'
        
    };

    const { title, header, linkText} = (lang == 'ru') ? contentRu : contentEn;
    const page = `<!DOCTYPE html>
        <html lang="${lang}">
            <head>
                <meta charset="utf-8">
                <title> ${title} </title>
            </head>
            <body>
                <div class="content">
                    <h1>${header}</h1>
                    <a href="${homepage}" class="backLink">${linkText}</a>
                </div>
            </body>
        </html>
    `;
        
    return page;
}

module.exports = notFound;