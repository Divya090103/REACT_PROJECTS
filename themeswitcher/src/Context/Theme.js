import React from 'react'
const Theme=React.createContext({
  Thememode:'light',
  Themedark:()=>{},
  Themelight:()=>{}
});
export default Theme;
