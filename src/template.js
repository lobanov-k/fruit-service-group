function template(seo, initialState = {}, content = ""){
    const {title, description, keyWords} = seo;
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
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title> ${title} </title>
                <meta description="${description}" />
                <meta keywords="${keyWords}"/>
                <link type="text/css" rel="stylesheet" href="css/main.37ee3b5ebd9b3e0aca6b.css" />
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