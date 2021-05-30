import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
    }
    
    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
    
    body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        font-size: 16px;
        background-color: #fafafa;
        margin: 0;
        padding: 0;
    }
    
    menu,
    ul {
        margin: 0;
        padding: 0;
    }
`

export { GlobalStyles }
