import Link from "next/link";

/* eslint-disable @typescript-eslint/no-unused-vars */
interface NavItemProps {
    label: string;
    link: string;
    icon: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({
    label, link, icon
}) => {
    return (
        <Link href={link}>
            <div>{icon}</div>
        </Link>
    )
}

export default NavItem
