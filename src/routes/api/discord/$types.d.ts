export type RequestHandler<
	Params extends Partial<Record<string, string>> = Partial<Record<string, string>>,
	RouteId extends string | null = string | null
> = (event: RequestEvent<Params, RouteId>) => MaybePromise<Response>;
