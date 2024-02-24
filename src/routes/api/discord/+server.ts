import type { RequestHandler } from './$types';
import { DiscordHandler } from '$lib';

interface RequestData {
	name: string;
	subject: string;
	message: string;
}

export const POST: RequestHandler = async ({ request }) => {
	const data: RequestData = await request.json();
	let handler = new DiscordHandler(data.name, data.subject, data.message);
	handler.sendMessage();
};
