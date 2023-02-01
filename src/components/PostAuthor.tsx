import { createSignal } from "solid-js";

interface User {
    name: string;
    phone: string;
    website: string;
    email: string
}

const PostAuthor = ({ userAPI }: { userAPI: string }) => {
    const [user, setUser] = createSignal<User | null>(null);
    const [loading, setLoading] = createSignal<boolean>(false);

    const fetchUser = async () => {
        setLoading(true);
        setUser(null);

        try {
            const res = await fetch(userAPI);
            const userData = await res.json();
            setUser(userData);
        } catch {
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <button
                onClick={() => fetchUser()} 
                disabled={loading() || !!user()}
                class="text-white bg-black font-bold mt-6 py-2 px-4 rounded pointer">
                { user() ? 'Here it is' : loading() ? 'Waitttt...' : 'Who is the Author?' }
            </button>

            {
                user() && (
                    <div class="mt-6">
                        <h2>{ user()?.name }</h2>
                        <p>{ user()?.phone }</p>
                        <p>{ user()?.website }</p>
                        <p>{ user()?.email }</p>
                    </div>
                )
            }
            
        </>
    )
};

export default PostAuthor;
