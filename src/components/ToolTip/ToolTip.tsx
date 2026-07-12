
export const Tooltip = ({ text, children }: { text: string; children: React.ReactNode }) => {
    return (
        <div className="group relative inline-block">
            {children}
            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                              whitespace-nowrap rounded bg-gray-100 px-5 py-3 text-xs text-black
                              opacity-0 group-hover:opacity-100 font-semibold transition-opacity pointer-events-none">
                {text}
            </span>
        </div>
    );
}
