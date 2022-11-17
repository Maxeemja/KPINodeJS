import { ServerResponse } from 'http';

// TODO: make more acceptable data formats
const formatResponse = {
	json: (data: any): any => ({
		formattedData: JSON.stringify(data),
		contentType: 'application/json',
	}),
	// xml: 'application/xml',
	// formdata: 'multipart/form-data',
};

export default function send(
	res: ServerResponse,
	data: any,
	type: keyof typeof formatResponse = 'json',
	statusCode = 200,
): void {
	if (!(type in formatResponse)) {
		// throw new Error(`Unsupported response type: ${type}`);
		console.log(`Unsupported response type: ${type}`);
		res.writeHead(500);
		return;
	}

	const { formattedData, contentType } = formatResponse[type](data);

	res.setHeader('Content-Type', contentType);

	res.writeHead(statusCode);

	res.write(formattedData);

	res.end();

	// eslint-disable-next-line no-useless-return
	return;
}
