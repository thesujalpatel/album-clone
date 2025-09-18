# Button Components Documentation

## Overview
This document provides a comprehensive guide to the button components used in the Album Clone application. It covers the various styles, states, and usage guidelines to ensure consistency and usability across the application.

## Button Variants
The application features several button variants, each designed for specific use cases:

1. **Primary Button**
   - **Purpose**: Used for the main call to action.
   - **Style**: Background color is set to the primary color with contrasting text.
   - **Example**:
     ```html
     <button class="button button-primary">Main Action</button>
     ```

2. **Secondary Button**
   - **Purpose**: Used for secondary actions that complement the primary action.
   - **Style**: Background color is set to the secondary color with contrasting text.
   - **Example**:
     ```html
     <button class="button button-secondary">Secondary Action</button>
     ```

3. **Outline Button**
   - **Purpose**: Used for actions that are less prominent but still important.
   - **Style**: Transparent background with a border and colored text.
   - **Example**:
     ```html
     <button class="button button-outline">Outline Action</button>
     ```

4. **Toggle Button**
   - **Purpose**: Used for toggling states or options.
   - **Style**: Styled to indicate active/inactive states.
   - **Example**:
     ```html
     <button class="button button-toggle">Toggle Option</button>
     ```

## Button States
Each button variant supports several states to enhance user interaction:

- **Default**: The standard appearance of the button.
- **Hover**: Changes in appearance when the user hovers over the button.
- **Focus**: Visual indication when the button is focused, typically for accessibility.
- **Disabled**: A grayed-out appearance indicating that the button is not clickable.

## Usage Guidelines
- Use primary buttons for the most important actions on the page.
- Reserve secondary buttons for actions that are less critical but still necessary.
- Outline buttons should be used sparingly to avoid confusion with primary actions.
- Toggle buttons should clearly indicate their current state to the user.

## Accessibility
Ensure that all buttons have appropriate aria-labels and are keyboard navigable to enhance accessibility for all users.

## Conclusion
By adhering to these guidelines and utilizing the button components effectively, the Album Clone application will maintain a consistent and user-friendly interface.