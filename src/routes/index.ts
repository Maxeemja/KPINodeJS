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

router.get('/get/xml', (_req, res) => {
	send(
		res,
		'<note>\n' +
			'<to>Tove</to>\n' +
			'<from>Jani</from>\n' +
			'<heading>Reminder</heading>\n' +
			"<body>Don't forget me this weekend!</body>\n" +
			'</note>',
		'xml',
	);
});

router.post('/post', (_req, res) => {
	send(res, { message: 'POST method test' }, 'json');
});

router.post('/post/xml', (_req, res) => {
	_req.on('data', (data) => {
		send(res, data, 'xml');
	});
});

export default router;
