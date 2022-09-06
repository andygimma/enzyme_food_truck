import { createGlobalStyle } from "styled-components";
import "@fontsource/cormorant-garamond";

export default createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       outline:0;
       box-sizing: border-box;
       font-family: "Cormorant Garamond";
       font-size: 24px;
   }
    #root{
       margin:0 auto;
   }
   `;

export const SMALL_DISPLAY = "768px";
