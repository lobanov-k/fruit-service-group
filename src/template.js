function template(seo, initialState = {initialLang: 'en'}, content = "") {
    const {title, description, keyWords} = seo[initialState.initialLang];
    let scripts = '';
    if(content){
        scripts = ` <script>
            window.__STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="js/client.js"></script>
        `;
    } else {
        scripts = ` <script src="js/bundle.js"> </script> `
    }
    let page = `<!DOCTYPE html>
        <html lang="${initialState.initialLang}">
            <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <meta description="${description}" />
                <meta keywords="${keyWords}"/>
                <link type="text/css" rel="stylesheet" href="css/bundle.css" />
            </head>
            <body>
                <div class="content">
                    <div id="app" class="wrap-inner">
                        <!--- magic happens here -->  ${content}
                    </div>
                </div>
                ${scripts}
            </body>
        </html>
    `;

    return page;
}

module.exports = template;