import Router, {HTTP_METHODS} from '../lib/Router.js';
import send from '../lib/send.js';

const router = new Router();

router.get('/', (_req, res) => {
  send(res, {message: 'root route'}, 'json');
});

router.add(HTTP_METHODS.GET, '/node', (_req, res) => {
  send(res, {message: 'js'}, 'json');
});

router.get('/get', (_req, res) => {
  send(res, {message: 'GET method test'}, 'json');
});


router.post('/post', (_req, res) => {
  send(res, {message: 'POST method test'}, 'json');
});


export default router;
