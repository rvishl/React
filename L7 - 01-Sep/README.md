## 01 - Sep

## Host it on Netlify
- https://www.netlify.com/
- Register on this website using Github
- Import using Github
- Click on Deploy
- Click on Build. Don't change anything.
- Wait for deploy to complete. When it says site is live, it means the site is deployed.
- If you have any Warnings in your console while development, Netlify will not deploy. It needs your code to be clean of warnings.
- You need to connect to a repository.
- Because of that connection, if you update any code in that repository, it will automatically update the deployed website.

**Shortcut URL for creating a new Repository is - repo.new.**

## Mapping function.
- Instead of write the same component again and again multiple times with different props, we write the data into an array.
- Later we just map on that array and return the Component from that map function.
- We can put anything in that callback function. We can give any logic as we wanted.
- Finally, we should return either a component or JSX from that callback.

**Warning: Each child in a list should have a unique "key" prop**
- We know react will track changes for better optimaization.
- But, in a loop, it is difficult to track. Therefore react will ask US (Developers) to give a unique key property to the items.
- This we can simply give the index.

- In style attribute, if we are giving the object directly, then we use double brackets. If we are referring to an object variable, then we use single curly.

## Hooks 
- These are special functions.
- These will provide additional functionality to your component.
- These are mostly stateful functions.
- These functions are tracked by React.
- If anything changes from this function's output, the component will re-render.
- This is for more realtime changes.
- These are functions which gives superpowers to your React application.
- Because hooks are functions. Everytime every hook that we import, we will hava to call it. (99% of the time).
- To identify, most developers write the hook name start with `use`.
- This is not mandatory, but a general practice.
- Hooks have the ability to re-render a component.


- Example: react-timer-hook 
- Shared in hooks project.

## Component vs Hook
- Components contains JSX code.
- Hooks are purely JS.
- Components can be stateful or stateless.
- Hooks are stateful.
- Components are added like HTML tag.
- Hooks are using like JS functions.

**Rendering -> Displaying, Re-rendering -> Updating.**


**Note: React DOES NOT want you use any DOM method, in fact, it does not want you to do any document.blah blah blah...**

## Event Liseners in React
- Here, we use onEvent approach and NOT use DOM.addEventListener.
- When giving the function reference, since it is a JS variable, we use {}.
- However, we DO NOT give the parentheses inside the function reference.
- If we do it, it will not crash, but it will give weired result.
- The function will be executed immediately and the onEvent listerner will not work anymore.

## State
- If I want React to track any variable, I need to create it using state hook.
- React will track that variable for changes.
- IF there are any changes, the component will be re-rendered.
- useState is the name of that hook which we will use to create trackable variables.
- Whenever we invoke the useState hook method, we can give the default value as it's argument (actual parameter).
- We can pass anything as an argument (function, primitive, non primitive, undefined, null).
- When we invoke the function of useState. It will return an array of 2 elements.
- The 0th index will contain the tracked variable.
- If this variable is updated, it will trigger a componenet re-rendering.
- In JS, variables cannot be tracked.
- Since it is not possible in the language itself, React has to find an alternate.
- That is, it will give a function.
- So, whenever we want to update the value of that state, we invoke the function.
- When involing, we have to give the new value.
- Here, there are two possibilities:
    - New values is dependent on the current value. - In this case, we pass the callback function, this callback function receives the current value as it's param and it manipulates whatever is needed and then returns the new (updated) value.
    - New value is not dependent on the current value. - We just pass that as parameter.

**States are those variables which are tracked by React, updating which will trigger a component re-render.**
**observable - tracked.**
**change the behaviour/output of the component - component re-rendering.**

# Assingnment:
- Implement Dislike functionality to the above states task.
- Add a button, clicking on which will reduce the value of the counter.

