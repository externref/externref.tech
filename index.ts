import express, { Request, Response } from 'express';

const app = express();

function redirect(url: string) {
	const redirector = (_: Request, res: Response) => {
		res.redirect(url);
	};
	return redirector;
}

app.get("/", redirect("https://externref.tech"))
app.get('/github', redirect('https://github.com/externref'));
app.get('/linkedin', redirect('https://linkedin.com/in/externref'));
app.get('/instagram', redirect('https://instagram.com/_sarthak.sh'));
app.get('/discord', redirect('https://discord.com/users/1134016724132446208'));
app.get('/wakatime', redirect('https://wakatime.com/@externref'));
app.get("/codewars", redirect("https://www.codewars.com/users/externref"))
app.get("/freenitro", redirect("https://www.youtube.com/watch?v=xvFZjo5PgG0"))

app.listen(process.env.PORT || 6969);
