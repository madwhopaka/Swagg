    import React, {useState,useEffect} from 'react'
    import styled from 'styled-components' ; 
    import Products from '../Components/Products.jsx'
    import { useLocation } from 'react-router-dom';
    import Nav from '../Components/Nav';
    import Anouncement from '../Components/Anouncement';
    import Newsletter from '../Components/Newsletter';
    import Footer from '../Components/Footer';
    import { homeProducts } from '../utils/homeProducts.js';
    import Product from '../MobileComp/OutProduct'
    import { mobile } from '../responsive.js';

    const Container = styled.div` 
    `
    const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between; 
    ${mobile({justifyContent:"center"})}`;

    const Filter = styled.div`
    margin:20px;
     ` ;  

    const FilterText =  styled.span`
    font-size:20px ;
    ${mobile({fontSize:"18px", fontWeight:"400"})}
    font-weight: 600;
    `
    
    const Title =  styled.h1 `
        margin:20px ;
        ${mobile({fontSize:"30px", color:"#2C4152", margin:"0px 15px", textAlign:"center"})}
    `
    const Select = styled.select `
    ${mobile({padding:0, marginLeft:"0px"})}
    margin-left:20px;
    padding: 10px;
    
    `; 
    const Option = styled.option`
          border-radius: 20px ;
    ` ;



function ProductList() {
        const [dimensions, setDimensions] = React.useState({ 
            height: window.innerHeight,
            width: window.innerWidth
          });
        
        const [filters, setFilters] = useState({}) ;    
        const [sort, setSort] = useState("new") ;    

        useEffect(() => {
            function handleResize() {
                setDimensions({
                  height: window.innerHeight,
                  width: window.innerWidth
                });
            }
    
            window.addEventListener('resize', handleResize);
        });
        const location = useLocation() ; 
        const query = location.pathname.split("/")[2].toUpperCase() ;
        console.log(query);


        const handleFilters = (e)=> {
                const value = e.target.value ; 
                setFilters({
                   ...filters, 
                   [e.target.name] : value  ,
                })
                
        }
        return (
            <Container>
            <Nav />
            <Anouncement />
            <Title>
                {query}
            </Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products:</FilterText>
                <Select name = "color" onChange={handleFilters}>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option value="black">Black</Option>
                    <Option value= "white">White</Option>
                    <Option value="grey">Grey</Option>
                    <Option value="red">Red</Option>

                    </Select>
                    <Select name = "size" onChange = {handleFilters}>
                    <Option disabled selected >
                        Size
                    </Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    </Select>
                    
                    </Filter>
                <Filter><FilterText>Sort Products:</FilterText>
                <Select onChange={(e)=>{setSort(e.target.value)}}>
                    <Option  value= "newest"> Newest </Option>
                    <Option value = "low">Price (low-high)</Option>
                    <Option value = "high">Price(high-low)</Option>
                    </Select></Filter>
            </FilterContainer>
            {dimensions.height>dimensions.width? <Product cat = {query.toLowerCase()} filters = {filters} sort = {sort} />: <Products cat = {query.toLowerCase()} filters = {filters} sort = {sort} />    }
            <Newsletter />
             <Footer />
            </Container>
        )
    }
    
    export default ProductList
    