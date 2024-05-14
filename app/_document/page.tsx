/* "use client";
import * as React from "react";
import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
// #endregion Global Imports

const keywords = [
    "San",
    "Raj",
    "San Raj",
    "Sanraaj",
    "San Raj Software",
    "San raj Software solutions",
    "Software Solution",
];

class WebAppDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        // @ts-ignore
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="en-us">
                <Head>
                    <meta
                        name="msapplication-TileImage"
                        content="/ms-icon-144x144.png"
                    />
                    <meta name="theme-color" content="#ffffff" />
                    <title>San Raj Software Solutions</title>
                    <meta
                        name="description"
                        content="San Raj is a Software Development company providing technical solutions to business/individuals to transform their full of emotion ventures in to a digital reality."
                    />
                    <meta name="keywords" content={keywords.join(", ")} />
                    <meta name="author" content="San Raj" />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:image"
                        content="http://sanraaj.com/images/logo.png"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default WebAppDocument;
 */
