import React from 'react';
import {ChevronDownIcon} from "@heroicons/react/outline";
import {Menu} from '@headlessui/react';

const MyComponent = () => {

    return (
        // by default all "headlessui" components - are React fragments: they don't make tags and disappear
        // with "as" keyword - they may stay in DOM
        <Menu as="div" className="relative">
            <Menu.Button className="inline-flex justify-centerrounded-md-border border-gray-300
             shadow-sm px-4 py-2 bg-white text-sm text-gray-500"> Options Menu
                <ChevronDownIcon className="mr-1 ml-2 h-5 w-5" aria-hidden="true"/>
            </Menu.Button>

            <Menu.Items
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1">
                <Menu.Item>
                    {({active}) => (
                        <a href="#"
                           className={`${active ? 'bg-indigo-500 text-white' : 'text-gray-700'} group flex items-center px-4 py-2 text-sm`}>Duplicate</a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    <a href="#" className="group flex items-center px-4 py-2 text-sm text-gray-700
                hover:bg-indigo-500 hover:text-white">Edit</a>
                </Menu.Item>
                <Menu.Item disabled>
                    <a href="#" className="group flex items-center px-4 py-2 text-sm text-gray-700
                hover:bg-indigo-500 hover:text-white">Disabled one</a>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    );
};

export default MyComponent;
