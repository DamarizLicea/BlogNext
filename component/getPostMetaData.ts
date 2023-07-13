import matter from 'gray-matter';
import { PostMetadata } from '@/component/postMetaData';
import fs from 'fs';
const getPostMetaData = (): PostMetadata[] => {
    const folder ="posts/"
    const files = fs.readdirSync(folder);
    const markdownFiles = files.filter(file => file.endsWith(".md"));
    const posts= markdownFiles.map(fileName => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
      const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      slug: fileName.replace(".md", ""),
    };
    });
    return posts;
  };

  export default getPostMetaData;