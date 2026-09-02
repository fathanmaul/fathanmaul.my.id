const nav: any = [];

export default function Navbar() {
    const pathname: string = window.location.pathname;

    return (
        <nav className="hidden gap-8 text-sm text-muted-foreground sm:flex">
            {nav.map((item: any) => {
                const isActive = pathname === item.href;

                return (
                    <a
                        key={item.href}
                        href={item.href}
                        className={`transition-colors hover:text-foreground ${isActive ? 'text-foreground font-medium' : ''
                            }`}
                    >
                        {item.title}
                    </a>
                )
            })}
        </nav>
    )
}