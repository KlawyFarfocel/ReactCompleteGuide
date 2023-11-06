import {render,screen} from "@testing-library/react"
import Async from "./async"
describe('Async component', () => {
     test("Renders post if request succeeds",async ()=>{
      window.fetch=jest.fn();
      window.fetch.mockResolvedValueOnce({
         json:async()=>[{id:"p1",title:"First post"}]
      })
        render(<Async/>)

        const listItems=await screen.findAllByRole("listitem",{})
        expect(listItems).not.toHaveLength(0);
     })
})