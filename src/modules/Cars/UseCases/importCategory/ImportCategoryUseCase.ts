import fs from "fs";
import { parse, Parser } from "csv-parse";


class ImportCategoryUseCase {
    execute(file: Express.Multer.File): void {

        const stream = fs.createReadStream(file.path);
        const parseFile = new Parser({ delimiter: ',' });

        stream.pipe(parseFile);

        parseFile.on("data", async (line) => {
            console.log(line);
        });
    }
}

export { ImportCategoryUseCase }