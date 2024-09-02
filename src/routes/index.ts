import { Application } from 'express';
const userRuta = require('./user.route.ts');



export const apiRutas = (app:Application) => {
    app.use(userRuta);


}