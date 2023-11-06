import { findByText, queryByText, render,screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Greeting from "./Greeting"

describe("Greeting component",()=>{
    test('renders Hello World as a text',()=>{
        //Arrange
        render(
            <Greeting/>
        )
        // Act
        // Assert
        const helloWorld=screen.getByText("Hello world!")
    
        expect(helloWorld).toBeInTheDocument();
    }),
    test("renders 'It's good to see you!' when the button is not clicked",()=>{
        render(<Greeting/>)
        const greetingText=screen.getByText("It's good to see you!");
        expect(greetingText).toBeInTheDocument();
    })
    test("renders 'clicked!' when the button is clicked",()=>{
        //Arrange
        render(<Greeting/>)
        //Act
        const buttonElement=screen.getByRole('button')
        userEvent.click(buttonElement)
        //Assert
        const changedText=screen.getByText("Changed!");
        expect(changedText).toBeInTheDocument();
    }),
    test("Paragraph with 'good to see you' textis not visible after a button press",()=>{
        render(<Greeting/>)
        const buttonElement=screen.getByRole('button')
        userEvent.click(buttonElement)
        const greetingText=screen.queryByText("It's good to see you!");
        expect(greetingText).not.toBeInTheDocument();
    })
})

