import type {CollectionEntry} from "astro:content"

export const getPublishedAndSortedPosts = (
    allPosts: CollectionEntry<"blog">[],
) => {
    return allPosts
        .filter(post => {
            return import.meta.env.PROD ? post.data.draft !== true : true
        })
        .sort(
            (post1, post2) =>
                post1.data.publishedDate.valueOf() -
                post2.data.publishedDate.valueOf(),
        )
}
