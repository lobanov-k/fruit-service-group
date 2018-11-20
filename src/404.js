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

    const { title, header, linkText, homepage} = (lang == 'ru') ? contentRu : contentEn;
    const page = `<!DOCTYPE html>
        <html lang="${lang}">
            <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <style>
                    body {
                        background-color: #fff;
                        text-align: center;
                        font-family: "Roboto", "Lucida Grande", Arial, Helvetica, sans-serif;
                    }
                    .logo {
                        display: block;
                        margin: 30px auto;
                    }
                    .logo img {
                        height: 50px;
                        width: auto;
                    }
                    h1 {
                        font-size: 36px;
                        line-height: 1;
                        font-weight: bold;
                        color: #000;
                        margin-bottom: 20px;
                    }
                    .backLink {
                        color: #467035;
                    }
                    .content {
                        padding-top: 50px;
                    }
                </style>
            </head>
            <body>
                <div class="content">
                    <a href="${homepage}" class="logo">
                        <img src="images/fruit-service-group-logo-min.png" alt="Fruit Service Group"/>
                    </a>
                    <h1>${header}</h1>
                    <a href="${homepage}" class="backLink">${linkText}</a>
                </div>
            </body>
        </html>
    `;
        
    return page;
}

module.exports = notFound;