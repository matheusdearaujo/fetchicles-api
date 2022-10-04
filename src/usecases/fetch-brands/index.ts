import { BrandsImplementation } from "@repositories/implementations/brands.implementation";
import { FetchBrandsService } from "./fetch-brands";
import { FetchBrandsController } from "./fetch-brands.controller";

const brandsRepository = new BrandsImplementation();

const fetchBrandsService = new FetchBrandsService(brandsRepository);

export const fetchBrandsController = new FetchBrandsController(
	fetchBrandsService,
);
