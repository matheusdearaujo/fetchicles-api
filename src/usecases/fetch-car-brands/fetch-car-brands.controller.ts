import { Request, Response } from "express";
import { FetchCarBrandsService } from "./fetch-car-brands";

export class FetchCarBrandsController {
	constructor(private fetchCarBrandsService: FetchCarBrandsService) {}

	async handle(_: Request, response: Response): Promise<Response> {
		try {
			const data = await this.fetchCarBrandsService.execute();

			return response.status(200).send(data);
		} catch (error: any) {
			return response.status(500).json({
				message: error.message || "Unexpected error.",
			});
		}
	}
}
