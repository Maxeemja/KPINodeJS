import { HttpMethodEnum } from '../lib/http-method.enum.js';
import Router from '../lib/router.js';
import send from '../lib/send.js';

const router = new Router();

router.get('/', (_req, res) => {
	send(res, { message: 'root route' }, 'json');
});

router.add(HttpMethodEnum.GET, '/node', (_req, res) => {
	send(res, { message: 'js' }, 'json');
});

router.get('/get', (_req, res) => {
	send(res, { message: 'GET method test' }, 'json');
});

router.post('/post', (_req, res) => {
	send(res, { message: 'POST method test' }, 'json');
});

router.post('/post/xml', (_req, res) => {
	_req.on('data', function (data) {
		send(res, data, 'xml');
	});
});

export default router;
