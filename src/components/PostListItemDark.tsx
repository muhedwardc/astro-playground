interface Post {
    id: number;
    title: string;
    body: string;
    sub: string;
}


const PostListItemDark = ({ id, title, body, sub }: Post) => {
    return (
        <li class="
            mt-6
            w-full
            list-none
            p-[0.15rem]
            flex
            bg-purple-800
            rounded-[0.5rem]
            text-white
            shadow-lg
            border-2
            hover:border-accent
            hover:bg-gradient-to-r
            hover:from-purple-800
            hover:to-purple-400
            transition-all
        "
        >
            <a href={`/post/${id}`} class="no-underline leading-[1.4] px-[1.3rem] py-[1rem] opacity-80">
                <h2 class="m-0 text-md">{ title }</h2>
                <p class="mt-2 mb-0 text-slate-200">{ body }</p>
                <p class="mt-3 mb-0 text-slate-100 float-right italic">{ sub }</p>
            </a>
        </li>
    )
}

export default PostListItemDark;