import { Menu, Transition } from "@headlessui/react";

export default function Dropdown() {
    return (
        <Menu>
            <Menu.Button className="pointer-events-auto">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </Menu.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Menu.Items>
                    <Menu.Item>
                        <a
                            className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black pointer-events-auto"
                            href="/account-settings"
                        >
                            Account settings
                        </a>
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a className={`${active && "bg-blue-500"} pointer-events-auto`} href="/account-settings">
                                Account settings
                            </a>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <a className={`${active && "bg-blue-500"} pointer-events-auto`} href="/account-settings">
                                Documentation
                            </a>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}
