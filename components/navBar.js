import React from 'react';


const Menu = () => {
    return (

        <nav class="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-transparent shadow sm:items-baseline w-full">
            <div class="mb-2 sm:mb-0">
                <a href="/home" class="text-2xl no-underline text-black font-bold hover:text-blue-dark">DEV</a>
            </div>
            <div>
                <a href="/one" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">About</a>
                <a href="/two" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Projects</a>
                <a href="/three" class="text-lg no-underline text-grey-darkest hover:text-blue-dark ml-2">Contact</a>
            </div>
        </nav>
    );
}

export default Menu;