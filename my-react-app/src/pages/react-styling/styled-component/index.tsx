import React from 'react'
import styled from 'styled-components'
import { BlogTitle, LemonButton, NormalButton, TomatoButon } from './StyleComponent'

const StyleCompnents = () => {
  return (
    <>
        {/* // demo nested theme  */}
        <BlogTitle>Demo5 -Styling button</BlogTitle>

        
        {/* end demo  */}
        <hr />
        {/* theme-demo  */}
        <BlogTitle>Demo4 -Styling button</BlogTitle>
        
        {/* end-demo  */}
        <hr />
         <BlogTitle>Demo3 -Styling button</BlogTitle>
         <div>
            <TomatoButon primary>Tomato</TomatoButon>
            <TomatoButon>White</TomatoButon>

         </div>
         <hr />
         <div>
            <LemonButton primary>Yellow</LemonButton>
            <LemonButton>Black</LemonButton>

         </div>
         <hr />
        <BlogTitle>Demo2 -Styling button</BlogTitle>
        <NormalButton type = {"primary"}>Normal</NormalButton>
        <NormalButton>Colored</NormalButton>
        <NormalButton type = {"dark"}>Dark</NormalButton>
        <Wrapper>
                <PageTitle>
                Wellcome to <strong>Styling Component</strong>
                </PageTitle>
        </Wrapper>
        <hr />
        <section style={{ padding : "4rem"  , backgroundColor:"papayawhip"}}>
            <h2 style={{ fontSize:"1.5rem" , textAlign:"center"  , color:"#bf4f74"}}> 
                Wellcome to <strong>Styling Component</strong>
            </h2>
        </section>
    </>
  )
}

export default StyleCompnents

const Wrapper  = styled.section`
    padding:4rem ; 
    background-color: papayawhip ; 
`

const PageTitle = styled.h2 `
    font-size:1.5rem ; 
    text-align:center ; 
    color : #bf4f74 ; 
`