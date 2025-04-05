"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import { RxDashboard } from "react-icons/rx";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { AiOutlineCustomerService } from "react-icons/ai";

const links = [
  { name: "Home", href: "/dashboard", icon: RxDashboard },
  { name: "Invoices", href: "/dashboard/invoices", icon: LiaFileInvoiceSolid },
  {
    name: "Customers",
    href: "/dashboard/customers",
    icon: AiOutlineCustomerService,
  },
];

function NavLinks() {
  const pathName = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link href={link.href} key={link.name}
          className={clsx(
            "text-xl flex flex-row items-center gap-1 grow bg-neutral-900 text-white",
            {
              "text-blue-600" : pathName === link.href
            }
          )}
          >
            <p>{link.name}</p>
            <LinkIcon />
          </Link>
        );
      })}
    </>
  );
}

export default NavLinks;
