import type { RequestHandler } from './$types';
import { DiscordHandler } from '$lib';
import { json } from '@sveltejs/kit';

interface RequestData {
	name: string;
	subject: string;
	message: string;
}

export const POST: RequestHandler = async ({ request }) => {
	const data: RequestData = await request.json();
	let handler = new DiscordHandler(data.name, data.subject, data.message);
	handler.sendMessage();
	return json(
		{},
		{
			headers: {
				'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': '*'
			}
		}
	);
};
