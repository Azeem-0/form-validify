# FormValidify Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
   - [Components](#components)
   - [FormValidify](#formvalidify)
   - [InputComponent](#inputcomponent)
   - [SelectComponent](#selectcomponent)
   - [TextAreaComponent](#textareacomponent)
   - [ButtonComponent](#buttoncomponent)
4. [Props](#props)
   - [FormValidify Props](#formvalidify-props)
   - [InputComponent Props](#inputcomponent-props)
   - [SelectComponent Props](#selectcomponent-props)
   - [TextAreaComponent Props](#textareacomponent-props)
   - [ButtonComponent Props](#buttoncomponent-props)
5. [Examples](#examples)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction

**FormValidify** is a customizable and reusable form validation library built with React and TypeScript. It provides components for creating forms with validation, error handling, and customizable styles. The package is designed to be easy to use and integrates smoothly into your React applications.

## Installation

To install **FormValidify**, use npm or yarn:

```bash
npm install form-validify
```

or 

```bash
yarn add form-validify
```

## Usage

To use **FormValidify** in your project, import the components you need:

```tsx
import { FormValidify, InputComponent, SelectComponent, TextAreaComponent, ButtonComponent } from 'form-validify';
```

### Components

**FormValidify** comes with the following components:

- `FormValidify`
- `InputComponent`
- `SelectComponent`
- `TextAreaComponent`
- `ButtonComponent`

### FormValidify

The main component that wraps around your form elements to handle validation.

```tsx
<FormValidify>
  {/* Form components go here */}
</FormValidify>
```

### InputComponent

A customizable input field component.

```tsx
<InputComponent
  name="username"
  label="Username"
  type="text"
  placeholder="Enter your username"
  minLength={6}
  maxLength={15}
/>
```

### SelectComponent

A dropdown select component for choosing from predefined options.

```tsx
<SelectComponent
  name="gender"
  label="Gender"
  options={[
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ]}
/>
```

### TextAreaComponent

A customizable text area component.

```tsx
<TextAreaComponent
  name="bio"
  label="Bio"
  placeholder="Tell us about yourself"
  rows={10}
  cols={20}
/>
```

### ButtonComponent

A customizable button component for submitting the form.

```tsx
<ButtonComponent
  type="submit"
  label="Submit"
/>
```

## Props

### FormValidify Props

| Prop      | Type                     | Description                                          |
|-----------|--------------------------|------------------------------------------------------|
| onSubmit  | (values: Record<string, string>) => void | Function to handle form submission with values.     |
| children  | ReactNode                | Child components (form elements).                   |

### InputComponent Props

| Prop         | Type           | Description                                  |
|--------------|----------------|----------------------------------------------|
| name         | string         | The name of the input field.                |
| label        | string         | Label text for the input field.             |
| type         | string         | Type of the input field (e.g., text, email).|
| placeholder   | string        | Placeholder text for the input field.       |
| minLength    | number         | Minimum length for validation (optional).    |

### SelectComponent Props

| Prop      | Type                           | Description                              |
|-----------|--------------------------------|------------------------------------------|
| name      | string                         | The name of the select field.            |
| label     | string                         | Label text for the select field.         |
| options   | Array<{ value: string; label: string }> | Array of options for the select field.   |

### TextAreaComponent Props

| Prop      | Type                     | Description                                   |
|-----------|--------------------------|-----------------------------------------------|
| name      | string                   | The name of the text area.                   |
| label     | string                   | Label text for the text area.                |
| placeholder | string                | Placeholder text for the text area.          |

### ButtonComponent Props

| Prop      | Type                     | Description                                   |
|-----------|--------------------------|-----------------------------------------------|
| type      | string                   | Type of the button (e.g., submit).          |
| label     | string                   | Label text for the button.                   |
| onSubmit  | (values: Record<string, string>) => void | Function to handle button click (optional). |

## Examples

### Basic Usage

```tsx
import React from 'react';
import { FormValidify, InputComponent, SelectComponent, TextAreaComponent, ButtonComponent } from 'form-validify';

function App() {
  return (
    <FormValidify onSubmit={(values) => console.log(values)}>
      <InputComponent
        name="username"
        label="Username"
        type="text"
        placeholder="Enter your username"
        minLength={6}
      />
      <InputComponent
        name="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
      />
      <SelectComponent
        name="gender"
        label="Gender"
        options={[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'other', label: 'Other' },
        ]}
      />
      <TextAreaComponent
        name="bio"
        label="Bio"
        placeholder="Tell us about yourself"
      />
      <ButtonComponent type="submit" label="Submit" />
    </FormValidify>
  );
}
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
