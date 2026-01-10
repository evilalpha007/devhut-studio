export default function TestAnimationPage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-white text-black p-24">
            
            <h1 className="text-5xl font-bold mb-8">Animation Test Page</h1>
            <p className="text-xl text-neutral-400 max-w-2xl text-center mb-12">
                If you are seeing this, the page transition worked!
                <br />
                Notice how the previous page faded out and this one faded in?
            </p>

            <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="w-32 h-32 bg-black rounded-xl animate-pulse delay-75" />
                ))}
            </div>
        </div>
    );
}
