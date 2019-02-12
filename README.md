# Work & Co Web Code Assessment

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

To start a development server:

```
npm start
```

## Tasks

Please publish your work to a fork of this repo. You're welcome (but not required) to add any libraries you think would be helpful.

Note: You're encouraged to show your work by including multiple commits - we'll be looking through your fork's git history.

1. [Implement Responsive Design](/tasks/01-responsive-design.md)
2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)
3. [Hook Up Product API](/tasks/03-product-api.md)

Please also update this README file: we'd love to see notes on your decision-making process, links to the most exciting pieces of code, or anything else that will give us additional context when reviewing your assessment.

## Implementation

I used react-modal for the shopping cart, as it is easy to configure and well supported. I decided to use SASS for styles as that is what I am most comfortable with. My pattern in the file structure of the styles is meant to isolate component specific styles and organize other utility classes to promote resusablity and making updates easier.

## To Do

- Hook up to Products API
- Convert SVGs to icon font
- Add Tax and Subtotal
- Error Messaging for Cart controls
