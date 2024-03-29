import fs from "fs";
import { parse, Parser } from "csv-parse";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
import { inject, injectable } from "tsyringe";


interface IImportCategory {
    name: string;
    description: string;
}

@injectable()
class ImportCategoryUseCase {

    constructor(@inject("CategoriesRepository") private categoriesRepository: ICategoriesRepository) { }

    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {

        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const categories: IImportCategory[] = [];
            const parseFile = new Parser({ delimiter: ',' });

            stream.pipe(parseFile);

            parseFile.on("data", async (line) => {
                const [name, description] = line;

                categories.push({
                    name,
                    description
                });
            }).on('end', () => {
                fs.promises.unlink(file.path);
                resolve(categories)
            }).on("error", (error) => {
                reject(error);
            });


        });

    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        categories.map(async ({ name, description }) => {
            const existsCategory = await this.categoriesRepository.findByName(name);

            if (!existsCategory) {
                await this.categoriesRepository.create({ name, description });
            }

        });
    }
}

export { ImportCategoryUseCase }