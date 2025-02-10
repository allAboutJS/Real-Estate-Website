export default function PostsOptimisticUi() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array(8)
                .fill(Math.random())
                .map((value) => (
                    <div key={value} className="animate-pulse aspect-square min-h-52 bg-zinc-200"></div>
                ))}
        </div>
    );
}
