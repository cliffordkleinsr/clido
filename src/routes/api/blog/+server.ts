import type { RequestHandler } from './$types';
// import { Glob } from "bun";

const getPosts = async () => {
    let blogs: never[] = []

//    const paths =  new Glob('*.md')
   
//    for await (const path of paths.scan('/src/blog')) {
//         blogs.push(path)
//    }
//    console.log(blogs)
   return blogs
}

export const GET: RequestHandler = async () => {
    const posts = await getPosts()
    return new Response(JSON.stringify(posts), {status: 200});
};