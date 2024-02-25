import { DiscordHandler } from '$lib';
interface RequestData extends FormData {
	name: string;
	subject: string;
	message: string;
}

export const actions = {
	// @ts-ignore
	default: async ({ request }) => {
		// @ts-ignore
		const data: RequestData = await request.formData();
		// @ts-ignore
		let handler = new DiscordHandler(data.get('name'), data.get('subject'), data.get('message'));
		handler.sendMessage();
	}
};
