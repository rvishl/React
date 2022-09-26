## 07-Sep, 2022

- Combining (Linking) 2 things together.
- Concatenation Operator -> +

## Heterogenous Concatenation
### number & string
- In JS, the + operator is having multiple purposes, for numbers, it will perform mathematical addition. For string, it will perform concatenation.
- number + number = number
- string + string = string
- When use + operator with number and string, it will give priority to string and make the number also string. 
- string + number = string
- number + string = string

### Array & String
- This will just concatenate directly.
- It will put commas in between for the array and just concatenate the string afterwards.

**BEDMAS -> Brackets, Exponents, Division, Multiplication, Addition, Subtraction.**

## string templating / Template Literals / String Literals:
- Introduced in ES6 (2015)
- Example:
    - Geeting OTP message for Transaction.
    - Your OTP for transaction for 100 Rupees with Card Number ending with xx1234 is 98453.
    - Template:
        - Your OTP for Transaction for <amount> Rupees with Card Number ending with xx<CardNumber> is <OTPValue>.
- This is a string that we define and fill with the actual data that we have and then use it.
- Syntax:
    - To create a string, we use backtick ``.
    - Inside the template, if we want to use a variable, we use ${}.
    - There can be any JS execution, like some calculation ar even a function call.
    - But it was to be inside of ${}.
    - We should use it everywhere.

### Further Reading:
- Type conversion and Datatype priorities.

## Assingnment:
- To be done in Vanilla JS.
- Create a form, take the first name and last name.
- Take the email.
- When the button is clicked for form submit.
- Show the message (as alert or inside the DOM).
- `Hello <first_name> <last_name>, we will reach out to you shortly at <email>.`
- Using string templating.