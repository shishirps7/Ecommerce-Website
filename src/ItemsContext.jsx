import React, { useState } from 'react'
import { createContext } from 'react'
const itemsarr=[

    {   id:1,
        image:"https://demo-milano.myshopify.com/cdn/shop/files/16_1.webp?v=1742478341",
        image2:"https://demo-milano.myshopify.com/cdn/shop/files/16_5_6b97c023-c24b-42be-b677-bb9499dcb483.webp?v=1742478341",
        title:"Short studded denim dress",
        price:"$400.00",
    },
    {   id:2,
        image:"//demo-milano.myshopify.com/cdn/shop/files/15_1.webp?v=1752397915",
        image2:"https://demo-milano.myshopify.com/cdn/shop/files/15_5_269aa495-12a9-46de-9e89-d83e379fa809.webp?v=1752397915",
        title:"Basic Blazer",
        price:"$225.00",
    },
    {
        id:3,
        image:"//demo-milano.myshopify.com/cdn/shop/files/14_1_4f52feaa-9e18-462c-b05e-f508d14c8535.webp?v=1742478979&amp;width=750",
        image2:"//demo-milano.myshopify.com/cdn/shop/files/14_5_0a387169-ee10-4173-a8ed-21f4f52a8442.webp?v=1742478979",
        title:"Waistcoat With Pockets",
        price:"$270.00"
    },
    {
        id:4,
        image:"https://demo-milano.myshopify.com/cdn/shop/files/13_5_9c0bcbd4-c27f-4289-be76-af9c5c06aedf.webp?v=1742479315&amp;width=750",
        image2:"https://demo-milano.myshopify.com/cdn/shop/files/13_1_5644aee9-7e1a-4296-baac-e448257d812c.webp?v=1742479315%22%20alt=%22Belted%20blazer%20dress%22%20width=%22750",
        title:"Belted blazer dress",
        price:"$300.00"
    },
    {   id:5,
        image:"https://demo-milano.myshopify.com/cdn/shop/files/12_1_0a40a6c4-7c4c-44fa-9b49-b65c5319d9be.webp?v=1742479651&amp;width=750",
        image2:"https://demo-milano.myshopify.com/cdn/shop/files/12_6_ada259a9-91fa-4c1c-8b48-a5f3412e1442.webp?v=1742479651%22%20alt=%22Short%20sleeve%20T-shirt%22%20width=%22750",
        title:"Short sleeve T-shirt",
        price:"$125.00"
        },
        {   id:6,
            image:"//demo-milano.myshopify.com/cdn/shop/files/11_5_1c421dd0-c8e0-42c5-8a86-3310e50743eb.webp?v=1742480025&amp;width=750",
            image2:"https://demo-milano.myshopify.com/cdn/shop/files/11_1_788abbae-6203-42d2-9c0a-1e1bd7dcc57f.webp?v=1742480025%22%20alt=%22Soft-touch%20vest%20sweater%22%20width=%22750",
            title:"Soft-touch vest sweater",
            price:"$150.00"
        },
        {   id:7,
            image:"//demo-milano.myshopify.com/cdn/shop/files/10_1_477215e8-f440-481b-bd81-e16c9bc23e79.webp?v=1742480250&amp;width=750",
            image2:"https://demo-milano.myshopify.com/cdn/shop/files/10_5_dfbfc146-f456-47d8-af6d-32d63ed7ac44.webp?v=1742480250",
            title:"Faux fur gilet",
            price:"$320.00"
        },
        {   id:8,
            image:"//demo-milano.myshopify.com/cdn/shop/files/9_1_0e8a5236-cffc-4b58-954c-85aa7a471f4c.webp?v=1742459063&amp;width=750",
            image2:"https://demo-milano.myshopify.com/cdn/shop/files/9_5_a0a10670-d517-4d26-a95e-0f3025f10798.webp?v=1742459063",
            title:"Long belted sweater",
            price:"$240.00"
        },
        {   id:9,
            image:"//demo-milano.myshopify.com/cdn/shop/files/8_1_5daebf3d-8d8a-44ef-ae84-a8ebbfbb39ec.webp?v=1742480430&amp;width=750",
            image2:"https://demo-milano.myshopify.com/cdn/shop/files/8_5_309d0409-6a8f-4b66-8547-2675fe0021aa.webp?v=1742480430",
            title:"Oversized shirt",
            price:"$120.00"
        },
        {   id:10,
            image:"//demo-milano.myshopify.com/cdn/shop/files/7_1_7e834f3a-e126-4202-be49-729718203ffa.webp?v=1742480743&amp;width=750",
            image2:"//demo-milano.myshopify.com/cdn/shop/files/7_5_444fe8d4-5178-475a-8e34-ce35e36f7c84.webp?v=1742480742",
            title:"Poplin shirt",
            price:"$100.00"
        },
        {   id:11,
            image:"//demo-milano.myshopify.com/cdn/shop/files/6_5.webp?v=1742480969&amp;width=750",
            image2:"//demo-milano.myshopify.com/cdn/shop/files/6_1.webp?v=1742480969",
            title:"Flowing parka",
            price:"$245.00"
        },
        {   id:12,
            image:"//demo-milano.myshopify.com/cdn/shop/files/1_1_69ccdae9-654a-4d42-b951-34c7656067e9.webp?v=1742481089&amp;width=750",
            image2:"//demo-milano.myshopify.com/cdn/shop/files/1_5_b3aabf7b-90f7-41b9-aeaa-7998fd195c09.webp?v=1742481089",
            title:"Soft tracksuit sweatshirt",
            price:"$220.00"
        },
        {   id:13,
            image:"//demo-milano.myshopify.com/cdn/shop/files/2_5_bcf51a71-ddbb-47bb-9f99-8af16472bf3a.webp?v=1742481311&amp;width=750",
            image2:"//demo-milano.myshopify.com/cdn/shop/files/2_1_0e4a55ee-8d27-4e72-875c-0229bf520672.webp?v=1742481311",
            title:"Cropped denim shirt",
            price:"$165.00"
        },
        {   id:14,
            image:"//demo-milano.myshopify.com/cdn/shop/files/3_1_98ff92ef-d5d3-4423-8a13-7bcf584b5c1b.webp?v=1742481425&amp;width=750",
            image2:"",
            title:"Stretch T-shirt with thin straps Pale Pink",
            price:"$140.00"
        },
        {   id:15,
            image:"//demo-milano.myshopify.com/cdn/shop/files/4_1_1f9a1b39-5f2d-4401-8874-9ca960a89749.webp?v=1742481512&amp;width=750",
            image2:"//demo-milano.myshopify.com/cdn/shop/files/4_5_49f2ee17-4cbe-4ed7-9abd-146d3f9ac54e.webp?v=1742481512",
            title:"high neck jumper",
            price:"$250.00"
        },
        {   id:16,
            image:"//demo-milano.myshopify.com/cdn/shop/files/5_1_23fe5fb3-4888-4e7c-baf4-b6919271d29d.webp?v=1742481673&amp;width=750",
            image2:"https://demo-milano.myshopify.com/cdn/shop/files/5_5_227d3051-829a-4ccf-8281-d96e0c31d539.webp?v=1742481673",
            title:"Zip neck jumper",
            price:"$200.00"
            }
        ]
        
      const ItemsContext = createContext(itemsarr)
      const ItemsContextProvider = ({children})=>{
        const [list,setlist]=useState(itemsarr)
          return (
              <ItemsContext.Provider value={{list,setlist}}>
                  {children}
              </ItemsContext.Provider>
          )
      }
        export default ItemsContext;
        export {ItemsContextProvider};