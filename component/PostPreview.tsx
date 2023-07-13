import Link from "next/link";
import {PostMetadata} from "./postMetaData"
import "../app/globals.css"

const PostPreview =(props: PostMetadata) => {
    return <div className="border-t border-slate-600 p-4 text-center rounded-md shadow-md">
            <Link href={`/posts/${props.slug}`}>
            <h2 className="font-bold text-red-500 hover:underline">{props.slug}</h2>
            </Link>
        </div>
};

export default PostPreview;