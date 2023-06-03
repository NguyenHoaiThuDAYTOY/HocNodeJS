import express from "express";
import homeController from "../controller/homeController";

let router = express.Router()

const initWebRouter = (app) => {
    router.get('/', homeController.getHomepage)
    router.get('/detail/user/:id', homeController.getDetailPage)
    router.post('/create-user', homeController.createUser)
    router.post('/delete-user', homeController.deleteUser)
    router.get('/form-update-user/:id', homeController.getUpdatePage)
    router.post('/update-user', homeController.updateUser)
    return app.use('/', router)
}

export default initWebRouter