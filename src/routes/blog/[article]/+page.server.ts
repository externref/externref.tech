import { readFile } from 'node:fs/promises';
// @ts-ignore
export async function load({ params }): Promise<{ content: string }> {
	let articles = ['test_blog'];
	let content = await readFile(
		`static/blog/${articles.includes(params.article) ? params.article : '404'}.md`
	);
	console.log(content.toString());
	return {
		content: content.toString()
	};
}
