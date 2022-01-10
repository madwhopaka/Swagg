    import React from 'react'
    import styled from 'styled-components' ; 
    import Products from '../Components/Products.jsx'
    import Nav from '../Components/Nav';
    import Anouncement from '../Components/Anouncement';
    import Newsletter from '../Components/Newsletter';
    import Footer from '../Components/Footer';

    const Container = styled.div` 
    `
    const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between; `;

    const Filter = styled.div`
    margin:20px; ` ;  

    const FilterText =  styled.span`
    font-size:20px ;
    font-weight: 600;
    `
    
    const Title =  styled.h1 `
        margin:20px ;
    `
    const Select = styled.select `
    margin-left:20px;
    padding: 10px;
    
    `; 
    const Option = styled.option`
          border-radius: 20px ;
    ` ;
    function ProductList() {
        return (
            <Container>
            <Nav />
            <Anouncement />
            <Title>
                Dresses
            </Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                <Select>
                    <Option selected disabled>
                        Color
                    </Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                    <Option>Orange</Option>

                    </Select>
                    <Select>
                    <Option selected disabled>
                        Size
                    </Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    </Select>
                    
                    </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>
                        Newest
                    </Option>
                    <Option>Price (low-high)</Option>
                    <Option>Price(high-low)</Option>
                    </Select></Filter>
            </FilterContainer>
            <Products />
            <Newsletter />
             <Footer />
            </Container>
        )
    }
    
    export default ProductList
    