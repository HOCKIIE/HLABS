export default function FullScreenLoading() {
    return (
        <div className="fixed flex inset-0 z-9999 h-screen items-center justify-center bg-white dark:bg-slate-900 overflow-hidden">
            <div className="text-center animate-fade-in">
                <p className="text-5xl font-semibold tracking-wide dark:text-slate-300">SUPHAWAT</p>
                <p className="mt-2 text-xl text-slate-400 dark:text-slate-400 animate-pulse">Loading Profile…</p>
            </div>
        </div>
    );
}