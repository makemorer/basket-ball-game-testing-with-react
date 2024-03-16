import { render, screen } from "@testing-library/react"
import { CalPoints } from "./unlucky"

describe("Basket Ball Game", ()=>{
    fit("Round Score for 52CD+", ()=>{
        render(<CalPoints ops="5 2 C D +"/>)
        const result = screen.getByText(/[0-9]/)
        expect(result).toBeInTheDocument()
    })
})