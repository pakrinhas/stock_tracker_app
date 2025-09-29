import Link from "next/link";
import { usePathname } from "next/navigation"; // for active link
import { NAV_ITEMS } from "@/lib/constants";

const NavItems = () => {
    const pathname = usePathname();

    const isActive = (href: string) => pathname === href;

    return (
        <ul className="flex flex-sm sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
            {NAV_ITEMS.map(({ href, label }) => (
                <li key={href}>
                    <Link
                        href={href}
                        className={`hover:text-yellow-500 transition-colors ${
                            isActive(href) ? "text-gray-100" : ""
                        }`}
                    >
                        {label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavItems;
