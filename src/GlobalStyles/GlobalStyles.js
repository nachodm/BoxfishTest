import { createGlobalStyle} from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  .title { 
    color: ${({ theme }) => theme.color};
  }
  .wrapper{
    -webkit-filter: g ${({ theme }) => theme.filter};
    filter:  ${({ theme }) => theme.filter};
  }
  .Company-Name{
    -webkit-filter: g ${({ theme }) => theme.filter};
    filter:  ${({ theme }) => theme.filter};
  }
  .active {
    background-color: ${({ theme }) => theme.body};
    z-index: 1000;
  }
  
  button {
    background-color: transparent;
    color: ${({ theme }) => theme.color};
    border: 1px solid  ${({ theme }) => theme.toggleBorder};
  }`
