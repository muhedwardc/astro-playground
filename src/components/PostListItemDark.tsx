interface Post {
    id: number;
    title: string;
    body: string;
}


const PostListItemDark = ({ id, title, body }: Post) => {
    return (
        <li class="
            mt-6
            w-full
            list-none
            p-[0.15rem]
            flex
            bg-slate-800
            rounded-[0.5rem]
            text-white
            shadow-lg
            border-2
            hover:border-accent
            hover:bg-gradient-to-r
            hover:from-slate-800
            hover:to-slate-600
        "
        >
            <a href={`/post/${id}`} class="no-underline leading-[1.4] px-[1.3rem] py-[1rem] opacity-80">
                <h2 class="font-bold m-0 text-md">{ title }</h2>
                <p class="mt-2 mb-0 text-white">{ body }</p>
            </a>
        </li>
    )
}

export default PostListItemDark;