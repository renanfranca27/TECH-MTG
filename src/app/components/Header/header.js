"use client";
import style, { Tagnav, TagSection, TAgUl } from "./style.header"

 export default function Navbar  () {

    return (

       <Tagnav>

         <section>
               <h2>
                  TECH MTG 
               </h2>
         </section>
        <TAgUl>
        <li>HOME</li>
        <li>SOBRE </li>
        <li>SERVICO</li>
        <TagSection>
        <li>CONTATO</li>
    </TagSection>
        </TAgUl>
        
       </Tagnav>
    )
 } 