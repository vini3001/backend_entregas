import Router from 'express'
import { confirmAuthenticateClient } from './middlewares/confirmAuthenticateClient'
import { confirmAuthenticateDeliveryMan } from './middlewares/confirmAuthenticateDeliveryMan'
import { AuthenticateClientController } from './models/account/authenticateClient/authenticateClientController'
import { AuthenticateDeliveryManController } from './models/account/authenticateDeliveryMan/authenticateDeliveryManController'
import { CreateClientController } from './models/clients/useCase/createClient/createClientController'
import { FindAllDeliveriesController } from './models/clients/useCase/deliveries/findAllDeliveriesController'
import { UpdateDeliveryManController } from './models/deliveries/updateDeliveryMan/updateDeliveryManController'
import { UpdateEndAtController } from './models/deliveries/updateEndDate/updateEndDateController'
import { CreateDeliveriesController } from './models/deliveries/useCases/createDelivery/createDeliveriesController'
import { findAllWithoutEndAtController } from './models/deliveries/useCases/findAllWithoutEndAt/findAllWithoutEndAtController'
import { CreateDeliveryManController } from './models/deliveryMan/useCase/createDeliveryMan/createDeliveryManController'
import { FindAllDeliveriesDeliverymanController } from './models/deliveryMan/useCase/deliveries/findAllDeliveriesDeliverymanController'

const routes = Router()
//client
const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
//delivery man
const createDeliveryManController = new CreateDeliveryManController()
const authenticateDeliveryManController = new AuthenticateDeliveryManController()
const updateDeliveryManController = new UpdateDeliveryManController()
//deliveries resolvido
const createDeliveriesController = new CreateDeliveriesController()
const findallDeliveriesWithoutEndAt = new findAllWithoutEndAtController()
const findAllDeliveriesClient = new FindAllDeliveriesController()
const findAllDeliveriesDeliveryman = new FindAllDeliveriesDeliverymanController()
const updateDeliveries = new UpdateEndAtController()

routes.post("/client/", createClientController.handle) //cria o usuário do cliente
routes.post("/client/authenticate", authenticateClientController.handle) //autentica o usuário do cliente
routes.get("/client/deliveries", findAllDeliveriesClient.handle)

routes.post("/deliveryman", createDeliveryManController.handle) // cria o usuário do entregador
routes.post("/deliveryman/authenticate", authenticateDeliveryManController.handle) //autentica o usuário do entregador
routes.get("/deliveryman/deliveries", confirmAuthenticateDeliveryMan, findAllDeliveriesDeliveryman.handle)
routes.put("/deliveries/updateDeliveries/:id", confirmAuthenticateDeliveryMan, updateDeliveries.handle)

routes.post("/delivery/", confirmAuthenticateClient, createDeliveriesController.handle) //registra o pedido do usuário para o entregador
routes.get("/delivery/available", confirmAuthenticateDeliveryMan, findallDeliveriesWithoutEndAt.handle) // lista todos os pedidos dos clientes
routes.put("/deliveries/updateDeliveryMan/:id", confirmAuthenticateDeliveryMan, updateDeliveryManController.handle)

export { routes }