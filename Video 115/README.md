# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh







# Steps to folow before using Router
- npm i react-router-dom 
- better to restart the server
- import createBrowserRouter from react-router-dom
- create a variable for router(by createBrowserRouter whih takes array as parametrs which has objects)
- import routerprovider
- import link ( instead of a tag use link    &&    instrad of hreaf use to) but in runtime after transformation this changes to anchor tag only
- instead use NavLink so that we can add clases for it