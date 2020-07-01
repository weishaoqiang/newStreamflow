import loginRouters from './user'
import operationRouters from './operation'

const routes = [
  ...loginRouters,
  ...operationRouters
]

export default routes