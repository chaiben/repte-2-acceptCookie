# Repte 2: Accept Cookie


## Description

Componente JS que crea un popup con la información sobre cookies

![Ejemplo](./assets/sample.jpg)


## Como utilizar

Archivos necesarios:

- `cookie-pop-up.js`
- `scss/cookie-pop-up.scss`

Añadir el siguiente código al archivo que quiera que aparezca la información sobre la cookie.

```
<cookie-pop-up></cookie-pop-up>
<script src="./cookie-pop-up.js"></script>
```

Caso quieras modificar los textos del popup o el link, basta utilizar los siguiente atributos.

- mainText
- description
- buttonText
- linkText
- linkURL
Ejemplo:
```
<cookie-pop-up
    mainText="We use cookies"
    description="This website uses cookies to better undestand your behavior on our website"
    buttonText="Got it!"
    linkText="More info"
    linkURL="https://its.uiowa.edu/support/article/719"
></cookie-pop-up>
<script src="./cookie-pop-up.js"></script>
```

Resultado

![Ejemplo 2](./assets/sample2.jpg)

## Articulos utilizados

1. [Create Your First Web Component with Vanilla JavaScript](https://medium.com/tunaiku-tech/create-your-first-web-component-with-vanilla-javascript-af93cbf3a70f)
1. [Web Components Using Vanilla JS](https://mellowdevs.medium.com/web-components-using-vanilla-js-f7af00834caa)
1. [Como utilizar cookies en JavaScript](https://cybmeta.com/cookies-en-javascript)


## Algunas metricas

[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=chaiben_repte-2-acceptCookie&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=chaiben_repte-2-acceptCookie)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=chaiben_repte-2-acceptCookie&metric=bugs)](https://sonarcloud.io/summary/new_code?id=chaiben_repte-2-acceptCookie)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=chaiben_repte-2-acceptCookie&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=chaiben_repte-2-acceptCookie)

[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=chaiben_repte-2-acceptCookie&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=chaiben_repte-2-acceptCookie)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=chaiben_repte-2-acceptCookie&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=chaiben_repte-2-acceptCookie)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=chaiben_repte-2-acceptCookie&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=chaiben_repte-2-acceptCookie)

[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=chaiben_repte-2-acceptCookie&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=chaiben_repte-2-acceptCookie)