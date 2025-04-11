export default `<!doctype html>
<html lang="en" style="scroll-behavior: smooth;" data-beasties-container="">

<head>
    <meta charset="utf-8">
    <title>Bharath Nagesh - Full Stack Developer</title>
    <base href="/bharath-nagesh.github.io/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Bharath Nagesh - Full Stack Developer specializing in Angular, Node.js, and D3.js">

    <!-- Enhanced favicon settings with extreme zoom focus -->
    <link rel="icon" type="image/jpeg" href="assets/images/favicon.jpeg#zoomed" sizes="any">
    <link rel="icon" type="image/jpeg" href="assets/images/favicon.jpeg#zoomed" sizes="32x32">
    <link rel="icon" type="image/jpeg" href="assets/images/favicon.jpeg#zoomed" sizes="48x48">
    <link rel="icon" type="image/jpeg" href="assets/images/favicon.jpeg#zoomed" sizes="96x96">
    <link rel="icon" type="image/jpeg" href="assets/images/favicon.jpeg#zoomed" sizes="144x144">

    <!-- Apple Touch Icon with zoom -->
    <link rel="apple-touch-icon" href="assets/images/favicon.jpeg#zoomed">
    <link rel="apple-touch-icon" sizes="152x152" href="assets/images/favicon.jpeg#zoomed">
    <link rel="apple-touch-icon" sizes="180x180" href="assets/images/favicon.jpeg#zoomed">
    <link rel="apple-touch-icon" sizes="192x192" href="assets/images/favicon.jpeg#zoomed">

    <!-- Microsoft Tile Icon -->
    <meta name="msapplication-TileImage" content="assets/images/favicon.jpeg#zoomed">
    <meta name="msapplication-TileColor" content="#0077FF">

    <!-- Open Graph / Social Media preview image -->
    <meta property="og:image" content="assets/images/favicon.jpeg#zoomed">
    <meta property="og:image:width" content="192">
    <meta property="og:image:height" content="192">

    <!-- Advanced favicon zooming script -->
    <script src="assets/js/favicon-zoom.js"></script>

    <!-- Quicksand Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <style>@font-face{font-family:'Quicksand';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format('woff2');unicode-range:U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+0300-0301, U+0303-0304, U+0308-0309, U+0323, U+0329, U+1EA0-1EF9, U+20AB;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format('woff2');unicode-range:U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF;}@font-face{font-family:'Quicksand';font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format('woff2');unicode-range:U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;}</style>

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

    <script>
        (function() {
            const redirect = sessionStorage.redirect;
            delete sessionStorage.redirect;
            if (redirect && redirect !== location.href) {
                history.replaceState(null, null, redirect);
            }
        })();

        document.addEventListener('DOMContentLoaded', function () {
            const links = document.querySelectorAll('a[href^="#"]');

            links.forEach(link => {
                link.addEventListener('click', function (e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        const headerHeight = 70;

                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.scrollY - headerHeight;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });

        document.addEventListener('DOMContentLoaded', function () {
            const faviconLinks = document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"]');

            faviconLinks.forEach(link => {
                const currentHref = link.getAttribute('href');
                if (currentHref.includes('favicon.jpeg')) {
                    link.setAttribute('href', currentHref);
                }
            });
        });
    </script>
<style>@font-face{font-family:Quicksand;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Quicksand;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:300;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:400;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Quicksand;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Quicksand;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Quicksand;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Quicksand;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}@font-face{font-family:Quicksand;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJFQNcOM.woff2) format("woff2");unicode-range:U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB}@font-face{font-family:Quicksand;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hJVQNcOM.woff2) format("woff2");unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF}@font-face{font-family:Quicksand;font-style:normal;font-weight:700;font-display:swap;src:url(https://fonts.gstatic.com/s/quicksand/v36/6xKtdSZaM9iE8KbpRA_hK1QN.woff2) format("woff2");unicode-range:U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}html,body{height:100%}html{scroll-behavior:smooth;scroll-padding-top:80px}body{font-family:var(--font-family);font-size:16px;line-height:1.6;color:#333;background-color:#fff;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}:root{--bg-color:#fff;--bg-secondary:#f9f9f9;--text-color:#333;--text-secondary:#555;--primary-color:#0077FF;--primary-hover:#0055CC;--border-color:#eee;--card-bg:#fff;--header-bg:rgba(255, 255, 255, .98);--shadow-color:rgba(0, 0, 0, .05);--font-family:"Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif}body{background-color:var(--bg-color);color:var(--text-color)}body{transition:background-color .3s ease,color .3s ease,border-color .3s ease,box-shadow .3s ease}@media screen{head link[rel=icon][type="image/jpeg"],head link[rel=apple-touch-icon]{object-fit:cover!important;object-position:center!important;transform-origin:center!important;transform:scale(2.5)!important}}</style><link rel="stylesheet" href="styles-GLFUI4XR.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-GLFUI4XR.css"></noscript></head>

<body ngcm="">
    <app-root></app-root>
<script src="polyfills-FFHMD2TL.js" type="module"></script><script src="main-J4DOFAYI.js" type="module"></script></body>

</html>
`;