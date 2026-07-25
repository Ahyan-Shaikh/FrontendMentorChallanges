import { css } from "@linaria/core";

export const globals = css`
  :global() {
    html, body {
      box-sizing: border-box;
    }
    *, 
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }  
    #root {
      height: 100vh;
    }

  }
`