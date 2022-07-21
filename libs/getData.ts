import fsPromises from "fs/promises";
import path from "path";

const getData = async (filename: string, slug: string): Promise<any> => {
    const filePath = path.join(
        process.cwd() + "/data/",
        filename + ".config.json"
    );

    const jsonData = await fsPromises.readFile(filePath, "utf8");
    const data = JSON.parse(jsonData);

    if (slug === "*") {
        return data;
    } else {
        return data[slug];
    }
};

const getAllSlugs = async (filename: string): Promise<string[]> => {
    const filePath = path.join(
        process.cwd() + "/data/",
        filename + ".config.json"
    );

    const jsonData = await fsPromises.readFile(filePath, "utf8");
    const keys = Object.keys(JSON.parse(jsonData));
    const paths: any = [];

    keys.map((key: string) => {
        paths.push({ params: { slug: key } });
    });

    return paths;
};

export { getData, getAllSlugs };
