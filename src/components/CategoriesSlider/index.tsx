import { categories } from "../../mocks/categories"
import { StyledDiv } from "./styles"

export function CategoriesSlider(){
    return(
        <StyledDiv>
            <div className="rail">
                {categories.map((category) => (
                    <a href="">{category.name}</a>
                ))}
            </div>
        </StyledDiv>
    )
}
