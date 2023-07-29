import { franc } from "franc";
import langs from "langs";

// const langCode = (franc('Alle menslike wesens word vry'));
const input = process.argv[2];
const langCode = franc(input);

if (langCode === 'und') {
    console.log("SORRy");
}
else {
    const language = langs.where("3", langCode);
    console.log(language.name);
}