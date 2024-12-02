export default function ErrorMessage({
    children,
}: {
    children: React.ReactNode;
}) {
    return <span className="text-black font-medium ml-2">{children}</span>;
}
