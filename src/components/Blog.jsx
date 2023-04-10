import React from 'react';

const Blog = () => {
    return (
        <div className='p-4 lg:w-[900px] mx-auto'>
            <div>
                <h2 className='font-bold text-2xl py-2'>When should you use context API?</h2>
                <p>We have data that needs to be shared across multiple components. Context can be used to store and manage data that needs to be accessed by multiple components in your application. Instead of passing data through props at every level. You can provide the data through a context provider and the consuming components can access the data using a context consumer. In some cases, you may have components that are not directly related to each other, but still need to access the same data. Using the Context API can help you separate concerns and keep your code organized by providing a centralized location for managing shared data</p>
            </div>
            <div>
                <h2 className='font-bold text-2xl py-2'>What is a custom hook?</h2>
                <p>In react, Custom hooks are created by using existing React hooks, such as useState or useEffect, to create a new hook with specific functionality. The resulting custom hook can then be imported and used in any component in the application. Custom hooks can take in any number of arguments and return any value that is needed.</p>
            </div>
            <div>
                <h2 className='font-bold text-2xl py-2'>What is useRef?</h2>
                <p>In React, the useRef hook is a function that returns a mutable ref object that can be used to hold a reference to a DOM node, a component instance, or any other value that needs to persist between renders. We can use to Accessing the value of an input field or other form element. The useRef hook can be used to hold a reference to the DOM node for an input field, allowing you to easily access its value without having to pass it down through props or state.</p>
            </div>
            <div>
                <h2 className='font-bold text-2xl py-2'>What is useMemo?</h2>
                <p>useMemo is a hook provided by React that allows you to memoize the result of a function call, similar to the memo higher order component. This means that if the input values to the function haven't changed, the previously computed output value will be returned, without having to recompute it.</p>
            </div>
        </div>
    );
};

export default Blog;