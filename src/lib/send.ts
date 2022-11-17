import { ServerResponse } from 'http';

import libxmljs from 'libxmljs';

const formatResponse: {
	[key in string]: (data: any) => {
		formattedData: any;
		contentType: string;
	};
} = {
	json: (data: string) => ({
		formattedData: JSON.stringify(data),
		contentType: 'application/json',
	}),
	xml: (data: string) => ({
		formattedData: libxmljs.parseXmlString(data).toString(),
		contentType: 'application/xml',
	}),
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
}
