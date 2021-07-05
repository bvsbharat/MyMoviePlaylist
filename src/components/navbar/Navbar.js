import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import RouteLinks from "../routeLinks";
import { routes } from "../../routeConfig";
import Link from "next/link";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    return (
        <Disclosure as="nav" className="w-full mx-auto bg-white shadow">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <h3 className="text-base text-white font-bold tracking-normal leading-tight ml-3 block lg:hidden h-8 w-auto">
                                        <span className="relative inline-block px-6 py-2">
                                            <div className="absolute inset-0 transform skew-x-12 bg-teal-accent-400" />

                                            <Link href="/dashboard">
                                                <a
                                                    href="#"
                                                    className="relative text-teal-900"
                                                >
                                                    MY PLAYLIST
                                                </a>
                                            </Link>
                                        </span>
                                    </h3>

                                    <h3 className="text-base text-white font-bold tracking-normal leading-tight ml-3 hidden lg:block h-8 w-auto">
                                        <span className="relative inline-block px-6 py-2">
                                            <div className="absolute inset-0 transform skew-x-12 bg-teal-accent-400" />

                                            <Link href="/dashboard">
                                                <a
                                                    href="#"
                                                    className="relative text-teal-900"
                                                >
                                                    MY PLAYLIST
                                                </a>
                                            </Link>
                                        </span>
                                    </h3>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {routes.map((item, i) => (
                                            <Link
                                                key={i}
                                                href={`/${item.href}`}
                                            >
                                                <a
                                                    key={item.name}
                                                    href="#"
                                                    className={classNames(
                                                        item.current
                                                            ? "bg-gray-900 text-white"
                                                            : "text-black-300 hover:text-teal-accent-400",
                                                        "px-3 py-2 rounded-md text-sm font-medium",
                                                    )}
                                                    aria-current={
                                                        item.current
                                                            ? "page"
                                                            : undefined
                                                    }
                                                >
                                                    {item.name}
                                                </a>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {routes.map((item) => (
                                <Link key={item.name} href={`/${item.href}`}>
                                    <a
                                        href="#"
                                        className={classNames(
                                            item.current
                                                ? "bg-gray-900 text-white"
                                                : "text-black-300 hover:text-teal-accent-400",
                                            "block px-3 py-2 rounded-md text-base font-medium",
                                        )}
                                        aria-current={
                                            item.current ? "page" : undefined
                                        }
                                    >
                                        {item.name}
                                    </a>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
