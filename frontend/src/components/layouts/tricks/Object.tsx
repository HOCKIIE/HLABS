export const Title = ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-4xl font-semibold mb-6 mt-10 text-slate-700 dark:text-slate-300">{children}</h1>
);

export const SubTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl mb-4 mt-8 text-slate-700 dark:text-slate-400">{children}</h2>
);