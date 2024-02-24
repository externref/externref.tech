import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export class DiscordHandler {
	author: string;
	message: string;
	subject: string;

	constructor(author: string, subject: string, message: string) {
		this.author = author;
		this.message = message;
		this.subject = subject;
	}

	sendMessage() {
		axios.post(
			'https://discord.com/api/v10/channels/1210701513039679560/messages',
			{
				embeds: [
					{
						title: this.subject,
						description: this.message,
						author: {
							name: this.author
						}
					}
				]
			},
			{
				headers: {
					Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`
				}
			}
		);
	}
}
